import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-shopping-list',
    templateUrl: 'shopping-list.html'
})
export class ShoppingListPage {
    ingredients: any;
    constructor(public navParams: NavParams) {
        this.ingredients = [];
        navParams.data.selectedRecipies.map(recipe => recipe.ingredients.map(ingredient => this.ingredients.push(ingredient)));
    }
}