import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {RecipeDsp} from "../model/recipeDsp";
import {HttpService} from "../rest-client/recipe-backend/http.service";
import {RecipeAssembler} from "../assembler/recipeAssembler";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AllRecipesService {

  private recipesSource = new BehaviorSubject<RecipeDsp[]>(undefined);
  currentAllRecipesList = this.recipesSource.asObservable();

  constructor(private route: ActivatedRoute,
              private httpService: HttpService) {
  }

  updateListOfAllRecipes(allRecipes: RecipeDsp[]) {
    this.recipesSource.next(allRecipes);
  }

  deleteRecipe(recipeId: number) {
    this.httpService.deleteRecipe(recipeId).subscribe((deletedRecipeId) => {
        this.updateListOfAllRecipes(this.recipesSource.value.filter(recipe => recipe.id !== deletedRecipeId));
    })
  }
}
