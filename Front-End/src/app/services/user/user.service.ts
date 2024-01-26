import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7258/api/user';

  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Add other CRUD methods as needed

  login(credentials: { username: string; password: string }): Observable<any> {
    // Replace 'authenticate' with the actual endpoint for authentication provided by your backend
    return this.http.post<any>(`${this.apiUrl}/authenticate`, credentials);
  }
}
