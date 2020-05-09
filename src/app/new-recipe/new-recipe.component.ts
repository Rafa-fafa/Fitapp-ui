import { Component, OnInit } from '@angular/core';
import {HttpService} from "../rest-client/recipe-backend/http.service";
import {RecipeDsp} from "../model/recipeDsp";
import {NewRecipeService} from "./new-recipe.service";
import {EventHandlerService} from "../event-emitter/event-handler.service";
import {IngredientDsp} from "../model/ingredientDsp";
import {DeleteDialogComponent} from "../delete-dialog/delete-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../error-dialog/error-dialog.component";

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  private recipe:RecipeDsp;

  constructor(private httpService: HttpService,
              private newRecipeService: NewRecipeService,
              private eventHandler: EventHandlerService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.newRecipeService.newRecipe.subscribe(recipe => this.recipe = recipe);
  }

  saveRecipe() {
    this.httpService.saveRecipe(this.recipe).subscribe(
      res => {
        this.newRecipeService.setCurrentRecipe(this.getEmptyRecipe());
        this.eventHandler.savedNewRecipeEvent.emit();
      },
      err => {
        this.showErrorDialog(err.error);
      }
    );
  }


  private showErrorDialog(message: string) {
    this.dialog.open(ErrorDialogComponent, {
      width: '500px',
      data: {errorMessage: message}
    });
  }

  private getEmptyRecipe() {
    let recipe: RecipeDsp =  new RecipeDsp();
    recipe.ingredients = [new IngredientDsp()];
    return recipe;
  }
}
