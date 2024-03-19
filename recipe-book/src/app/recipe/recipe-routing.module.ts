import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { CurrentRecipeComponent } from './current-recipe/current-recipe.component';


const routes: Routes = [{
    path: "recipes", children: [
        { path: "", pathMatch: "full", component: RecipeListComponent },
        { path: ":recipeId", component: CurrentRecipeComponent }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipeRoutingModule { }
