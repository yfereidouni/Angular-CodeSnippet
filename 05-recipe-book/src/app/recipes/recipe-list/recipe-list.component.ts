import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Chicken Masala',
      'Chicken parmezan and grilled cheese.',
      'https://assets.bonappetit.com/photos/5b69f163d3d14670539a2174/1:1/w_2240,c_limit/ba-tikka-masala-2.jpg'
    ),
    new Recipe(
      'Roast beef Soup',
      'This is new taste of grilled-chicken.',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg'
    ),
    new Recipe(
      'Pasta alla Norma',
      'This traditional Sicilian pasta dish with tomato sauce.',
      'https://static.onecms.io/wp-content/uploads/sites/9/2018/09/pasta-alla-norma-XL-RECIPE1018.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
