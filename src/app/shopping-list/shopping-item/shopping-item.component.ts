import { Incredient } from './../../shared/incredient.model';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {

  @ViewChild('nameInput', { static: true }) shoppingItemName: ElementRef;
  @ViewChild('amountInput', { static: true }) shoppingItemAmount: ElementRef;
  @Output('on-shopping-item-added') onShoppingItemAdded = new EventEmitter<Incredient>();


  constructor() { }

  ngOnInit() {
  }

  shoppingItemAdded() {
    console.log(this.shoppingItemName.nativeElement.value);
    console.log(this.shoppingItemAmount.nativeElement.value);

    this.onShoppingItemAdded.emit(new Incredient(
      this.shoppingItemName.nativeElement.value,
      this.shoppingItemAmount.nativeElement.value
    ));
    
  }
}
