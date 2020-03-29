import { Component, OnInit } from '@angular/core';
import {HttpService} from "../rest-client/recipe-backend/http.service";
import {RecipeDsp} from "../model/recipeDsp";
import {NewRecipeService} from "./new-recipe.service";

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  private recipe:RecipeDsp;

  constructor(private httpService: HttpService,
              private newRecipeService: NewRecipeService) { }

  ngOnInit() {
    this.newRecipeService.newRecipe.subscribe(recipe => this.recipe = recipe);
  }

  saveRecipe() {
    this.httpService.saveRecipe(this.recipe).subscribe();
  }
}
