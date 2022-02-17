import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Chicken Masala',
            'Chicken parmezan and grilled cheese.',
            'https://assets.bonappetit.com/photos/5b69f163d3d14670539a2174/1:1/w_2240,c_limit/ba-tikka-masala-2.jpg',
            [
                new Ingredient('Meat',2),
                new Ingredient('French Fries',20)
            ]
        ),
        new Recipe(
            'Roast beef Soup',
            'This is new taste of grilled-chicken.',
            'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
            [
                new Ingredient('Buns',2),
                new Ingredient('Meat',1)
            ]
        ),
        new Recipe(
            'Pasta alla Norma',
            'This traditional Sicilian pasta dish with tomato sauce.',
            'https://static.onecms.io/wp-content/uploads/sites/9/2018/09/pasta-alla-norma-XL-RECIPE1018.jpg',
            [
                new Ingredient('Beans',2),
                new Ingredient('Spagetti',1),
                new Ingredient('Fish',1)
            ]
        ),
    ];

    constructor(private slService:ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}