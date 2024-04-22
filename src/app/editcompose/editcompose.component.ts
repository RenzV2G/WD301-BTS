import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcompose',
  templateUrl: './editcompose.component.html',
  styleUrls: ['./editcompose.component.css']
})
export class EditcomposeComponent implements OnInit {
  title = 'entryapp';
  readonly APIUrl = "http://localhost:5038/api/entry/";
  
  constructor(
    private router: Router, 
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  entry: any = {
    id: '',
    title: '',
    warning: '',
    experience: '',
    resolve: '',
    advice: ''
  };

  ngOnInit(): void {
    const entryId = this.route.snapshot.paramMap.get('id');
    this.http.get(this.APIUrl + 'GetEntry/' + entryId).subscribe(data => {
      this.entry = data;
    });
  }

  navigateToFreedomWall() {
    this.router.navigateByUrl('/freedomwall');
  }

  editEntry() {
    if (!this.entry.title || !this.entry.warning || !this.entry.experience || !this.entry.resolve || !this.entry.advice) {
      alert("Please fill in all fields.");
      return;
    }
  
    const formData = new FormData();
    formData.append("title", this.entry.title);
    formData.append("warning", this.entry.warning);
    formData.append("experience", this.entry.experience);
    formData.append("resolve", this.entry.resolve);
    formData.append("advice", this.entry.advice);
  
    const entryId = this.entry.id; // Get entry ID from the entry object
    this.http.put(this.APIUrl + 'EditEntry/' + entryId, formData).subscribe(data => {
      alert(data);
      this.router.navigateByUrl('/freedomwall'); // Navigate to freedomwall after editing
    });
  }
  
}
