import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CurrentRecipeComponent } from './recipe/current-recipe/current-recipe.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { authActivate } from './guards/auth.activate';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "home", component: HomeComponent },
  { path: "home/:recipeId", redirectTo: "/recipes/:recipeId" },
  { path: "profile/:recipeId", redirectTo: "/recipes/:recipeId" },
  { path: "add-recipe", component: AddRecipeComponent, canActivate: [authActivate] },
  { path: "**", redirectTo: "/404" },
  { path: "404", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
