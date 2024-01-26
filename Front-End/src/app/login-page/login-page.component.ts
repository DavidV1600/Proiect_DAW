import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { take } from 'rxjs';
import { UserService } from '../services/user/user.service';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

constructor(private userService : UserService){}

public loginGroup: FormGroup = new FormGroup(
{
  username: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required)
});

public submit(){
  if(this.loginGroup.valid)
  {
  console.log(this.loginGroup);
  this.userService.login(this.loginGroup.value).pipe(take(1)).subscribe((userData : any) => {
  
  localStorage.setItem('token', userData.token);
  });
  //tre sa iau tokenul din postman si sa il salvez in local storage
  }
}


  ngOnInit(): void {
  }
}