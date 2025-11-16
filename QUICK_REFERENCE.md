# NEXUS Website - Quick Reference Card

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm build

# Run tests
npm test
```

---

## 📋 Project Files Reference

| File | Purpose | Key Content |
|------|---------|------------|
| `app.ts` | Component logic & data | Signals, animations, methods |
| `app.html` | Template markup | HTML structure, directives |
| `app.scss` | Styles & animations | 1000+ lines of CSS |
| `styles.scss` | Global styles | Typography, scrollbar |
| `WEBSITE_README.md` | Main documentation | Features overview |
| `FEATURES.md` | Feature details | Implementation guide |
| `ADVANCED_GUIDE.md` | Advanced topics | Optimization, deployment |

---

## 🎯 Key Components

### Navigation
- Fixed header with logo
- Menu with smooth animations
- Search bar
- Mobile hamburger menu

### Hero Section
- Full viewport height
- Gradient background with pattern
- Animated title and subtitle
- CTA buttons
- Scroll indicator

### Vision Carousel
- 4 slides with images
- Manual navigation
- Auto-rotate every 5 seconds
- Dot indicators

### Statistics
- 4 animated counters
- Glass-morphism cards
- Responsive grid

### Leadership
- 6 team members
- Expandable bios
- Expertise tags
- Color-coded profiles

### Core Values
- 6 value cards
- SVG icons
- Hover animations
- Gradient transitions

### Timeline
- 6 company milestones
- Vertical timeline
- Alternating layout
- Year markers

### Awards
- 8 award badges
- Carousel navigation
- Color-coded (gold/silver/bronze)
- Smooth transitions

### Footer
- 4 sections
- Company info
- Social links
- Contact details

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | #2c3e50 | Main text & footer |
| Secondary | #3498db | Accents & buttons |
| Accent | #e74c3c | Highlights |
| Light BG | #f8f9fa | Section backgrounds |
| Light Text | #ecf0f1 | Text on dark |

---

## 📐 Spacing System

| Size | Value | Usage |
|------|-------|-------|
| xs | 0.5rem (8px) | Small gaps |
| sm | 1rem (16px) | Normal gaps |
| md | 2rem (32px) | Section margins |
| lg | 3rem (48px) | Large gaps |
| xl | 4rem (64px) | Section padding |

---

## 📱 Breakpoints

| Device | Width | Breakpoint |
|--------|-------|-----------|
| Mobile | < 480px | $breakpoint-mobile |
| Tablet | < 768px | $breakpoint-tablet |
| Desktop | < 1024px | $breakpoint-desktop |
| Large | 1440px+ | $breakpoint-large |

---

## 🎬 Animations

| Animation | Duration | Usage |
|-----------|----------|-------|
| fadeInUp | 0.8s | Section entrance |
| scaleIn | 0.6s | Stat cards |
| expandCollapse | 0.4s | Bio expansion |
| pulse | 0.6s | Button hover |
| bounce | 2s loop | Scroll indicator |
| slideIn | 0.6s | Tab navigation |

---

## 💻 Angular Features Used

- **Signals**: Reactive state management
- **RxJS**: Observables for counters
- **Animations**: Angular animation framework
- **CommonModule**: Directives (*ngFor, *ngIf, async pipe)
- **Templates**: Modern Angular syntax
- **Directives**: Custom attribute bindings
- **Event Binding**: Click, input events
- **Two-Way Binding**: Form inputs

---

## 🔧 Component Methods

### Navigation
- `toggleMobileMenu()` - Toggle mobile menu open/close

### Vision Carousel
- `nextVisionSlide()` - Move to next slide
- `prevVisionSlide()` - Move to previous slide
- `goToVisionSlide(index)` - Jump to specific slide

### Awards Carousel
- `nextAwardsSlide()` - Move to next award set
- `prevAwardsSlide()` - Move to previous award set

### Leadership
- `toggleLeaderBio(index)` - Expand/collapse bio

### Initialization
- `ngOnInit()` - Initialize counters and auto-carousel
- `ngOnDestroy()` - Cleanup subscriptions

---

## 📊 Data Arrays

```typescript
// In app.ts

// 4 vision slides
visionSlides: { image, title, description }[]

// 4 statistics
stats: { label, endValue, displayed, iconPath }[]

// 6 leaders
leaders: { name, lastName, position, color, bio, expertise }[]

// 6 core values
coreValues: { title, description, iconPath }[]

// 6 timeline items
timeline: { year, title, description }[]

// 8 awards
awards: { year, name, color }[]
```

---

## 🎯 Common Tasks

### Change Company Name
Edit in:
1. `app.ts` line: `title = signal('NEXUS...')`
2. `app.html` line 2: `<span class="logo-text">NEXUS</span>`

### Add New Leader
1. Add object to `leaders` array in `app.ts`
2. Update `expandedLeaders` size in `ngOnInit()`

### Update Colors
Edit variables in `app.scss`:
- `$primary-color`
- `$secondary-color`
- `$accent-color`

### Change Carousel Speed
Edit `startAutoCarousel()` in `app.ts`:
```typescript
setInterval(() => this.nextVisionSlide(), 5000); // 5 seconds
```

### Disable Auto-Carousel
Comment out or remove `this.startAutoCarousel();` from `ngOnInit()`

---

## 🐛 Quick Fixes

| Issue | Solution |
|-------|----------|
| Mobile menu not opening | Check `mobileMenuOpen` signal |
| Carousel stuck | Clear browser cache, restart server |
| Animations jerky | Check GPU acceleration in DevTools |
| Images not loading | Verify image URLs are correct |
| Styles not applying | Rebuild with `ng build` |

---

## 📈 Performance Checklist

- [ ] Images optimized (< 100KB each)
- [ ] No console errors
- [ ] Animations smooth (60fps)
- [ ] Mobile layout responsive
- [ ] Touch targets 44x44px minimum
- [ ] Focus states visible
- [ ] Print styles work
- [ ] Accessibility tested (a11y)

---

## ✅ Pre-Deployment Checklist

- [ ] Run `npm test`
- [ ] Build production: `ng build --configuration production`
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Check lighthouse score > 90
- [ ] Verify all links work
- [ ] Test form submission
- [ ] Check analytics tracking
- [ ] Update meta tags
- [ ] Set up SSL certificate

---

## 🔗 External Resources

- **Angular Docs**: https://angular.io
- **SCSS Guide**: https://sass-lang.com
- **CSS Tricks**: https://css-tricks.com
- **MDN Web Docs**: https://developer.mozilla.org
- **Unsplash Images**: https://unsplash.com

---

## 📞 Getting Help

1. Check existing documentation files
2. Review component code with comments
3. Check browser console for errors
4. Test in different browsers
5. Refer to Angular official docs

---

## 🎉 You're Ready!

The website is fully functional with:
- ✅ 10+ major features
- ✅ Premium design
- ✅ Smooth animations
- ✅ Responsive layout
- ✅ Accessibility compliance
- ✅ Production-ready code

**Deploy with confidence! 🚀**
