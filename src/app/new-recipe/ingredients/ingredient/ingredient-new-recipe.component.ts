import {Component, Input, OnInit} from '@angular/core';
import {IngredientDsp} from "../../../model/ingredientDsp";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-ingredient-new-recipe',
  templateUrl: './ingredient-new-recipe.component.html',
  styleUrls: ['./ingredient-new-recipe.component.css']
})
export class IngredientNewRecipeComponent implements OnInit {

  @Input()
  newIngredient: IngredientDsp;

  constructor() {
  }

  ngOnInit() {
  }

}
