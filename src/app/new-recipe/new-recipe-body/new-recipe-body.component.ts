import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../model/ingredient";
import {RecipeDsp} from "../../model/recipeDsp";
import {NewRecipeService} from "../new-recipe.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './new-recipe-body.component.html',
  styleUrls: ['./new-recipe-body.component.css']
})
export class NewRecipeBodyComponent implements OnInit {

  titleIsRequired = new FormControl('', [Validators.required]);
  descriptionIsRequired = new FormControl('', [Validators.required]);
  portionsIsRequired = new FormControl('', [Validators.pattern("[0-9]+")  ]);
  recipe: RecipeDsp;

  constructor(private newRecipeService: NewRecipeService) {
  }

  ngOnInit() {
    this.newRecipeService.currentRecipe.subscribe(recipe => this.recipe = recipe);
  }

  get portions() {
    const portions: any[] = [];
    for (let i = 1; i < 16; i++) {
      portions.push(i);
    }
    return portions;
  }

  saveRecipe() {
    this.newRecipeService.saveRecipe();
  }
}
