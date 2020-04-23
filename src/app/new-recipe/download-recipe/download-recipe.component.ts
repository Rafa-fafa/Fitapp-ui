import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../rest-client/recipe-backend/http.service";
import {NewRecipeService} from "../new-recipe.service";
import {RecipeDsp} from "../../model/recipeDsp";
import {RecipeAssembler} from "../../assembler/recipeAssembler";
import {EventHandlerService} from "../../event-emitter/event-handler.service";

@Component({
  selector: 'app-download-recipe',
  templateUrl: './download-recipe.component.html',
  styleUrls: ['./download-recipe.component.css']
})
export class DownloadRecipeComponent implements OnInit {

  private url: string;
  private recipe: RecipeDsp;

  constructor(private httpService: HttpService,
              private newRecipeService: NewRecipeService,
              private eventHandler: EventHandlerService
  ) {
  }

  ngOnInit() {
    this.newRecipeService.newRecipe.subscribe(recipe => {
      this.recipe = recipe
    });
    this.eventHandler.savedNewRecipe.subscribe(() => this.url = '');
  }

  downloadRecipe() {
    this.httpService.downloadRecipe(this.url).subscribe(recipe => {
      this.newRecipeService.setCurrentRecipe(RecipeAssembler.convertRecipeDto2Dsp(recipe))
    })
  }
}
