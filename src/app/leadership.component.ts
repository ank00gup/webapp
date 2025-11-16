import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from './app-data.service';

@Component({
  selector: 'app-leadership',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="leadership" class="leadership-section">
      <div class="container">
        <h2 class="section-title">Our Leadership</h2>
        <p class="section-subtitle">Visionary leaders driving excellence and innovation</p>
        
        <div class="leadership-grid">
          <div class="leader-card" *ngFor="let l of svc.leaders; let i = index">
            <div class="leader-image-container">
              <div class="leader-image" [style.backgroundColor]="l.color"></div>
              <div class="leader-initials">{{ l.name.charAt(0) }}{{ l.lastName.charAt(0) }}</div>
            </div>
            <h3 class="leader-name">{{ l.name }} {{ l.lastName }}</h3>
            <p class="leader-position">{{ l.position }}</p>
            
            <button class="expand-btn" 
                    (click)="toggle(i)"
                    [class.expanded]="expanded()[i]">
              {{ expanded()[i] ? '−' : '+' }}
            </button>
            
            <div class="leader-bio" *ngIf="expanded()[i]">
              <p>{{ l.bio }}</p>
              <div class="leader-expertise">
                <strong>Expertise:</strong>
                <span *ngFor="let exp of l.expertise" class="expertise-tag">{{ exp }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class LeadershipComponent {
  expanded = signal<boolean[]>([]);
  constructor(public svc: AppDataService) {
    const arr = new Array(this.svc.leaders.length).fill(false);
    this.expanded.set(arr);
  }

  toggle(i: number) {
    this.expanded.update(arr => { arr[i] = !arr[i]; return [...arr]; });
  }
}
