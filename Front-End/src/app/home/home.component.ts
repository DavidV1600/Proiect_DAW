import { Component, Input ,OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { NgFor, NgIf } from '@angular/common';
import { Food } from '../shared/models/Food';
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
  imports: [RouterModule, NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
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
        });
      } else if (params['tag']) {
        this.foodService.getAllFoodsByTag(params['tag']).subscribe(foods => {
          this.foods = foods;
        });
      } else {
        this.foodService.getAll().subscribe(foods => {
          this.foods = foods;
        });
      }
    });
  }
}
