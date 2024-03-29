import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { WelcomeMsgComponent } from '../shared/welcome-msg/welcome-msg.component';
import { SharedModule } from '../shared/shared.module';
import { CurrentRecipeComponent } from './current-recipe/current-recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RecipeListComponent,
    CurrentRecipeComponent,
    AddRecipeComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [RecipeListComponent]
})
export class RecipeModule { }
