import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private apiUrl = 'https://localhost:7258/api/food';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(this.apiUrl);
  }

  getById(id: number): Observable<Food> {
    return this.http.get<Food>(`${this.apiUrl}/${id}`);
  }

  updateFoodPriceById(foodId: number, newPrice: number): Observable<Food> {
    return this.http.put<Food>(`${this.apiUrl}/${foodId}`, { price: newPrice });
  }

  getAllFoodsBySearchTerm(searchTerm: string): Observable<Food[]> {
    // Assuming your API supports search via query parameters
    let params = new HttpParams().set('searchTerm', searchTerm);
    return this.http.get<Food[]>(`${this.apiUrl}/search`, { params: params });
  }

  getAllFoodsByTag(tag: string): Observable<Food[]> {
    // Assuming your API supports filtering by tags via query parameters
    let params = new HttpParams().set('tag', tag);
    return this.http.get<Food[]>(`${this.apiUrl}/tag`, { params: params });
  }

  // The getAuthUsers method seems to be for authenticated users' food data
  getAuthUsers(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.apiUrl}/auth`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  }
}
