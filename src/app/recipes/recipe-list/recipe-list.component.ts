import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 

  recipes:Recipes[] =[
    new Recipes('pan cake',"This is the first recipe, very delious.","pan-cake.jpeg"),
    new Recipes('hot cuttle fish',"This is the secong recipe","hot-butter-cuttlefish.jpg"),
    new Recipes('pan-fired-salmon',"This is the third recipe","pan-fired-salmon.jpeg"),
    new Recipes('uludu-wade',"This is the first fouth","uludu-wade.jpg")
  ];

  

  constructor() { }

  ngOnInit() {
  }

}
