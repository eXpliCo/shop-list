import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipeService } from '../../services/recipe.service';
import { IngredientService } from '../../services/ingredients.service';
import { Recipe } from '../../models/recipe.model';
import { Ingredient } from '../../models/ingredient.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    ingredientFormError: boolean;
    ingredientsFormGroup: FormGroup;


    constructor(public navCtrl: NavController, public recipeService: RecipeService, public ingredientService: IngredientService, private fb: FormBuilder) {
        this.availableIngredients = ingredientService.getAllIngredients();
        this.clear();
        this.ingredientsFormGroup = this.createIngredientsForm(fb);
    }

    private createIngredientsForm(fb: FormBuilder): FormGroup {
        this.ingredientFormError = false;
        return fb.group({
            ingredient: ['', Validators.required],
            amount: ['', Validators.required],
            unit: ['', Validators.required]
        })
    }

    onSubmit() {
        if(this.ingredientsFormGroup.valid) {
            const formModel = this.ingredientsFormGroup.value;
            this.ingredients.push(new Ingredient(formModel.ingredient, formModel.amount, formModel.unit));
            this.ingredientFormError = false;
        } else {
            this.ingredientFormError = true;
        }
        
    }

    clear() {
        this.ingredientFormError = false;
        this.ingredient = this.availableIngredients[0];
        this.ingredients = [];
        this.recipeName = '';
        this.amount = null;
        this.unit = this.ingredient.units[0];
    } 

    saveRecipe() {
        this.recipeService.addRecipeToList(new Recipe(this.recipeName, this.ingredients));
        this.clear();
    }

}