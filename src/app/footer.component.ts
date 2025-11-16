import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService } from './app-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>About {{ svc.title() }}</h4>
          <p>Leading the way in corporate innovation and sustainable business solutions worldwide.</p>
        </div>
        
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#vision">Vision</a></li>
            <li><a href="#leadership">Leadership</a></li>
            <li><a href="#values">Values</a></li>
            <li><a href="#journey">Journey</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Connect With Us</h4>
          <div class="social-links">
            <a href="#" class="social-link">LinkedIn</a>
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">Facebook</a>
          </div>
        </div>
        
        <div class="footer-section">
          <h4>Contact</h4>
          <p>Email: contact@betasolutions.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2025 {{ svc.title() }} Corporate Solutions. All rights reserved.</p>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  constructor(public svc: AppDataService) {}
}
