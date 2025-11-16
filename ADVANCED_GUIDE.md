# NEXUS Website - Advanced Guide & Troubleshooting

## 🔧 Troubleshooting Guide

### Issue: Carousel not auto-rotating
**Solution**: Ensure `startAutoCarousel()` is called in `ngOnInit()`. Check browser console for errors.

### Issue: Mobile menu not closing
**Solution**: Verify `toggleMobileMenu()` is called on nav link click. Check `mobileMenuOpen` signal state.

### Issue: Counter animations not smooth
**Solution**: Ensure RxJS interval is properly implemented. Check for conflicts with change detection.

### Issue: Animations not working on mobile
**Solution**: Check device settings for `prefers-reduced-motion`. Verify CSS transforms are not blocked.

### Issue: Images not loading
**Solution**: Replace placeholder Unsplash URLs with your own image paths. Check image file permissions.

### Issue: Page not responsive
**Solution**: Verify viewport meta tag exists in `index.html`. Clear browser cache. Check media queries in app.scss.

---

## 🎨 Advanced Customization

### Adding New Sections

#### 1. Create Section Structure
```html
<section id="new-section" class="new-section" [@fadeInUp]>
  <div class="container">
    <h2 class="section-title">New Section Title</h2>
    <!-- Content here -->
  </div>
</section>
```

#### 2. Add Styles
```scss
.new-section {
  padding: $spacing-xl $spacing-lg;
  background: $light-bg;
  
  @media (max-width: $breakpoint-tablet) {
    padding: $spacing-lg $spacing-md;
  }
}
```

#### 3. Add Animation
```typescript
trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(30px)' }),
    animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
])
```

### Custom Animation Creation

```typescript
// Add to @Component animations array
trigger('customAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0)' }),
    animate('0.6s cubic-bezier(0.34, 1.56, 0.64, 1)', 
      style({ opacity: 1, transform: 'scale(1)' })
    ),
  ]),
])
```

### Creating Custom Carousels

```typescript
// Add to component class
customCarouselSlide = signal(0);
customItems = [/* data array */];

nextCustomSlide() {
  this.customCarouselSlide.update(val => 
    val === this.customItems.length - 1 ? 0 : val + 1
  );
}

prevCustomSlide() {
  this.customCarouselSlide.update(val => 
    val === 0 ? this.customItems.length - 1 : val - 1
  );
}
```

```html
<div class="carousel-track" 
     [style.transform]="'translateX(-' + (customCarouselSlide() * 100) + '%)'">
  <div class="carousel-slide" *ngFor="let item of customItems">
    <!-- Content -->
  </div>
</div>
```

### Implementing Search Functionality

```typescript
// Add search logic to app.ts
searchQuery = signal('');

performSearch(query: string) {
  this.searchQuery.set(query);
  // Filter data based on query
  const results = this.filterData(query);
  // Display results
}

filterData(query: string): any[] {
  return this.allData.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
}
```

```html
<input type="text" 
       class="search-input" 
       [value]="searchQuery()"
       (input)="performSearch($event.target.value)">
```

---

## 🎯 Performance Optimization Tips

### 1. Image Optimization
- Use WebP format for modern browsers
- Compress images to < 100KB
- Use responsive images with srcset
- Lazy load below-the-fold images

### 2. Animation Performance
- Use `transform` and `opacity` only
- Avoid animating layout properties
- Use `will-change` sparingly
- Profile with Chrome DevTools

### 3. Bundle Optimization
```bash
# Build for production with optimization
ng build --configuration production --optimization

# Check bundle size
ng build --stats-json
webpack-bundle-analyzer dist/sample-retail/stats.json
```

### 4. Change Detection Optimization
```typescript
// Use OnPush strategy for static components
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

---

## 🔐 Security Considerations

### XSS Prevention
- Always use Angular's sanitization
- Avoid `innerHTML` unless necessary
- Use `[textContent]` for dynamic text

### CSRF Protection
- Angular provides built-in CSRF protection
- Include `X-CSRF-TOKEN` in requests

### Content Security Policy
```html
<!-- Add to index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline';">
```

---

## 📱 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome 90+ | ✅ Full | Recommended |
| Firefox 88+ | ✅ Full | Full support |
| Safari 14+ | ✅ Full | Full support |
| Edge 90+ | ✅ Full | Full support |
| IE 11 | ❌ Not | Not supported |
| Mobile Safari | ✅ 12+ | Full support |
| Chrome Android | ✅ Full | Full support |

---

## 🚀 Deployment Guide

### Deploy to Netlify
```bash
# Build project
ng build --configuration production

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist/sample-retail
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Deploy to AWS S3 + CloudFront
```bash
# Build
ng build --configuration production

# Upload to S3
aws s3 sync dist/sample-retail s3://your-bucket-name --delete

# Invalidate CloudFront
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

### Deploy to GitHub Pages
```bash
# Install angular-cli-ghpages
npm install -g angular-cli-ghpages

