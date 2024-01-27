import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { catchError, of, take } from 'rxjs';
import { UserService } from '../services/user/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public loginGroup: FormGroup;
  public errorMessage: string = '';

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public submit(): void {
    this.errorMessage = ''; // Reset the error message on a new submission
    
    if (this.loginGroup.valid) {
      this.userService.login(this.loginGroup.value).pipe(
        take(1),
        catchError((error) => {
          if (error.status === 401 || error.error?.message) {
            // Use the server-provided error message if available, otherwise set a default message
            this.errorMessage = error.error?.message || 'Invalid username or password. Please try again.';
          } else {
            this.errorMessage = 'An error occurred. Please try again later.';
          }
          return of(null);
        })
      ).subscribe((userData: any) => {
        if (userData && userData.token) {
          localStorage.setItem('token', userData.token);
          this.router.navigate(['']); // Navigate to the home route on success
        } else {
          this.errorMessage = 'Login failed. Please try again.';
        }
      });
    } else {
      this.errorMessage = 'Please fill in all fields.';
    }
  }

  ngOnInit(): void {
    // Any initialization logic if needed
  }
}
