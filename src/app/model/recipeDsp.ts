import {IngredientDsp} from "./ingredientDsp";
import {SubDescriptionDsp} from "./sub-description-dsp";

export class RecipeDsp {
    public id: number;
    public title: string;
    public subDescriptions: SubDescriptionDsp[];
    public portions?: string;
    public ingredients?: IngredientDsp[];
    public favorite: boolean = false;
    public selected: boolean = false;
    public sourceUrl?: string;
}
