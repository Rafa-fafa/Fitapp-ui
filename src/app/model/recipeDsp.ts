import {Ingredient} from "./ingredient";

export class RecipeDsp {
    public id: number;
    public title: string;
    public description: string;
    public numberOfPortion?: string;
    public ingredients?: Ingredient[];
    public favorite: boolean = false;
    public selected: boolean = false;
}
