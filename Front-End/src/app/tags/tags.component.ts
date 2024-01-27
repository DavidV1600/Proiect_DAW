import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { TagService } from '../services/tag/tag.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterModule], // Import RouterModule for RouterLink to work
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags: Tag[] = [];

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.tagService.getAll().subscribe({
      next: (data) => {
        this.tags = data;
      },
      error: (err) => {
        console.error("Error fetching tags:", err);
      }
    });
  }
}
