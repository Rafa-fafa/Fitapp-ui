import {EventEmitter, Injectable} from '@angular/core';
import {RecipeDsp} from "../model/recipeDsp";

@Injectable({
  providedIn: 'root'
})
export class EventHandlerService {
  public favoriteRecipeEvent: EventEmitter<RecipeDsp> =  new EventEmitter<RecipeDsp>();
  public selectedRecipeEvent: EventEmitter<RecipeDsp> =  new EventEmitter<RecipeDsp>();
  public savedNewRecipeEvent: EventEmitter<any> =  new EventEmitter();
}
