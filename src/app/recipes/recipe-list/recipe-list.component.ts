import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 

  recipes:Recipes[] =[
    new Recipes('pan cake',"this is the first recipe","pan-cake.jpeg"),
    new Recipes('hot cuttle fish',"this is the first recipe","hot-butter-cuttlefish.jpg"),
    new Recipes('pan-fired-salmon',"this is the first recipe","pan-fired-salmon.jpeg"),
    new Recipes('uludu-wade',"this is the first recipe","uludu-wade.jpg")
  ];

  

  constructor() { }

  ngOnInit() {
  }

}
