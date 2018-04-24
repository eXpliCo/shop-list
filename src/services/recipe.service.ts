import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class RecipeService {
  recipes: Array<Recipe>;

  constructor() {
    this.recipes = []; 
    let ingredientsOne = Array<Ingredient>(
      new Ingredient('Kött', 400, 'g'),
      new Ingredient('Ost', 3, 'dl'),
      new Ingredient('Kött', 400, 'g'));
    let firstRecipe = new Recipe(
      'Lasagne',
      ingredientsOne
    );
    let ingredientsSecond = Array<Ingredient>(
      new Ingredient('Kött', 200, 'g'),
      new Ingredient('Bröd', 1, 'st'),
      new Ingredient('Ost', 3, 'dl'),
      new Ingredient('Tomatsås', 2, 'dl'));
    let secondRecipe = new Recipe(
      'Calzone',
      ingredientsSecond
    );
    this.recipes.push(firstRecipe);
    this.recipes.push(secondRecipe);
  }

  addRecipeToList(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  getAllRecipes(): Array<Recipe> {
    return this.recipes;
  }

}