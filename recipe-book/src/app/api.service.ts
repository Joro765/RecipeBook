import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://localhost:3030/data';

  constructor(private http: HttpClient) { }


  // top recipes for home page
  getTopRecipes() {
    const api = this.apiUrl;
    return this.http.get(`${api}/recipes?offset=0&pageSize=6`)
  }


  // sorted by category
  getSortedRecipes(category: string) {
    const api = this.apiUrl;
    return this.http.get(`${api}/recipes?where=category%20LIKE%20%22dessert%22`);
  }


  // reguest for pagination
  getAllRecipes(x: string) {
    const offset = Number(x)
    const api = this.apiUrl;
    return this.http.get(`${api}/recipes?offset=${offset}&pageSize=6`)
  }
}
