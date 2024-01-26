import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [NgIf, NgFor, RouterModule],//RouterModule pentru RouterLink si astea (mai bine importeaza tot)
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{
  tags:Tag[] = [];

  constructor(private foodService:FoodService) { }
  ngOnInit(): void {
    this.tags = this.foodService.getAllTags();
  }
}
