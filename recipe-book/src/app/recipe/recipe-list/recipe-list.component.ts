import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: any = [];
  offset: string = "";


  constructor(private api: ApiService) { }



  ngOnInit(): void {

    // CATEGORY
    // this.api.getSortedRecipes("soup").subscribe(recipes => {
    //  this.recipes = recipes;
    //  console.log(this.recipes);

    // })


    // Initial load with 6 recipes
    this.api.getAllRecipes("0").subscribe(recipes => {
      this.recipes = recipes;

      this.offset = JSON.stringify(this.recipes.length);
    })
  }



  // Pagination //
  loadMore() {
    this.api.getAllRecipes(this.offset).subscribe(recipes => {
      const responseData = recipes;
      this.recipes.push(...<[]>responseData);
      console.log(this.recipes);

      this.offset = JSON.stringify(this.recipes.length);

    })
  }
}
