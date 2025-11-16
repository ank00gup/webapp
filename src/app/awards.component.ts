import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from './app-data.service';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="awards" class="awards-section">
      <div class="container">
        <h2 class="section-title">Awards & Accolades</h2>
        <p class="section-subtitle">Recognition for excellence and innovation</p>
        
        <div class="awards-carousel">
          <div class="awards-track" [style.transform]="'translateX(-' + (svc.currentAwardsSlide() * 20) + '%)'">
            <div class="award-item" *ngFor="let award of svc.awards">
              <div class="award-badge" [style.backgroundColor]="award.color">
                <div class="award-year">{{ award.year }}</div>
                <div class="award-name">{{ award.name }}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="awards-controls">
          <button class="carousel-btn prev" (click)="svc.prevAwardsSlide()">❮</button>
          <button class="carousel-btn next" (click)="svc.nextAwardsSlide()">❯</button>
        </div>
      </div>
    </section>
  `,
})
export class AwardsComponent {
  constructor(public svc: AppDataService) {}
}
