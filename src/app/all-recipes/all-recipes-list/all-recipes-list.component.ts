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
  text: any = 'Związać nogi kurczaka (jeśli kupiony kurczak jest już związany nitkami, należy je pozostawić).\\nPrzygotować żaroodporny garnek (np. żeliwny, ceramiczny) lub naczynie z pokrywą, takie, które można stawiać na kuchence i gotować na ogniu. Może to też być garnek z grubym dnem, który pomieści całego kurczaka.\\nRozgrzać w nim oliwę lub olej na średnim ogniu. Włożyć kurczaka i smażyć na złoty kolor przez ok. 8 minut. Następnie przewrócić na drugą stronę i powtórzyć smażenie. Jeśli soki pryskają, można przykryć pokrywą.\\nWyjąć kurczaka z naczynia i odstawić na bok.\\nNa dno tego samego naczynia włożyć nieobrane ząbki czosnku, na wierzchu położyć natkę pietruszki, dodać tymianek i liść laurowy.\\nWłożyć kurczaka piersią do góry. Posypać solą i pieprzem. Przykryć naczynie i gotować na małym ogniu przez ok. 1 godzinę i 40 minut.\\nPrzełożyć kurczaka na ogrzany półmisek i przykryć folią aluminiową błyszczącą stroną do dołu i odstawić na bok.\\nNad miską <br/>umieścić sito, wyłożyć \n \n  do niego pozostały  \\n \\n nz <br><br>  gotowania sok z dodatkami (<br/><br/> bez liścia laurowego). Drewnianą łyżką przetrzeć wszystko przez sito, pozostawiając i wyrzucając resztki np. łupiny z czosnku.\\nDo garnka po kurczaku wlać bulion i zagotować. Dodać przetarty gęsty sos czosnkowy, wymieszać i zagotować. Gotować bez przykrycia przez kilka minut aż sos będzie miał odpowiednią konsystencję. W razie potrzeby doprawić.\\nKurczaka pokroić na porcje i polać sosem czosnkowym, posypać posiekaną świeżą natką pietruszki.\\n';

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
      console.log(result);
    });

    $event.stopPropagation();
  }


}
