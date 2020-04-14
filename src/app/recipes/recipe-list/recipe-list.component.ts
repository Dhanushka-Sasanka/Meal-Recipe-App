import { Recipes } from './../recipes.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output('selectedRecipeHere') selectedRecipe = new EventEmitter<Recipes>();

  recipes: Recipes[] = [
    new Recipes('pan cake', "This is the first recipe, very delious.", "pan-cake.jpeg"),
    new Recipes('hot cuttle fish', "This is the secong recipe", "hot-butter-cuttlefish.jpg"),
    new Recipes('pan-fired-salmon', "This is the third recipe", "pan-fired-salmon.jpeg"),
    new Recipes('uludu-wade', "This is the first fouth", "uludu-wade.jpg")
  ];



  constructor() { }

  ngOnInit() {
  }

  recipeWasSelected(recipeElement: Recipes) {
    console.log("recipeListComponent");
    this.selectedRecipe.emit(recipeElement);
  }


}
