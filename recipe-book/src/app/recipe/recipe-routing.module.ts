import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { CurrentRecipeComponent } from './current-recipe/current-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';


const routes: Routes = [{
    path: "recipes", children: [
        { path: "", pathMatch: "full", component: RecipeListComponent },
        { path: ":recipeId", component: CurrentRecipeComponent },
        { path: "edit-recipe/:recipeId", component: EditRecipeComponent },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipeRoutingModule { }
