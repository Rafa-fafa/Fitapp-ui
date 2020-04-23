import {RecipeDsp} from "../model/recipeDsp";
import {IngredientDsp} from "../model/ingredientDsp";
import {SubDescriptionDsp} from "../model/sub-description-dsp";

export class RecipeAssembler {

  public static convertRecipeDto2Dsp(recipeDto): RecipeDsp {
    const recipe = new RecipeDsp();
    recipe.id = recipeDto.id;
    recipe.title = recipeDto.title;
    recipe.subDescriptions = this.convertSubDescriptions(recipeDto.subDescriptions);
    recipe.ingredients = this.convertIngredientsDto2Dsp(recipeDto.ingredients);
    recipe.portions = recipeDto.numberOfPortion;
    recipe.sourceUrl = recipeDto.sourceUrl;
    return recipe;
  }

  private static convertSubDescriptions(subDescriptions: any[]): SubDescriptionDsp[] {
    return subDescriptions.map(subDescription => this.convertSubDescription(subDescription));
  }

  private static convertSubDescription(subDescription: any) {
    const subDescriptionDsp = new SubDescriptionDsp();
    subDescriptionDsp.subDescriptionTitle = subDescription.subDescriptionTitle;
    subDescriptionDsp.description = subDescription.description;
    return subDescriptionDsp;
  }

  private static convertIngredientsDto2Dsp(ingredients: any) {
    return ingredients.map(ing => RecipeAssembler.convertIngredientDto2Dsp(ing))
  }

  private static convertIngredientDto2Dsp(ingredient) {
    const ingredientDsp = new IngredientDsp();
    ingredientDsp.amount = ingredient.amount;
    ingredientDsp.unit = ingredient.unit;
    ingredientDsp.name = ingredient.name;
    return ingredientDsp;
  }


  static convertRecipeListDto2Dsp(recipes: any[]): RecipeDsp[] {
    return recipes.map(recipe => this.convertRecipeDto2Dsp(recipe))
  }
}
