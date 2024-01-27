import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../services/user/user.service';
@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.mustMatch('password', 'confirmPassword')
    });
  }

  ngOnInit(): void {
  }

  mustMatch(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['mustMatch']) {
        return;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ mustMatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }

  submit(): void {
    if (this.registerForm.valid) {
      this.userService.register(this.registerForm.value).subscribe({
        next: (response) => {
          // Handle the response, possibly navigating to a login or success page
          this.router.navigate(['/login-page']);
        },
        error: (error) => {
          // Handle errors, such as displaying a message
          console.error('Registration failed', error);
        }
      });
    }
  }
}
