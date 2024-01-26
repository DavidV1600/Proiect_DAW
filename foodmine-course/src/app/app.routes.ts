import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { StockComponent } from './stock/stock.component';
import { authGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:'search/:searchTerm', component:HomeComponent},
    {path:'tag/:tag', component:HomeComponent},
    {path:'food/:id', component:FoodPageComponent},
    {path:'cart-page', component:CartPageComponent},
    {path:'login-page', component:LoginPageComponent},
    {path:'register-page', component:RegisterPageComponent},
    {path:'stock-page', component:StockComponent, canActivate: [authGuard]}
];
