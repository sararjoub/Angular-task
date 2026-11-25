import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('electro-shop');
  productName = signal('Laptop');
description = signal('Dell Laptop, Core i7, 16GB RAM');
price = signal(850);
isAvailable = signal(true);
cartProductName = signal('');
cartPrice = signal(0);
cartQuantity = signal(0);
handleAddToCart(event: {
  productName: string;
  quantity: number;
}) {
  this.cartProductName.set(event.productName);
  this.cartQuantity.set(event.quantity);
  this.cartPrice.set(this.price());

  console.log('Cart:', event);
}
showLaptop() {
  this.productName.set('Laptop');
  this.description.set('Dell Laptop, Core i7, 16GB RAM');
  this.price.set(850);
  this.isAvailable.set(true);
}

showHeadphones() {
  this.productName.set('Wireless Headphones');
  this.description.set('Bluetooth Headphones');
  this.price.set(120);
  this.isAvailable.set(true);
}
}
