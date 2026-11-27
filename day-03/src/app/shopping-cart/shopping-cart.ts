import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  styleUrl: './shopping-cart.css',
  templateUrl: './shopping-cart.html',
})
export class ShoppingCart {
  @Input() productName: string = '';
@Input() price: number = 0;
@Input() quantity: number = 0;

get totalPrice(): number {
  return this.price * this.quantity;
}
}
