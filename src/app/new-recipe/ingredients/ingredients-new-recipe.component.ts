import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../model/ingredient";
import {NewRecipeService} from "../new-recipe.service";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients-new-recipe.component.html',
  styleUrls: ['./ingredients-new-recipe.component.css']
})
export class IngredientsNewRecipeComponent implements OnInit {

  newIngredients: Ingredient[] = [];

  constructor(private newRecipeService: NewRecipeService) {
  }

  ngOnInit() {
    this.newRecipeService.newRecipe.subscribe(recipe => this.newIngredients = recipe.ingredients);
  }

  addNewEmptyIngredient() {
    if (this.isLastIngredientNotEmpty()) {
      this.newIngredients.push(this.getEmptyIngredient());
    }
  }

  private getEmptyIngredient() {
    return new Ingredient(null, null, null);
  }

  private isLastIngredientNotEmpty(): boolean {
    const ingredient = this.newIngredients[this.newIngredients.length - 1];
    if (ingredient.name) {
      return true
    }
  }
}
