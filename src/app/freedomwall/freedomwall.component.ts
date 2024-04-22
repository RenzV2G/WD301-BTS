import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';  // <-- Import Router

@Component({
  selector: 'app-freedomwall',
  templateUrl: './freedomwall.component.html',
  styleUrls: ['./freedomwall.component.css']
})
export class FreedomwallComponent {
  title = 'entryapp';
  readonly APIUrl = "http://localhost:5038/api/entry/";

  constructor(private http: HttpClient, private router: Router) { }  // <-- Inject Router

  entry: any = [];
  filteredEntry: any = []; // to store filtered entries
  searchQuery: string = '';

  refreshEntry() {
    this.http.get(this.APIUrl + 'GetEntry').subscribe(data => {
      this.entry = data;
      this.applySearchFilter(); // Apply search filter after fetching entries
    });
  }

  applySearchFilter() {
    if (this.searchQuery) {
      this.filteredEntry = this.entry.filter((en: any) => 
        en.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        en.warning.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        en.experience.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        en.resolve.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        en.advice.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredEntry = [...this.entry];
    }
  }


  ngOnInit() {
    this.refreshEntry();
  }

  deleteEntry(id: any) {
    this.http.delete(this.APIUrl + 'DeleteEntry?id=' + id).subscribe(data => {
      alert(data);
      this.refreshEntry();
    });
  }

  onSearchChange() {
    this.applySearchFilter(); // Apply search filter when search query changes
  }

  editEntry(id: string) {
    console.log(`Navigating to editcompose with ID: ${id}`);
    this.router.navigate(['/editcompose', id]);  // Navigate to editcompose with entry ID
  }
}