# Build and deploy
ng build --configuration production --base-href=/repo-name/
ngh --dir=dist/sample-retail
```

---

## 📊 SEO Optimization

### Meta Tags
```html
<!-- Add to index.html head -->
<meta name="description" content="NEXUS - Leading corporate solutions...">
<meta name="keywords" content="corporate, innovation, sustainability">
<meta property="og:title" content="NEXUS Corporate Solutions">
<meta property="og:description" content="...">
<meta property="og:image" content="/assets/og-image.jpg">
```

### Structured Data
```html
<!-- Add to app.html -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NEXUS",
  "url": "https://nexus.com",
  "logo": "/assets/logo.png",
  "description": "...",
  "sameAs": ["https://twitter.com/...", "https://linkedin.com/..."]
}
</script>
```

### Sitemap
```xml
<!-- Create sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://nexus.com/</loc>
    <lastmod>2025-11-16</lastmod>
    <priority>1.0</priority>
  </url>
  <!-- More URLs -->
</urlset>
```

---

## 🔍 Debugging Tips

### Enable Source Maps
```bash
ng serve --source-map
```

### Debug in VS Code
Create `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Angular",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:4200",
      "webRoot": "${workspaceRoot}",
      "runtimeArgs": ["--disable-extensions"]
    }
  ]
}
```

### Check Console Logs
```typescript
// Add debug logs
console.log('Carousel moved to:', this.currentVisionSlide());
console.log('Leader expanded:', this.expandedLeaders());
```

### Performance Profiling
1. Open Chrome DevTools
2. Go to Performance tab
3. Record interaction
4. Analyze flame chart
5. Look for long tasks > 50ms

---

## 🎓 Learning Resources

### Angular Documentation
- [Angular Official Docs](https://angular.io)
- [Angular CLI Guide](https://angular.io/cli)
- [Angular Animations](https://angular.io/guide/animations)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

### SCSS/CSS
- [SCSS Official Docs](https://sass-lang.com/documentation)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

### Design
- [Material Design](https://material.io)
- [Web Design Trends](https://www.webdesignerdepot.com)

---

## 📝 Code Standards

### Naming Conventions
```typescript
// Classes: PascalCase
class LeaderCard { }

// Functions/Methods: camelCase
function toggleMobileMenu() { }

// Constants: UPPER_SNAKE_CASE
const MAX_SLIDES = 4;

// Private members: prefix with underscore
private _destroy$ = new Subject();

// Observable streams: suffix with $
private destroy$ = new Subject();
```

### File Structure
```
feature/
├── feature.component.ts
├── feature.component.html
├── feature.component.scss
├── feature.component.spec.ts
└── feature.model.ts
```

### SCSS Best Practices
```scss
// 1. Variables first
$color: #fff;

// 2. Mixins
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

// 3. Parent selector
.button {
  &:hover {
    // Nested hover
  }
  
  &--primary {
    // BEM modifier
  }
}
```

---

## 🔄 Continuous Integration/Deployment

### GitHub Actions Workflow
```yaml
name: Build and Deploy
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build -- --configuration production
      - run: npm test
      - uses: netlify/actions/cli@master
        with:
          args: deploy --prod --dir=dist/sample-retail
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## 📞 Support & Community

### Getting Help
1. Check official Angular documentation
2. Search Stack Overflow for similar issues
3. Post detailed question with code reproduction
4. Join Angular Discord community

### Reporting Bugs
When reporting bugs, include:
- Angular version
- Browser and OS
- Steps to reproduce
- Expected vs actual behavior
- Console errors/logs
- Code snippet

---

## 🎉 Conclusion

This comprehensive guide covers everything needed to:
- ✅ Customize the website
- ✅ Fix common issues
- ✅ Optimize performance
- ✅ Deploy to production
- ✅ Scale and maintain the application

For more information, refer to the main README and FEATURES documentation.

**Happy coding! 🚀**
