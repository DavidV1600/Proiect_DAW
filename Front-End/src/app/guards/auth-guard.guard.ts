import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Call the method to check if the user is logged in with the specific token
    if (this.isLoggedInWithSpecificToken("Eu4Eu4")) {
      return true;
    } else {
      // If the token is not "Eu4Eu4", navigate to the login page
      this.router.navigate(['/login-page']);
      return false;
    }
  }

  private isLoggedInWithSpecificToken(requiredToken: string): boolean {
    // Retrieve the token from storage
    const token = localStorage.getItem('token');

    // Check if the token matches the required token
    return token === requiredToken;
  }
}
