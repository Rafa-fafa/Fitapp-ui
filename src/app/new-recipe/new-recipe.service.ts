import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {RecipeDsp} from "../model/recipeDsp";
import {Ingredient} from "../model/ingredient";
import {stringify} from "querystring";
import {HttpService} from "../rest-client/recipe-backend/http.service";

@Injectable({
  providedIn: 'root'
})
export class NewRecipeService implements OnInit{

  private recipeSource = new BehaviorSubject<RecipeDsp>(this.getEmptyRecipe());
  currentRecipe = this.recipeSource.asObservable();
  private recipes: Object;

  constructor(private recipeService: HttpService) {
  }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

  changeRecipe(recipe: RecipeDsp) {
    this.recipeSource.next(recipe);
  }

  saveRecipe(){
    this.recipeService.saveRecipe(this.recipeSource.value);
  }

  getEmptyRecipe(): RecipeDsp{
    return new RecipeDsp("","",null,[]);
  }
}
