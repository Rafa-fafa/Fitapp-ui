import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../rest-client/recipe-backend/http.service";
import {NewRecipeService} from "../new-recipe.service";
import {RecipeDsp} from "../../model/recipeDsp";
import {RecipeAssembler} from "../../assembler/recipeAssembler";

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
  ) {}

  ngOnInit() {
    this.newRecipeService.currentRecipe.subscribe(recipe => this.recipe = recipe);
  }

  downloadRecipe() {
    this.httpService.downloadRecipe(this.url).subscribe(recipe => {
      this.newRecipeService.changeRecipe(RecipeAssembler.convertRecipeDto2Dsp(recipe))
    })
  }
}
