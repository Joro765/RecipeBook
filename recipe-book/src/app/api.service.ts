import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://localhost:3030/data';

  constructor(private http: HttpClient) { }



  getTopRecipes() {
    const api = this.apiUrl;

    return this.http.get(`${api}/recipes`)
  }
}
