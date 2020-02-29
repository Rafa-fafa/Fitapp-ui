import {RecipeDsp} from "../model/recipeDsp";
import {Ingredient} from "../model/ingredient";

export class RecipeAssembler {

  public static convertRecipeDto2Dsp(recipeDto): RecipeDsp {
    const recipe = new RecipeDsp();
    recipe.title = recipeDto.title;
    recipe.description = recipeDto.description;
    recipe.ingredients = this.convertIngredientsDto2Dsp(recipeDto.ingredients);
    recipe.numberOfPortion = recipeDto.numberOfPortion;
    return recipe;
  }

  private static convertIngredientsDto2Dsp(ingredients: any) {
    return ingredients.map(ing => RecipeAssembler.convertIngredientDto2Dsp(ing))
  }

  private static convertIngredientDto2Dsp(ingredient) {
    const ingredientDsp = new Ingredient();
    ingredientDsp.amount=ingredient.amount;
    ingredientDsp.unit=ingredient.unit;
    ingredientDsp.name=ingredient.name;
    return ingredientDsp;
  }
}
