import {RecipeDsp} from "../model/recipeDsp";
import {Ingredient} from "../model/ingredient";

export class RecipeAssembler {

  public static convertRecipeDto2Dsp(recipeDto): RecipeDsp {
    const recipe = new RecipeDsp();
    recipe.id = recipeDto.id;
    recipe.title = recipeDto.title;
    recipe.description = recipeDto.description;
    // recipe.description = recipeDto.description.replace(new RegExp('\\\\n','g'),'\n');
    // recipe.description = 'Makaron wrzucić na wrzątek i gotować zgodnie \n\n z instrukcją na opak\n\n\n\nowaniu, odcedzić, \\n\\n wymieszać z łyżeczką oliwy i wyłożyć do dużego naczynia żaroodpornego posmarowanego 1 łyżką oliwy.\\nNa makaron wyłożyć pokrojone (upieczone wcześniej lub gotowane) mięso kurczaka.\\nPiekarnik nagrzać do 180 stopni C.\\nPrzygotować sos pomidorowy: do garnka wlać 2 łyżeczki oliwy, dodać pokrojoną w małą kosteczkę cebulę i zeszklić ją często mieszając. Dodać starty czosnek oraz pomidory i zagotować. Doprawić solą, pieprzem, szczyptą cukru oraz pozostałymi przyprawami. Gotować przez ok. 5 - 8 minut.\\nJeśli używamy chorizo, należy je obrać z błonki, pokroić w kostkę i smażyć na małym ogniu na patelni przez kilka minut aż się wytopi. Połączyć razem z sosem pomidorowym.\\nNa makaron z mięsem wyłożyć sos pomidorowy i posypać serem brie pokrojonym w kostkę. Skropić łyżką oliwy i posypać oregano.\\nWstawić do piekarnika i piec przez 25 minut bez przykrycia.\\n';
    recipe.ingredients = this.convertIngredientsDto2Dsp(recipeDto.ingredients);
    recipe.portions = recipeDto.numberOfPortion;
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

  static convertRecipeListDto2Dsp(recipes: any[]):RecipeDsp[] {
    return recipes.map(recipe => this.convertRecipeDto2Dsp(recipe))
  }a
}
