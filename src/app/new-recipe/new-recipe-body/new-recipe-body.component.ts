import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../model/ingredient";
import {Recipe} from "../../model/recipe";
import {NewRecipeService} from "../new-recipe.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './new-recipe-body.component.html',
  styleUrls: ['./new-recipe-body.component.css']
})
export class NewRecipeBodyComponent implements OnInit {

  recipe: Recipe;

  constructor(private newRecipeService: NewRecipeService) {
  }

  ngOnInit() {
    this.newRecipeService.currentRecipe.subscribe(recipe => this.recipe = recipe);
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  get portions() {
    const portions: number[] = [];
    for (let i = 1; i < 16; i++) {
      portions.push(i);
    }
    return portions;
  }

  saveRecipe() {
    this.newRecipeService.saveRecipe();
  }
}
