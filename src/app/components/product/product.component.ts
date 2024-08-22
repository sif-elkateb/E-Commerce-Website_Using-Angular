import { CartService } from './../../Services/cart/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../Models/product';
import { Cart } from '../../Models/cart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
})
export class ProductComponent implements OnInit {
  @Input() product!: Product; // Define an input property
  quantity = 0;
  userCart!: Cart;
  constructor(private cartService: CartService) {}
  increaseQuantity() {
    this.quantity++;
    this.cartService.increaseProductQuantity(this.product.id);
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
      this.cartService.decreaseProductQuantity(this.product.id);
    }
  }
  ngOnInit() {
    this.quantity = this.cartService.getProductQuantity(this.product.id);
  }
}
