import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { Food } from '../../shared/models/Food';
import { CartItem } from '../../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();

  addToCart(food: Food):void{
    let cartItem = this.cart.items.find(item => item.food.foodId === food.foodId);
    if(cartItem)
    {
      this.changeQuantity(food.foodId, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }
  removeFromCart(foodId:number): void{
    this.cart.items = 
    this.cart.items.filter(item => item.food.foodId != foodId);
  }

  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.food.foodId === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
