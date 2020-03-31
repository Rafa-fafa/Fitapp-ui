import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../model/ingredient";
import {RecipeDsp} from "../../model/recipeDsp";
import {NewRecipeService} from "../new-recipe.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './new-recipe-body.component.html',
  styleUrls: ['./new-recipe-body.component.css']
})
export class NewRecipeBodyComponent implements OnInit {

  recipe: RecipeDsp;

  constructor(private newRecipeService: NewRecipeService) {
  }

  ngOnInit() {
    this.newRecipeService.newRecipe.subscribe(recipe => {
      this.recipe = recipe;
    });
  }
}
