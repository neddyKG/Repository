import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  url = 'http://localhost:4200';

  constructor(private http: HttpClient) {  }

  getUsers() {
     return this.http.get(this.url + '/users');
  }
}
