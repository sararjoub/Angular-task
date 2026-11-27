import { Component ,signal,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
 @Input() productName: string = '';
@Input() description: string = '';
@Input() price: number = 0;
@Input() isAvailable: boolean = false;

quantity = signal(1);

increaseQuantity() {
  this.quantity.update(q => q + 1);
}

decreaseQuantity() {
  this.quantity.update(q => Math.max(1, q - 1));
}
@Output() addToCartEvent = new EventEmitter<{
  productName: string;
  quantity: number;
}>();

addToCart() {
  this.addToCartEvent.emit({
    productName: this.productName,
    quantity: this.quantity()
  });
}
}
