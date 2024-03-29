import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: any = [];
  offset: string = "";
  isLoading: boolean = false;


  constructor(private api: ApiService, private userService: UserService) { }


  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }



  ngOnInit(): void {

    // CATEGORY
    // this.api.getSortedRecipes("soup").subscribe(recipes => {
    //  this.recipes = recipes;
    //  console.log(this.recipes);

    // })


    // Initial load with 6 recipes

    this.isLoading = true;
    this.api.getAllRecipes("0").subscribe(recipes => {
      this.recipes = recipes;

      this.isLoading = false;

      this.offset = JSON.stringify(this.recipes.length);
    })
  }



  // Pagination //
  loadMore() {
    this.api.getAllRecipes(this.offset).subscribe(recipes => {
      const responseData = recipes;
      this.recipes.push(...<[]>responseData);

      this.offset = JSON.stringify(this.recipes.length);

    })
  }
}
