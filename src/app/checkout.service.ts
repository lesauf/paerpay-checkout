import { Injectable } from '@angular/core';
import { Item } from './types/item.type';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  items: Item[] = [
    {
      name: 'Bay potatoes',
      price: 7.5,
    },
    {
      name: 'Bacon Wrapped Scallopsb',
      price: 9.5,
    },
    {
      name: 'Be Hoppy',
      price: 6,
    },
    {
      name: 'Cappuccino',
      price: 3.5,
    },
    {
      name: 'Fried Calamari',
      price: 9.5,
    },
    {
      name: 'Shrimp Cocktail Parfait',
      price: 10,
    },
  ];

  tax = 3.24;

  subTotal: number = 0;

  total: number = 0;

  constructor() { }

  calculateTotals() {
    this.subTotal = this.items.reduce((accumulator: number, currentValue: Item) => accumulator + currentValue.price, 0);

    this.total = this.subTotal + this.tax;
  }
}
