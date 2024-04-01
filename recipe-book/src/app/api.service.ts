import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from './types/Recipe';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://localhost:3030/data';

  constructor(private http: HttpClient, private userService: UserService) { }


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



  // get a single recipe by ID
  getRecipe(id: string) {
    const api = this.apiUrl;
    return this.http.get<Recipe>(`${api}/recipes/${id}`)
  }



  // get user added recipes
  getUserRecipes(id: string) {
    const api = this.apiUrl;
    return this.http.get(`${api}/recipes?where=_ownerId%3D%22${id}%22`);
  }



  // Add recipe by authorized user
  addRecipe(data: Recipe) {
    const api = this.apiUrl;
    return this.http.post(`${api}/recipes`, data, {
      headers: {
        'X-Authorization': this.userService.user?.accessToken ?? "",
        'Content-type': 'application/json'
      }
    });
  }

  // Delete recipe by authorized user and owner
  deleteRecipe(id: string) {
    const api = this.apiUrl;
    return this.http.delete(`${api}/recipes/${id}`, {
      headers: {
        'X-Authorization': this.userService.user?.accessToken ?? "",
        'Content-type': 'application/json'
      }
    });
  }


  // Edit recipe by authorized user and owner
  editRecipe(data: Recipe, id: string) {
    const api = this.apiUrl;
    return this.http.put(`${api}/recipes/${id}`, data, {
      headers: {
        'X-Authorization': this.userService.user?.accessToken ?? "",
        'Content-type': 'application/json'
      }
    });
  }

}
