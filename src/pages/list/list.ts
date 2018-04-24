import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipeService } from '../../services/recipe.service';
import { ShoppingListPage } from '../shopping-list/shopping-list';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  recipes: any;
  
  constructor(public navCtrl: NavController, public recipeService: RecipeService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.recipes = recipeService.getAllRecipes();
  }

  toggleIngredients(recipe) {
    recipe.showIngredients = !recipe.showIngredients;
  }

  createShoppingList() {
    this.navCtrl.setRoot(ShoppingListPage, {selectedRecipies: this.recipes.filter(recipe => recipe.selected === true)});
  }
}
