// search-results.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  foods: Food[] = [];
  searchTerm: string = "";

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.searchTerm = params['searchTerm'];
      this.foodService.searchFoods(this.searchTerm).subscribe(foods => {
        this.foods = foods;
      });
    });
  }
}
