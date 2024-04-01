import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Recipe } from 'src/app/types/Recipe';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  recipe = {} as Recipe;
  recipeId: string = "";
  isLoading: boolean = false;
  @ViewChild('form') form!: NgForm;

  constructor(private api: ApiService, private route: ActivatedRoute, private userService: UserService, private router: Router) { }


  ngOnInit(): void {
    this.isLoading = true;
    this.route.params.subscribe(params => {
      this.recipeId = params["recipeId"];
    })

    this.api.getRecipe(this.recipeId).subscribe(recipe => {
      this.recipe = recipe;
      this.isLoading = false;


      this.form.setValue({
        title: this.recipe.name,
        image: this.recipe.img,
        difficulty: this.recipe.difficulty,
        servings: this.recipe.servings,
        category: this.recipe.category,
        time: this.recipe.time,
        description: this.recipe.description,
        ingredients: this.formatArray(this.recipe.ingredients),
        steps: this.formatArray(this.recipe.steps)

      })
    })
  }


  formatArray(arr: []) {
    let result = arr.join(",");
    result = result.replaceAll(",", "\n");
    return result;
  }


  cancel() {
    if (confirm("Are you sure you want to discard the changes ?")) {
      this.router.navigate([`/recipes/${this.recipeId}`]);
    } else {
      return;
    }
  }



  submit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const steps = form.value.steps.split("\n");
    const ingredients = form.value.ingredients.split("\n");


    const data = {
      name: form.value.title,
      category: form.value.category,
      description: form.value.description,
      difficulty: form.value.difficulty,
      time: form.value.time,
      servings: form.value.servings,
      img: form.value.image,
      ingredients: this.filterArray(ingredients),
      steps: this.filterArray(steps)
    } as Recipe;



    this.api.editRecipe(data, this.recipeId).subscribe(() => {
      this.router.navigate([`/recipes/${this.recipeId}`]);
      form.reset();
    })
  }



  filterArray(arr: []) {
    return arr.filter(n => n);
  }

}

