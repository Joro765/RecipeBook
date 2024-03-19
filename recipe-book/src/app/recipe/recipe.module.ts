import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { WelcomeMsgComponent } from '../shared/welcome-msg/welcome-msg.component';
import { SharedModule } from '../shared/shared.module';
import { CurrentRecipeComponent } from './current-recipe/current-recipe.component';



@NgModule({
  declarations: [
    RecipeListComponent,
    CurrentRecipeComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    SharedModule

  ],
  exports: [RecipeListComponent]
})
export class RecipeModule { }
