import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { NgFor, NgIf } from '@angular/common';
import { Food } from '../shared/models/Food';
@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent implements OnInit{

  foods:Food[] = [];
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }

  
}
