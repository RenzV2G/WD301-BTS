import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpclientService {
  //Invoke HttpSclient as Dependency Injection
  readonly APIUrl = 'http://localhost:5038/api/entry/';
  constructor(private http: HttpClient) {}
  getEntryRemotely() {
    return this.http.get<any[]>(this.APIUrl + '/api/entry');
  }
}
