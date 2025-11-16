import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from './app-data.service';

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="values" class="values-section">
      <div class="container">
        <h2 class="section-title">Core Values</h2>
        <p class="section-subtitle">Principles that guide everything we do</p>
        
        <div class="values-grid">
          <div class="value-card" *ngFor="let v of svc.coreValues">
            <div class="value-icon">
              <i [class]="v.iconClass"></i>
            </div>
            <h3>{{ v.title }}</h3>
            <p>{{ v.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ValuesComponent {
  constructor(public svc: AppDataService) {}
}
