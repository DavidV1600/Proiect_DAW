import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../../shared/models/Food';
import { FoodTag } from '../../shared/models/FoodTag';
import { Tag } from '../../shared/models/Tag';
import { Origin } from '../../shared/models/Origin';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private apiUrl = 'https://localhost:7258/api/food';
  private originApiUrl = 'https://localhost:7258/api/origin'; // Add origin API URL
  private foodTagApiUrl = 'https://localhost:7258/api/foodtag';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Food[]> {
    // Fetch food items along with their origins
    return this.http.get<Food[]>(`${this.apiUrl}?include=origin`);
  }

  getById(id: number): Observable<Food> {
    return this.http.get<Food>(`${this.apiUrl}/${id}`);
  }

  updateFoodPriceById(foodId: number, newPrice: number): Observable<Food> {
    // Make sure to match the API endpoint and body structure
    return this.http.put<Food>(`${this.apiUrl}/${foodId}/price`, newPrice);
  }

  getAllFoodsBySearchTerm(searchTerm: string): Observable<Food[]> {
    // Assuming your API supports search via query parameters
    let params = new HttpParams().set('searchTerm', searchTerm);
    return this.http.get<Food[]>(`${this.apiUrl}/search`, { params: params });
  }

  getAllFoodsByTag(tagId: number): Observable<Food[]> {
    // Correct endpoint as per your API design
    return this.http.get<Food[]>(`${this.foodTagApiUrl}/foods/${tagId}`);
  }


  getFoodTags(foodId: number): Observable<FoodTag[]> {
    return this.http.get<FoodTag[]>(`${this.apiUrl}/${foodId}/foodtags`);
  }

  getOriginById(originId: number): Observable<Origin> {
    return this.http.get<Origin>(`${this.originApiUrl}/${originId}`);
  }

  getTagsByFoodId(foodId: number): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${this.foodTagApiUrl}/tags/${foodId}`);
  }

  getFoodsByTagId(tagId: number): Observable<Food[]> {
    // Correct endpoint as per your API design
    return this.http.get<Food[]>(`${this.foodTagApiUrl}/foods/${tagId}`);
  }

  
  
}

//https://localhost:7258/api/food/tag?tag=3