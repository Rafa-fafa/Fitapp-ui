import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recipe} from "../../model/recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private BASE_URL ="http://localhost:8080/api";
  private ALL_RECIPES_URL ="/recipes";
  private SINGLE_RECIPE_URL="/recipe"

  constructor(private http: HttpClient) {
  }

  public getRecipes() {
    return this.http.get(this.BASE_URL + this.ALL_RECIPES_URL);
  }

  public saveRecipe(recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.BASE_URL + this.ALL_RECIPES_URL, recipe);
  }
}
