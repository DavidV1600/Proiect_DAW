import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  isLoggedIn(): boolean {
    if (this.isBrowser) {
      return !!localStorage.getItem('token');
    }
    return false;
  }

  isAdmin(): boolean {
    if (this.isBrowser) {
      // Assuming you store the role as 'admin' in the local storage upon login
      return localStorage.getItem('token') === 'Eu4Eu4';
    }
    return false;
  }

  logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem('token');
      localStorage.removeItem('email'); // Don't forget to clear the role as well
      // Add any additional logout logic here
    }
  }
}

