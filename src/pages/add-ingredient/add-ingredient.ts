import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IngredientService } from '../../services/ingredients.service';
import { AvailableIngredient } from '../../models/availableIngredient.model';
import { ToastController } from 'ionic-angular';


@Component({
    selector: 'page-add-ingredient',
    templateUrl: 'add-ingredient.html'
})
export class AddIngredientPage {

    ingredient: AvailableIngredient;
    unitToAdd: string;
    constructor(public navCtrl: NavController, public ingredientService: IngredientService, public toastCtrl: ToastController) {
        this.clear();
    }

    clear() {
        this.ingredient = new AvailableIngredient("", []);
        this.unitToAdd = '';
    }

    addUnit() {
        if (this.unitToAdd.length > 0) {
            this.ingredient.units.push(this.unitToAdd);
            this.unitToAdd = ''
        } else {
            this.showErrorToster('No unit to add, please write a unit in the input field above.')
        }
        
        
    }

    private showErrorToster(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            cssClass: 'danger'
        });
        toast.present();
    }

    private showSuccessToster(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            cssClass: 'success'
        });
        toast.present();
    }

    removeUnit(unitToRemove) {
        const index = this.ingredient.units.indexOf(unitToRemove);
        if (index !== -1) {
            this.ingredient.units.splice(index, 1);
        }
    }

    saveIngredient() {
        let errorMessage = ''
        if (this.ingredient.name === '') {
            errorMessage += 'Please insert a name in the form above.';
        }
        if (this.ingredient.units.length < 1) {
            errorMessage += 'Please add units in the form above before submitting.';
        }
        if (errorMessage != '') {
            this.showErrorToster(errorMessage);
        } else {
            this.showSuccessToster('Ingredient successfully added.');
            this.ingredientService.addIngredient(this.ingredient);
            this.clear();
        }
    }

}