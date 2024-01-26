import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodTag } from '../../shared/models/FoodTag';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodTagService {
  private apiUrl = 'https://localhost:7258/api/foodtag';

  constructor(private http: HttpClient) {}

  getTagsForFood(foodId: number): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${this.apiUrl}/${foodId}/tags`);
  }

  // Add other CRUD methods for FoodTag as needed
}
