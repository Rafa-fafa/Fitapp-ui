import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpService} from "../../rest-client/recipe-backend/http.service";
import {NewRecipeService} from "../new-recipe.service";
import {RecipeDsp} from "../../model/recipeDsp";
import {RecipeAssembler} from "../../assembler/recipeAssembler";
import {EventHandlerService} from "../../event-emitter/event-handler.service";
import {MatExpansionPanel} from "@angular/material/expansion";

@Component({
  selector: 'app-download-recipe',
  templateUrl: './download-recipe.component.html',
  styleUrls: ['./download-recipe.component.css']
})
export class DownloadRecipeComponent implements OnInit {

  @ViewChild(MatExpansionPanel, {static: false}) secondPanel: MatExpansionPanel;

  private url: string;
  private recipe: RecipeDsp;
  private SAMPLE_RECIPE_URL: any = 'https://www.kwestiasmaku.com/przepis/szarlotka-z-budyniem';

  constructor(private httpService: HttpService,
              private newRecipeService: NewRecipeService,
              private eventHandler: EventHandlerService
  ) {
  }

  ngOnInit() {
    this.newRecipeService.newRecipe.subscribe(recipe => {
      this.recipe = recipe
    });
    this.eventHandler.savedNewRecipeEvent.subscribe(() => this.url = '');
  }

  downloadRecipe() {
    this.httpService.downloadRecipe(this.url).subscribe(recipe => {
      this.newRecipeService.setCurrentRecipe(RecipeAssembler.convertRecipeDto2Dsp(recipe))
    })
  }

  pasteSampleRecipeUrl($event: MouseEvent) {
    this.secondPanel.open();
    this.url = this.SAMPLE_RECIPE_URL;
    $event.stopPropagation();
  }
}
