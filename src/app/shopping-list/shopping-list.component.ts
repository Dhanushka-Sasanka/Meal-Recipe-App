import { Component, OnInit } from '@angular/core';
import { Incredient } from '../shared/incredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  incredients:Incredient[]=[
    new Incredient('salmon',10),
    new Incredient('powder',100),
    new Incredient('suger',50),
    new Incredient('coconut-oil',20)

  ]

  constructor() { }

  ngOnInit() {
  }

}
