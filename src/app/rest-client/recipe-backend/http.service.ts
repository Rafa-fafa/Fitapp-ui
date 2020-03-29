import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {RecipeDsp} from "../../model/recipeDsp";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private BASE_URL = "http://localhost:8080/";
  private API_URL = this.BASE_URL + "api";
  private SCRAP_URL = this.BASE_URL + "scrap";
  private ALL_RECIPES_URL = "/recipes";
  private SINGLE_RECIPE_URL = "/recipe"

  constructor(private http: HttpClient) {
  }

  public getRecipes(): Observable<any> {
    return this.http.get(this.API_URL + this.ALL_RECIPES_URL);
  }

  public saveRecipe(recipe): Observable<RecipeDsp> {
    return this.http.post<RecipeDsp>(this.API_URL + this.SINGLE_RECIPE_URL, recipe);
  }

  public downloadRecipe(scrapUrl): Observable<any> {
    let data = {url: scrapUrl};
    return this.http.get(this.SCRAP_URL + this.SINGLE_RECIPE_URL, {params: data});
  }

  public deleteRecipe(recipeId: number) {
    return this.http.delete(this.API_URL + this.SINGLE_RECIPE_URL+"/"+recipeId);
  }
}
