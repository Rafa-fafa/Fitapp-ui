import {IngredientDsp} from "./ingredientDsp";

export class RecipeDsp {
  public id: number;
  public title: string;
  public description: string;
  public portions?: string;
  public ingredients?: IngredientDsp[];
  public favorite: boolean = false;
  public selected: boolean = false;
  public sourceUrl?: string;
}
