import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private apiUrl = 'https://localhost:7258/api/tag';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.apiUrl);
  }

  // Add other CRUD methods as needed
}
