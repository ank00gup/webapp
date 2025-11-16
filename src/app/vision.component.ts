import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from './app-data.service';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="vision" class="vision-section">
      <div class="container">
        <h2 class="section-title">Our Vision</h2>
        <p class="section-subtitle">Driving innovation and sustainable growth across industries</p>
        
        <div class="vision-carousel">
          <div class="carousel-container">
            <div class="carousel-track" [style.transform]="'translateX(-' + (svc.currentVisionSlide() * 100) + '%)'">
              <div class="carousel-slide" *ngFor="let slide of svc.visionSlides">
                <img [src]="slide.image" [alt]="slide.title" class="slide-image">
                <div class="slide-overlay">
                  <h3>{{ slide.title }}</h3>
                  <p>{{ slide.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <button class="carousel-btn prev" (click)="svc.prevVisionSlide()">❮</button>
          <button class="carousel-btn next" (click)="svc.nextVisionSlide()">❯</button>
          
          <div class="carousel-dots">
            <button *ngFor="let slide of svc.visionSlides; let i = index" 
                    class="dot" 
                    [class.active]="i === svc.currentVisionSlide()"
                    (click)="svc.goToVisionSlide(i)"></button>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class VisionComponent {
  constructor(public svc: AppDataService) {}
}
