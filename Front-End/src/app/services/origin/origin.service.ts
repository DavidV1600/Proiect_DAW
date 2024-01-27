import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Origin } from '../../shared/models/Origin';

@Injectable({
  providedIn: 'root'
})
export class OriginService {
  private apiUrl = 'https://localhost:7258/api/origin';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Origin[]> {
    return this.http.get<Origin[]>(this.apiUrl);
  }

  // Add other CRUD methods as needed
}
