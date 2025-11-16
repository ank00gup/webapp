import { Component, signal, OnInit, OnDestroy, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { interval, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
    trigger('expandCollapse', [
      transition(':enter', [
        style({ opacity: 0, height: 0 }),
        animate('0.4s ease-out', style({ opacity: 1, height: '*' })),
      ]),
      transition(':leave', [
        animate('0.4s ease-in', style({ opacity: 0, height: 0 })),
      ]),
    ]),
    trigger('pulse', [
      transition('* => *', [
        animate('0.3s ease-in-out', style({ transform: 'scale(1.1)' })),
        animate('0.3s ease-in-out', style({ transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('NEXUS Corporate Solutions');

  // Mobile menu
  mobileMenuOpen = signal(false);

  // Vision carousel
  currentVisionSlide = signal(0);
  visionSlides = [
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
      title: 'Innovation',
      description: 'Pioneering next-generation solutions for business challenges',
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
      title: 'Sustainability',
      description: 'Committed to environmental and social responsibility',
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
      title: 'Growth',
      description: 'Scaling impact across global markets and communities',
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
      title: 'Excellence',
      description: 'Setting industry standards for quality and performance',
    },
  ];

  // Statistics with animated counters
  stats = [
    {
      label: 'Employees Worldwide',
      endValue: 125000,
      displayed: new Observable<string>(),
      iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
    },
    {
      label: 'Years in Business',
      endValue: 50,
      displayed: new Observable<string>(),
      iconPath: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.96-3.83c-.3-.39-.97-.39-1.25 0-.31.39-.3 1.03 0 1.41L10.5 19l3.54-4.29c.31-.39.32-1.02 0-1.41-.28-.38-.95-.39-1.25 0z',
    },
    {
      label: 'Projects Completed',
      endValue: 450,
      displayed: new Observable<string>(),
      iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    },
    {
      label: 'Client Satisfaction',
      endValue: 98,
      displayed: new Observable<string>(),
      iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
    },
  ];

  // Leadership team
  expandedLeaders = signal<boolean[]>([]);
  leaders = [
    {
      name: 'Rajesh',
      lastName: 'Kumar',
      position: 'Chief Executive Officer',
      color: '#4A90E2',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'With over 25 years of experience in corporate leadership, Rajesh has successfully guided the company through multiple transformations and market expansions. His visionary approach has positioned the organization as an industry leader in innovation and sustainability.',
      expertise: ['Strategic Planning', 'Innovation', 'Sustainability'],
    },
    {
      name: 'Priya',
      lastName: 'Singh',
      position: 'Chief Financial Officer',
      color: '#50C878',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Priya brings extensive financial acumen with a focus on growth and operational excellence. Her strategic financial planning has strengthened the company\'s market position and investor confidence.',
      expertise: ['Finance', 'Risk Management', 'Investment Strategy'],
    },
    {
      name: 'Michael',
      lastName: 'Chen',
      position: 'Chief Technology Officer',
      color: '#F39C12',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Leading our digital transformation journey, Michael has pioneered cutting-edge technologies that have revolutionized our service delivery. His innovation-driven approach has earned multiple industry awards.',
      expertise: ['AI & ML', 'Cloud Architecture', 'Digital Innovation'],
    },
    {
      name: 'Sarah',
      lastName: 'Thompson',
      position: 'Chief Sustainability Officer',
      color: '#E74C3C',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Sarah drives our commitment to environmental and social responsibility. Her initiatives have reduced our carbon footprint by 40% while creating positive community impact.',
      expertise: ['Sustainability', 'ESG Strategy', 'Corporate Responsibility'],
    },
    {
      name: 'Amit',
      lastName: 'Patel',
      position: 'Chief Marketing Officer',
      color: '#9B59B6',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Amit has transformed our brand presence globally, leading innovative marketing campaigns that resonate with millions. His data-driven approach has increased brand value significantly.',
      expertise: ['Brand Strategy', 'Digital Marketing', 'Market Analytics'],
    },
    {
      name: 'Emma',
      lastName: 'Wilson',
      position: 'Chief Human Resources Officer',
      color: '#1ABC9C',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Emma cultivates a culture of excellence and inclusivity. Her HR initiatives have made the company a top employer, attracting and retaining top talent worldwide.',
      expertise: ['Talent Management', 'Organizational Development', 'Culture Building'],
    },
  ];

  // Core values
  coreValues = [
    {
      title: 'Innovation',
      description: 'We continuously push boundaries to create solutions that transform industries and improve lives globally.',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
      title: 'Integrity',
      description: 'Ethical business practices and transparency form the foundation of all our operations and relationships.',
      iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    },
    {
      title: 'Sustainability',
      description: 'We commit to environmental stewardship and sustainable practices that protect our planet for future generations.',
      iconPath: 'M17.92 7.02C17.45 4.18 14.97 2 12 2s-5.45 2.18-5.92 5.02C4.97 7.53 3 9.75 3 12.5 3 16.04 5.96 19 9.5 19h8c3.59 0 6.5-2.91 6.5-6.5 0-3.42-2.62-6.26-6.08-6.48z',
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, delivering exceptional value to all stakeholders.',
      iconPath: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    },
    {
      title: 'Community',
      description: 'We actively contribute to the societies we operate in, creating positive social and economic impact.',
      iconPath: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
    },
    {
      title: 'Empowerment',
      description: 'We invest in our people, enabling them to reach their full potential and drive meaningful change.',
      iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
    },
  ];

  // Timeline
  timeline = [
    {
      year: '1975',
      title: 'Foundation',
      description: 'Nexus was founded with a vision to revolutionize corporate solutions and create lasting value.',
    },
    {
      year: '1990',
      title: 'Global Expansion',
      description: 'Expanded operations to 15 countries across Europe, Asia, and Americas.',
    },
    {
      year: '2005',
      title: 'Digital Transformation',
      description: 'Pioneered digital solutions that set new industry standards for efficiency and innovation.',
    },
    {
      year: '2015',
      title: 'Sustainability Focus',
      description: 'Launched comprehensive sustainability initiatives, achieving carbon neutrality target.',
    },
    {
      year: '2020',
      title: 'AI Integration',
      description: 'Implemented cutting-edge AI and machine learning across all business operations.',
    },
    {
      year: '2025',
      title: 'Future Forward',
      description: 'Leading the charge towards Web3 and quantum computing solutions for tomorrow\'s challenges.',
    },
  ];

  // Awards
  currentAwardsSlide = signal(0);
  awards = [
    {
      year: '2024',
      name: 'Best Corporate Citizen',
      color: '#FFD700',
    },
    {
      year: '2023',
      name: 'Innovation Excellence',
      color: '#C0C0C0',
    },
    {
      year: '2023',
      name: 'Sustainability Leader',
      color: '#CD7F32',
    },
    {
      year: '2022',
      name: 'Employer of Choice',
      color: '#FFD700',
    },
    {
      year: '2022',
      name: 'Digital Transformation',
      color: '#C0C0C0',
    },
    {
      year: '2021',
      name: 'Customer Excellence',
      color: '#CD7F32',
    },
    {
      year: '2021',
      name: 'Leadership Award',
      color: '#FFD700',
    },
    {
      year: '2020',
      name: 'Industry Impact',
      color: '#C0C0C0',
    },
  ];

  private destroy$ = new Subject<void>();
  autoCarouselInterval: any;

  ngOnInit() {
    this.initializeCounters();
    this.expandedLeaders.set(new Array(this.leaders.length).fill(false));
    this.startAutoCarousel();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update((val) => !val);
  }

  // Vision carousel methods
  prevVisionSlide() {
    this.currentVisionSlide.update((val) => (val === 0 ? this.visionSlides.length - 1 : val - 1));
  }

  nextVisionSlide() {
    this.currentVisionSlide.update((val) => (val === this.visionSlides.length - 1 ? 0 : val + 1));
  }

  goToVisionSlide(index: number) {
    this.currentVisionSlide.set(index);
  }

  // Awards carousel methods
  prevAwardsSlide() {
    this.currentAwardsSlide.update((val) => (val === 0 ? Math.max(0, this.awards.length - 5) : val - 1));
  }

  nextAwardsSlide() {
    this.currentAwardsSlide.update((val) => {
      const maxSlide = Math.max(0, this.awards.length - 5);
      return val === maxSlide ? 0 : val + 1;
    });
  }

  goToAwardSlide(index: number) {
    this.currentAwardsSlide.set(Math.max(0, Math.min(index, this.awards.length - 5)));
  }

  // Leadership bio toggle
  toggleLeaderBio(index: number) {
    this.expandedLeaders.update((leaders) => {
      const updated = [...leaders];
      updated[index] = !updated[index];
      return updated;
    });
  }

  // Counter animation
  private initializeCounters() {
    this.stats.forEach((stat) => {
      stat.displayed = this.animateCounter(0, stat.endValue, 2000);
    });
  }

  private animateCounter(start: number, end: number, duration: number): Observable<string> {
    const increment = end / (duration / 50);
    let current = start;

    return interval(50).pipe(
      map(() => {
        current += increment;
        if (current >= end) {
          current = end;
        }
        return current >= 1000
          ? (current / 1000).toFixed(0) + 'K'
          : current.toFixed(0);
      }),
      takeUntil(this.destroy$),
    );
  }

  // Auto-carousel functionality
  private startAutoCarousel() {
    this.autoCarouselInterval = setInterval(() => {
      this.nextVisionSlide();
    }, 5000);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.autoCarouselInterval) {
      clearInterval(this.autoCarouselInterval);
    }
  }
}

