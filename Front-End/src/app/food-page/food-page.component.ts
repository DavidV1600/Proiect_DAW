import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food: Food | undefined;
  notFoundMessage: string = "Product Not Found!";
  resetLinkText: string = "Back To Homepage";

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        const foodId = +params['id'];
        this.foodService.getById(foodId).subscribe((food) => {
          this.food = food;
        });
      }
    });
  }

  addToCart() {
    if (this.food) {
      this.cartService.addToCart(this.food);
      this.router.navigateByUrl('/cart-page');
    }
  }
}
