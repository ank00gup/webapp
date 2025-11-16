import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from './app-data.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="journey" class="journey-section">
      <div class="container">
        <h2 class="section-title">Our Journey</h2>
        <p class="section-subtitle">Milestone moments that shaped our legacy</p>
        
        <div class="timeline">
          <div class="timeline-item" *ngFor="let t of svc.timeline; let i = index">
            <div class="timeline-marker"></div>
            <div class="timeline-content" [class.alternate]="i % 2 === 1">
              <div class="timeline-year">{{ t.year }}</div>
              <h3>{{ t.title }}</h3>
              <p>{{ t.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class TimelineComponent {
  constructor(public svc: AppDataService) {}
}
