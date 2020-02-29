import {Ingredient} from "./ingredient";

export class RecipeDsp {
  constructor(
    public title?:string,
    public description?:string,
    public numberOfPortion?: number,
    public ingredients?: Ingredient[]
  ) {}
}
