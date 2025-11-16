import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from './app-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-logo">
          <span class="logo-text">{{ svc.title() }}</span>
          <span class="logo-tagline">Corporate Solutions</span>
        </div>
        
        <ul class="navbar-menu" [class.active]="svc.mobileMenuOpen()">
          <li><a href="#vision" class="nav-link" (click)="svc.toggleMobileMenu()">Vision</a></li>
          <li><a href="#leadership" class="nav-link" (click)="svc.toggleMobileMenu()">Leadership</a></li>
          <li><a href="#values" class="nav-link" (click)="svc.toggleMobileMenu()">Values</a></li>
          <li><a href="#timeline" class="nav-link" (click)="svc.toggleMobileMenu()">Journey</a></li>
          <li><a href="#awards" class="nav-link" (click)="svc.toggleMobileMenu()">Awards</a></li>
        </ul>

        <div class="navbar-search">
          <input type="text" placeholder="Search..." class="search-input" aria-label="Search">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>

        <button class="menu-toggle" [class.active]="svc.mobileMenuOpen()" (click)="svc.toggleMobileMenu()" aria-label="Toggle navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `,
})
export class HeaderComponent {
  constructor(public svc: AppDataService) {}
}
