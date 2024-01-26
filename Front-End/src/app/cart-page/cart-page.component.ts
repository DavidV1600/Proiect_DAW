import { Component, Input ,OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [NgIf,NgFor,RouterModule, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {

  cart!:Cart;
  constructor(private cartService: CartService) { 
    this.setCart();
  }
  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.foodId);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.foodId, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  checkout(): void {
    const totalSum = this.cart.totalPrice; // Assuming this is the total sum calculated
    const paypalUrl = `https://paypal.me/DavidVoinescu/${totalSum}`;
    window.location.href = paypalUrl; // Redirect to PayPal
  }

}
