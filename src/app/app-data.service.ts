import { Injectable, signal } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AppDataService {
  // App title
  title = signal('Beta Solutions');

  // Mobile menu state
  mobileMenuOpen = signal(false);

  // Vision carousel
  currentVisionSlide = signal(0);
  visionSlides = [
    {
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=700&fit=crop',
      title: 'Innovation',
      description: 'Pioneering next-generation solutions for business challenges',
    },
    {
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=700&fit=crop',
      title: 'Sustainability',
      description: 'Committed to environmental and social responsibility',
    },
    {
      image:
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=700&fit=crop',
      title: 'Growth',
      description: 'Scaling impact across global markets and communities',
    },
    {
      image:
        'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200&h=700&fit=crop',
      title: 'Excellence',
      description: 'Setting industry standards for quality and performance',
    },
  ];

  // Stats
  stats = [
    { label: 'Employees Worldwide', endValue: 125000, iconClass: 'fa-solid fa-building' },
    { label: 'Years in Business', endValue: 50, iconClass: 'fa-solid fa-hourglass-half' },
    { label: 'Projects Completed', endValue: 450, iconClass: 'fa-solid fa-briefcase' },
    { label: 'Client Satisfaction', endValue: 98, iconClass: 'fa-solid fa-star' },
  ];

  // Leadership
  leaders = [
    {
      name: 'Rajesh',
      lastName: 'Kumar',
      position: 'Chief Executive Officer',
      color: '#4A90E2',
      bio: 'With over 25 years of experience in corporate leadership, Rajesh has successfully guided the company through multiple transformations and market expansions.',
      expertise: ['Strategic Planning', 'Innovation', 'Sustainability'],
    },
    {
      name: 'Priya',
      lastName: 'Singh',
      position: 'Chief Financial Officer',
      color: '#50C878',
      bio: 'Priya brings extensive financial acumen with a focus on growth and operational excellence.',
      expertise: ['Finance', 'Risk Management', 'Investment Strategy'],
    },
    {
      name: 'Michael',
      lastName: 'Chen',
      position: 'Chief Technology Officer',
      color: '#F39C12',
      bio: 'Leading our digital transformation journey, Michael has pioneered cutting-edge technologies that have revolutionized our service delivery.',
      expertise: ['AI & ML', 'Cloud Architecture', 'Digital Innovation'],
    },
    {
      name: 'Sarah',
      lastName: 'Thompson',
      position: 'Chief Sustainability Officer',
      color: '#E74C3C',
      bio: 'Sarah drives our commitment to environmental and social responsibility.',
      expertise: ['Sustainability', 'ESG Strategy', 'Corporate Responsibility'],
    },
    {
      name: 'Amit',
      lastName: 'Patel',
      position: 'Chief Marketing Officer',
      color: '#9B59B6',
      bio: 'Amit has transformed our brand presence globally, leading innovative marketing campaigns that resonate with millions.',
      expertise: ['Brand Strategy', 'Digital Marketing', 'Market Analytics'],
    },
    {
      name: 'Emma',
      lastName: 'Wilson',
      position: 'Chief Human Resources Officer',
      color: '#1ABC9C',
      bio: 'Emma cultivates a culture of excellence and inclusivity, attracting and retaining top talent worldwide.',
      expertise: ['Talent Management', 'Organizational Development', 'Culture Building'],
    },
  ];

  // Core values
  coreValues = [
    { title: 'Innovation', description: 'We continuously push boundaries to create solutions that transform industries.', iconClass: 'fa-solid fa-lightbulb' },
    { title: 'Integrity', description: 'Ethical business practices and transparency.', iconClass: 'fa-solid fa-shield' },
    { title: 'Sustainability', description: 'Committed to environmental stewardship.', iconClass: 'fa-solid fa-leaf' },
    { title: 'Excellence', description: 'We strive for the highest standards.', iconClass: 'fa-solid fa-award' },
    { title: 'Community', description: 'We actively contribute to societies we operate in.', iconClass: 'fa-solid fa-people-group' },
    { title: 'Empowerment', description: 'We invest in our people to reach full potential.', iconClass: 'fa-solid fa-user-gear' },
  ];

  // Timeline
  timeline = [
    { year: '1975', title: 'Foundation', description: 'Beta Solutions was founded with a vision to revolutionize corporate solutions.' },
    { year: '1990', title: 'Global Expansion', description: 'Expanded operations to multiple countries.' },
    { year: '2005', title: 'Digital Transformation', description: 'Pioneered digital solutions.' },
    { year: '2015', title: 'Sustainability Focus', description: 'Launched sustainability initiatives.' },
    { year: '2020', title: 'AI Integration', description: 'Implemented AI and machine learning across operations.' },
    { year: '2025', title: 'Future Forward', description: 'Leading the charge towards emerging technologies.' },
  ];

  // Awards
  currentAwardsSlide = signal(0);
  awards = [
    { year: '2024', name: 'Best Corporate Citizen', color: '#FFD700' },
    { year: '2023', name: 'Innovation Excellence', color: '#C0C0C0' },
    { year: '2022', name: 'Employer of Choice', color: '#CD7F32' },
    { year: '2021', name: 'Customer Excellence', color: '#FFD700' },
  ];

  private destroy$ = new Subject<void>();

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  // Vision carousel methods
  prevVisionSlide() {
    this.currentVisionSlide.update(v => (v === 0 ? this.visionSlides.length - 1 : v - 1));
  }

  nextVisionSlide() {
    this.currentVisionSlide.update(v => (v === this.visionSlides.length - 1 ? 0 : v + 1));
  }

  goToVisionSlide(i: number) {
    this.currentVisionSlide.set(i);
  }

  // Awards carousel methods
  prevAwardsSlide() {
    this.currentAwardsSlide.update(v => (v === 0 ? Math.max(0, this.awards.length - 5) : v - 1));
  }

  nextAwardsSlide() {
    this.currentAwardsSlide.update(v => {
      const maxSlide = Math.max(0, this.awards.length - 5);
      return v === maxSlide ? 0 : v + 1;
    });
  }

  // Counter animation
  animateCounter(start: number, end: number, duration = 2000): Observable<string> {
    const increment = end / (duration / 50);
    let current = start;
    return interval(50).pipe(
      map(() => {
        current += increment;
        if (current >= end) current = end;
        return current >= 1000 ? (current / 1000).toFixed(0) + 'K' : current.toFixed(0);
      }),
      takeUntil(this.destroy$),
    );
  }

  destroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
