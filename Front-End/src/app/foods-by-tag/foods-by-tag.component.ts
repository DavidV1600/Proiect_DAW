// In foods-by-tag.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-foods-by-tag',
  templateUrl: './foods-by-tag.component.html',
  styleUrls: ['./foods-by-tag.component.css']
})
export class FoodsByTagComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const tagId = +params['tagId'];
      this.foodService.getFoodsByTagId(tagId).subscribe(foods => {
        this.foods = foods;
      });
    });
  }
}
