import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipeService } from '../../services/recipe.service';
import { IngredientService } from '../../services/ingredients.service';
import { Recipe } from '../../models/recipe.model';
import { Ingredient } from '../../models/ingredient.model';

@Component({
    selector: 'page-add-recipe',
    templateUrl: 'add-recipe.html'
})
export class AddRecipePage {
    availableIngredients: Array<{name: string, units: Array<string>}>;
    ingredient: {name: string, units: Array<string>};
    ingredients: Array<Ingredient>;
    recipeName: string;
    amount: number;
    unit: string;
    constructor(public navCtrl: NavController, public recipeService: RecipeService, public ingredientService: IngredientService) {
        this.availableIngredients = ingredientService.getAllIngredients();
        console.log(this.availableIngredients);
        this.clear();
    }

    clear() {
        this.ingredient = this.availableIngredients[0];
        this.ingredients = [];
        this.recipeName = '';
        this.amount = null;
        this.unit = this.ingredient.units[0];
    } 

    addIngredient() {
        this.ingredients.push(new Ingredient(this.ingredient.name, this.amount, this.unit));
    }

    saveRecipe() {
        this.recipeService.addRecipeToList(new Recipe(this.recipeName, this.ingredients));
        this.clear();
    }

}