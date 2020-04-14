import { Recipes } from './../../recipes.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipes;
  @Output('recipe-detail-event-emitter') selectedRecipe = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }


  getSelectedRecipe() {
    console.log("recipe-item-component");
    this.selectedRecipe.emit();
  }
}
