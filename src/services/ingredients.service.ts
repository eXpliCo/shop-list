import { Injectable } from '@angular/core';
import { AvailableIngredient } from '../models/availableIngredient.model'

@Injectable()
export class IngredientService {
  ingredients: Array<AvailableIngredient>;

  constructor() {
    this.ingredients = [
      new AvailableIngredient('Kött', ['g', 'kg']),
      new AvailableIngredient('Ost', ['g', 'kg']),
      new AvailableIngredient('Tomatsås', ['cl', 'dl', 'l'])
    ];
  }

  addIngredient(ingredient: AvailableIngredient) {
    this.ingredients.push(ingredient);
  }

  getAllIngredients() {
    return this.ingredients;
  }

}