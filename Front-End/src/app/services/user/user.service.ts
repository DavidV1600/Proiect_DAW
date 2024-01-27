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

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/authenticate`, credentials);
  }

  register(user: { username: string; email: string; password: string; confirmPassword: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }
}
