import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Recipe} from "../model/recipe";
import {Ingredient} from "../model/ingredient";
import {stringify} from "querystring";
import {RecipeService} from "../rest-client/recipe-backend/recipe.service";

@Injectable({
  providedIn: 'root'
})
export class NewRecipeService implements OnInit{

  private recipeSource = new BehaviorSubject<Recipe>(new Recipe("","",null,[]));
  currentRecipe = this.recipeSource.asObservable();
  private recipes: Object;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

  changeRecipe(recipe: Recipe) {
    this.recipeSource.next(recipe);
  }

  saveRecipe(){
    this.recipeService.saveRecipe(this.recipeSource.value);
  }
}
