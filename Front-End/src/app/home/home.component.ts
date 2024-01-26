import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { NgFor, NgIf } from '@angular/common';
import { Food } from '../shared/models/Food';
import { Origin } from '../shared/models/Origin'; // Import Origin model
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from '../tags/tags.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { take } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf, NotFoundComponent, TagsComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.foodService.getAllFoodsBySearchTerm(params['searchTerm']).subscribe(foods => {
          this.foods = foods;
          this.assignOriginsToFood(); // Call the method to assign origins
        });
      } else if (params['tag']) {
        this.foodService.getAllFoodsByTag(params['tag']).subscribe(foods => {
          this.foods = foods;
          this.assignOriginsToFood(); // Call the method to assign origins
        });
      } else {
        this.foodService.getAll().subscribe(foods => {
          this.foods = foods;
          this.assignOriginsToFood(); // Call the method to assign origins
        });
      }
    });
  }

  private assignOriginsToFood(): void {
    // Iterate through the foods and fetch origins for each food's originId
    for (const food of this.foods) {
      if (food.originId) {
        this.foodService.getOriginById(food.originId).subscribe(origin => {
          food.origin = origin; // Assign the fetched origin to the food
        });
      }
    }
  }
}
