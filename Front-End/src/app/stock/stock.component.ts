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
    const price = parseFloat(newPrice); // Convert string to float

    if (!isNaN(price) && price > 0) { // Check for a valid number greater than 0
      this.foodService.updateFoodPriceById(foodId, price).subscribe({
        next: (updatedFood) => {
          // Assuming the response contains the updated food object
          const index = this.foods.findIndex(food => food.foodId === foodId);
          if (index !== -1) {
            this.foods[index].price = updatedFood.price; // Update the price in the local array
          }
        },
        error: (error) => {
          // Handle error response
          console.error('Error updating price:', error);
        }
      });
    } else {
      // Handle invalid price input
      alert('Please enter a valid price.');
    }
  }
}
