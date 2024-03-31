import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Recipe } from 'src/app/types/Recipe';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
  constructor(private userService: UserService, private router: Router, private apiService: ApiService) { }



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



    this.apiService.addRecipe(data).subscribe(() => {
      this.router.navigate(["/recipes"]);
      form.reset();
    })
  }


  // Remove empty rows
  // formatArrays(arr: []) {
  //   let resArr: [] = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i]) {
  //       resArr.push(arr[i]);;
  //     }
  //   }
  //   return resArr;
  // }


  filterArray(arr: []) {
    return arr.filter(n => n);
  }


}






