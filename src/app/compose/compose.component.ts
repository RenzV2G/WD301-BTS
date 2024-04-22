import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent {
  title = 'entryapp';
  readonly APIUrl="http://localhost:5038/api/entry/";
  
  constructor(private router: Router, private http: HttpClient) {
  }

  navigateToCompose() {
    this.router.navigateByUrl('/compose');
  }
  navigateToFreedomWall() {
    this.router.navigateByUrl('/freedomwall');
  }

  entry:any=[];

  refreshEntry(){
    this.http.get(this.APIUrl+'GetEntry').subscribe(data=>{
      this.entry=data;
    })
  }
  ngOnInit(){
    this.refreshEntry();
  }

  addEntry(){
    var newEntry=(<HTMLInputElement>document.getElementById("newEntry")).value;
    var newWarning=(<HTMLInputElement>document.getElementById("newWarning")).value;
    var newExperience=(<HTMLInputElement>document.getElementById("newExperience")).value;
    var newResolve=(<HTMLInputElement>document.getElementById("newResolve")).value;
    var newAdvice=(<HTMLInputElement>document.getElementById("newAdvice")).value;
    if (!newEntry || !newWarning || !newExperience || !newResolve || !newAdvice) {
      alert("Please fill in all fields.");
      this.navigateToCompose()
      return;
    }
    else {
      this.navigateToFreedomWall();
      var formData=new FormData();
      formData.append("title", newEntry);
      formData.append("warning", newWarning);
      formData.append("experience", newExperience);
      formData.append("resolve", newResolve);
      formData.append("advice", newAdvice);
      this.http.post(this.APIUrl+'AddEntry', formData).subscribe(data=>{
      alert(data);
      this.refreshEntry()
      location.reload();

    })
      return; 
    }
    
  }
  
  deleteEntry(id:any){
      this.http.delete(this.APIUrl+'DeleteEntry?id='+id).subscribe(data=>{
      alert(data);
      this.refreshEntry()
    })
  }
}