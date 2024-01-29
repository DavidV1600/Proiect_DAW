import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if the user is logged in with any token
    if (this.isLoggedIn()) {
      // Check if the user has the required token for the stock-page
      if (route.data && route.data['requiredToken'] === "Eu4Eu4") {
        const token = localStorage.getItem('token');
        if (token === "Eu4Eu4") {
          return true; // User has the required token
        } else {
          // User does not have the required token, navigate to the login page
          this.router.navigate(['/login-page']);
          return false;
        }
      }
      return true; // User is logged in
    } else {
      // If the user is not logged in, navigate to the login page
      this.router.navigate(['/login-page']);
      return false;
    }
  }

  private isLoggedIn(): boolean {
    // Check if the user is logged in (you can implement this logic)
    // For example, you can check if there is a user session or token in localStorage
    const token = localStorage.getItem('token');
    return !!token; // Returns true if a token exists, you can customize this logic
  }
}
