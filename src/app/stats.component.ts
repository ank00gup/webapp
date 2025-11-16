import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from './app-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="stats-section">
      <div class="container">
        <h2 class="section-title">Our Impact</h2>
        <div class="stats-grid">
          <div class="stat-card" *ngFor="let s of svc.stats; let i = index">
            <div class="stat-icon">
              <i [class]="s.iconClass"></i>
            </div>
            <h3 class="stat-number">{{ statDisplays[i] | async }}</h3>
            <p class="stat-label">{{ s.label }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class StatsComponent implements OnInit {
  statDisplays: Observable<string>[] = [];
  constructor(public svc: AppDataService) {}
  ngOnInit(): void {
    this.statDisplays = this.svc.stats.map(s => this.svc.animateCounter(0, s.endValue, 1800));
  }
}
