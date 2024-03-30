import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/types/Recipe';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-recipe',
  templateUrl: './current-recipe.component.html',
  styleUrls: ['./current-recipe.component.css']
})
export class CurrentRecipeComponent implements OnInit {
  recipe = {} as Recipe;
  recipeId: string = "";
  isLoading: boolean = false;
  isOwner: boolean = false;

  constructor(private api: ApiService, private route: ActivatedRoute, private userService: UserService) { }


  ngOnInit(): void {

    this.isLoading = true;
    this.route.params.subscribe(params => {
      this.recipeId = params["recipeId"];
    })

    this.api.getRecipe(this.recipeId).subscribe(recipe => {
      this.recipe = recipe;
      this.isLoading = false;

      if (recipe._ownerId === this.userService.user?._id) {
        this.isOwner = true;
      }

    })
  }
}
