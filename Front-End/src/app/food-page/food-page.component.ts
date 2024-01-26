import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';
import { NotFoundComponent } from '../not-found/not-found.component';
import { NgFor, NgIf } from '@angular/common';
import { Tag } from '../shared/models/Tag';
import { Origin } from '../shared/models/Origin';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [NgIf, NgFor, NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food: Food | undefined;
  origin: Origin | undefined; // Use the correct type
  tags: Tag[] = [];

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
      const foodId = +params['id']; // Use the unary plus operator to convert to number
      if (foodId) {
        this.foodService.getById(foodId).subscribe((foodData) => {
          this.food = foodData;
          
          if (foodData.originId) { // Check if there's an originId
            this.foodService.getOriginById(foodData.originId).subscribe((originData) => {
              this.origin = originData;
            });
          }

          this.foodService.getTagsByFoodId(foodId).subscribe((tagData) => {
            this.tags = tagData;
          });
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
