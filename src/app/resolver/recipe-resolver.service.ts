import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {RecipeDsp} from "../model/recipeDsp";
import {Observable} from "rxjs";
import {HttpService} from "../rest-client/recipe-backend/http.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<RecipeDsp>{

  constructor(private  httpService: HttpService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RecipeDsp> | Promise<RecipeDsp> | RecipeDsp {
    return this.httpService.getRecipes()
  }
}
