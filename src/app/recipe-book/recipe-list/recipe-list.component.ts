import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe-book.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test description', 'https://kbimages1-a.akamaihd.net/d92db093-478c-4ecb-9e6e-f1767eb220b2/1200/1200/False/recipe-book-the-best-food-recipes-that-are-delicious-healthy-great-for-energy-and-easy-to-make.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
