import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from './app-data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero-section" [style.backgroundImage]="'url(/assets/hero-bg.jpg)'">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">{{ svc.title() }}</h1>
        <p class="hero-subtitle">Building sustainable solutions for tomorrow's challenges</p>
        <div class="hero-cta">
          <button class="btn btn-primary">Explore Our Mission</button>
          <button class="btn btn-secondary">Learn More</button>
        </div>
      </div>
      <div class="scroll-indicator">
        <span>Scroll to explore</span>
      </div>
    </section>
  `,
})
export class HeroComponent {
  constructor(public svc: AppDataService) {}
}
