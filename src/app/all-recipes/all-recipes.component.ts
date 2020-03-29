import {Component, OnInit} from '@angular/core';
import {HttpService} from "../rest-client/recipe-backend/http.service";
import {RecipeAssembler} from "../assembler/recipeAssembler";
import {RecipeDsp} from "../model/recipeDsp";
import {RecipeResolverService} from "../resolver/recipe-resolver.service";
import {ActivatedRoute} from "@angular/router";
import {EventHandlerService} from "../event-emitter/event-handler.service";
import {AllRecipesService} from "./all-recipes.service";

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent {

  constructor( private allRecipesService: AllRecipesService) {
  }

  print() {
    // this.allRecipesService.print();
  }



}
