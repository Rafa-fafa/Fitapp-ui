import {Component, OnInit} from '@angular/core';
import {RecipeDsp} from "../../model/recipeDsp";
import {ActivatedRoute} from "@angular/router";
import {AllRecipesService} from "../all-recipes.service";
import {RecipeAssembler} from "../../assembler/recipeAssembler";
import {EventHandlerService} from "../../event-emitter/event-handler.service";
import {Ingredient} from "../../model/ingredient";

@Component({
  selector: 'app-summary-list',
  templateUrl: './summary-list.component.html',
  styleUrls: ['./summary-list.component.css']
})
export class SummaryListComponent implements OnInit {

  private selectedRecipes: RecipeDsp[];
  private summaryList: Ingredient[] = [];

  constructor(private eventHandler: EventHandlerService,
              private allRecipesService: AllRecipesService) {
  }

  ngOnInit(): void {
    this.allRecipesService.currentAllRecipesList.subscribe(recipes => {
      this.selectedRecipes = recipes.filter(recipe => recipe.selected === true);
    });
    this.eventHandler.selectedRecipeEvent.subscribe(recipe => {
      this.addRecipeOrRemoveIfExists(recipe);
})
}

  private addRecipeOrRemoveIfExists(recipe: RecipeDsp) {
    if (this.selectedRecipes.includes(recipe)) {
      this.removeIngredientsFromSummaryList(recipe.ingredients);
      this.removeRecipeFromSelected(recipe);
    } else {
      this.addIngredientsToSummaryList(recipe.ingredients);
      this.selectedRecipes.push(recipe);
    }
  }

  private removeRecipeFromSelected(recipe: RecipeDsp) {
    const index: number = this.selectedRecipes.indexOf(recipe);
    this.selectedRecipes.splice(index, 1);
  }

  private removeIngredientsFromSummaryList(ingredients: Ingredient[]) {
    ingredients.forEach(ingredient => {
      const ingredientToSubtract = this.summaryList.find(item => item.name == ingredient.name);
      const newAmount = this.getNewAmount(ingredient, ingredientToSubtract);
      this.subtractAmountOrRemoveIfEmpty(newAmount, ingredientToSubtract);
    })
  }

  private getNewAmount(ingredient: Ingredient, ingredientToSubtract: Ingredient) {
    return ingredientToSubtract.amount - (ingredient.amount ?  ingredient.amount :  1);
  }

  private subtractAmountOrRemoveIfEmpty(newAmount, ingredientToSubtract: Ingredient) {
    if (newAmount === 0) {
      const index: number = this.summaryList.indexOf(ingredientToSubtract);
      this.summaryList.splice(index, 1);
    } else {
      ingredientToSubtract.amount = newAmount;
    }
  }

  private addIngredientsToSummaryList(ingredients: Ingredient[]) {
    ingredients.forEach(ingredient => {
      if (this.isIngredientAlreadyInTheList(ingredient)) {
        this.increaseAmountIfNotZero(ingredient);
      } else {
        let ingredientCopy: Ingredient= JSON.parse(JSON.stringify(ingredient));
        if(!ingredientCopy.amount){
          ingredientCopy.amount =1;
          ingredientCopy.unit='x';
        }
        this.summaryList.push(ingredientCopy);
      }
    })
  }

  private isIngredientAlreadyInTheList(ingredient: Ingredient): boolean {
    return !!this.summaryList.find(item => item.name == ingredient.name);
  }

  private increaseAmountIfNotZero(ingredient: Ingredient) {
    const ingredientToIncrease = this.summaryList.find(item => item.name == ingredient.name);
    if (ingredient.amount) {
      ingredientToIncrease.amount = ingredientToIncrease.amount + ingredient.amount;
    } else {
      ingredientToIncrease.amount++;
    }
  }
}
