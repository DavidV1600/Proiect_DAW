import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class StockComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getAll().subscribe({
      next: (data) => {
        this.foods = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  updatePrice(foodId: number, newPrice: string): void {
    // Convert newPrice to a number before sending it to the server
    const price = Number(newPrice);
    
    // Check if the price is a valid number and not NaN
    if (!isNaN(price)) {
      this.foodService.updateFoodPriceById(foodId, price).subscribe({
        next: (updatedFood) => {
          // Find and update the food item in your local array with the new price
          const index = this.foods.findIndex(food => food.foodId === updatedFood.foodId);
          if (index !== -1) {
            this.foods[index].price = updatedFood.price;
          }
        },
        error: (err) => {
          console.error(err);
        }
      });
    } else {
      // Handle invalid number input
      console.error('Invalid price input');
    }
  }
}
