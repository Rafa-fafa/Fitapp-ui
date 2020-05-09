import {Component, EventEmitter, OnInit} from '@angular/core';
import {RecipeDsp} from "../../model/recipeDsp";
import {HttpService} from "../../rest-client/recipe-backend/http.service";
import {ActivatedRoute} from "@angular/router";
import {RecipeAssembler} from "../../assembler/recipeAssembler";
import {AllRecipesService} from "../all-recipes.service";
import {EventHandlerService} from "../../event-emitter/event-handler.service";
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent} from "../../delete-dialog/delete-dialog.component";

@Component({
  selector: 'app-all-recipes-list',
  templateUrl: './all-recipes-list.component.html',
  styleUrls: ['./all-recipes-list.component.css']
})
export class AllRecipesListComponent implements OnInit {

  private allRecipes: RecipeDsp[];
  private onlySelected: boolean = false;
  private onlyFavorites: boolean = false;

  constructor(private route: ActivatedRoute,
              private eventHandler: EventHandlerService,
              private allRecipesService: AllRecipesService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.allRecipesService.updateListOfAllRecipes(RecipeAssembler.convertRecipeListDto2Dsp(this.route.snapshot.data['allRecipes']));
    this.allRecipesService.currentAllRecipesList.subscribe(recipes => this.allRecipes = recipes);
  }

  public toggleSelected() {
    this.onlySelected = !this.onlySelected;
  }

  public toggleFavorites() {
    this.onlyFavorites = !this.onlyFavorites;
  }

  public addToFavorites(recipe: RecipeDsp, $event: MouseEvent) {
    this.eventHandler.favoriteRecipeEvent.emit(recipe);
    recipe.favorite = !recipe.favorite;
    $event.stopPropagation();
  }

  public addToSelected(recipe: RecipeDsp, $event: MouseEvent) {
    this.eventHandler.selectedRecipeEvent.emit(recipe);
    recipe.selected = !recipe.selected;
    $event.stopPropagation();
  }

  deleteRecipe(recipe: RecipeDsp, $event: MouseEvent) {

    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: {recipeTitle: recipe.title}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.allRecipesService.deleteRecipe(recipe.id);
      }
    });

    $event.stopPropagation();
  }


}
