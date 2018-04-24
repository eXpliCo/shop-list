import { Ingredient } from '../models/ingredient.model';

export class Recipe {
    constructor(public name: string, public ingredients: Array<Ingredient>) {}
}