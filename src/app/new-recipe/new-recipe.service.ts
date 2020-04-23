import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {RecipeDsp} from "../model/recipeDsp";
import {HttpService} from "../rest-client/recipe-backend/http.service";
import {IngredientDsp} from "../model/ingredientDsp";

@Injectable({
  providedIn: 'root'
})
export class NewRecipeService {

  private recipeSource = new BehaviorSubject<RecipeDsp>(this.getEmptyRecipe());
  newRecipe = this.recipeSource.asObservable();

  constructor() {
  }

  setCurrentRecipe(recipe: RecipeDsp) {
    this.recipeSource.next(recipe);
  }

  getEmptyRecipe(): RecipeDsp {
    let recipe: RecipeDsp = new RecipeDsp();
    recipe.ingredients = [new IngredientDsp];
    return recipe;
  }
}
