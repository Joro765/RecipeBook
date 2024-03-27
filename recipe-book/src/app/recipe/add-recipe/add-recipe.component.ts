import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
  constructor(private userService: UserService, private router: Router) { }



  submit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(form.value);

    const ingredients = form.value.ingredients.split("/");
    for (const ingredient of ingredients) {
      console.log(ingredient);
    }


  }
}
