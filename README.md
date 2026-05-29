# FinStart — Fintech Landing Page

High-converting landing page for a Nigerian fintech startup. Pixel-perfect implementation of Figma designs with GSAP animations and a **95+ Lighthouse score**. Delivered in 3 days for a product launch.

## Features

- **Figma-to-code** — pixel-perfect implementation from provided design files
- **GSAP animations** — hero entrance, scroll-triggered reveals, number counter animations
- **Performance** — 95+ Lighthouse score, all images WebP, font subsetting, critical CSS inlined
- **Responsive** — mobile-first, tested from 320px to 2560px
- **Waitlist form** — email capture with basic validation; hooks into Mailchimp / ConvertKit
- **Accessibility** — WCAG AA compliant, focus management, reduced-motion support

## Tech Stack

- **HTML5 / CSS3** — semantic markup, CSS custom properties, CSS Grid + Flexbox
- **Vanilla JavaScript** — no framework needed for a marketing page
- **GSAP 3** — ScrollTrigger plugin for scroll animations, Counter plugin for stats
- **Google Fonts** — self-hosted subset to eliminate render-blocking request

## File Structure

```
finstart-landing/
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css         # Design tokens (colors, spacing, typography)
│   ├── components.css        # Buttons, cards, forms
│   └── main.css              # Layout + page sections
├── js/
│   ├── animations.js         # GSAP ScrollTrigger setup
│   ├── counter.js            # Stats counter animation
│   └── form.js               # Waitlist form submission
├── images/
│   ├── hero-phone.webp       # Hero device mockup
│   ├── og-image.png          # Open Graph / social preview
│   └── icons/                # SVG icons
└── fonts/
    └── inter-subset.woff2    # Self-hosted, Latin subset only
```

## Performance Results

| Metric | Score |
|--------|-------|
| Performance | 97 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 98 |
| First Contentful Paint | 0.9s |
| Largest Contentful Paint | 1.4s |
| Cumulative Layout Shift | 0.02 |

## Animations

```javascript
// js/animations.js — Hero entrance sequence
gsap.timeline({ defaults: { ease: 'power3.out' } })
  .from('.hero-badge',    { opacity: 0, y: 20, duration: 0.6 })
  .from('.hero-title',    { opacity: 0, y: 30, duration: 0.7 }, '-=0.3')
  .from('.hero-desc',     { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
  .from('.hero-actions',  { opacity: 0, y: 20, duration: 0.5 }, '-=0.3')
  .from('.hero-mockup',   { opacity: 0, x: 40, duration: 0.8 }, '-=0.6');

// Scroll-triggered stats counter
ScrollTrigger.create({
  trigger: '.stats-section',
  onEnter: () => {
    document.querySelectorAll('.counter').forEach(el => {
      gsap.to(el, {
        innerHTML: el.dataset.target,
        duration: 1.5,
        snap: { innerHTML: 1 },
        ease: 'power2.out',
      });
    });
  },
  once: true,
});
```

## Deployment

Static files — deploy to any CDN or static host:

```bash
# Netlify
netlify deploy --prod --dir .

# Vercel
vercel --prod

# Or simply drag the folder into Netlify's dashboard
```

---

Built by [Michelle Piper](https://github.com/michelllepiper) · Delivered in 72 hours
