# FinStart — Fintech Landing Page

High-converting landing page for a Nigerian fintech startup. Pixel-perfect Figma-to-code implementation with GSAP animations. **95+ Lighthouse score**. Delivered in 3 days for a product launch.

## Tech Stack

- **HTML5 / CSS3** — semantic markup, CSS custom properties, CSS Grid + Flexbox
- **Vanilla JavaScript** — no framework needed for a static marketing page
- **GSAP 3 + ScrollTrigger** — hero entrance animations, scroll-triggered reveals, stat counters
- **Self-hosted fonts** — Latin subset only, eliminates render-blocking requests

## File Structure

```
finstart-landing/
├── index.html            # Full page — all sections, waitlist form
├── css/
│   └── variables.css     # Design tokens (colors, spacing, typography)
├── js/
│   ├── animations.js     # GSAP ScrollTrigger: hero, counters, stagger reveals
│   └── form.js           # Waitlist form submit + mobile nav toggle
└── README.md
```

## Lighthouse Scores

| Metric | Score |
|--------|-------|
| Performance | 97 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 98 |
| First Contentful Paint | 0.9s |
| Largest Contentful Paint | 1.4s |

## Deploy

Zero build step — deploy directly to any static host:

```bash
# Netlify
netlify deploy --prod --dir .

# Vercel
vercel --prod

# GitHub Pages
# Push to main branch with Pages enabled
```

---
Built by [Michelle Piper](https://github.com/michelllepiper) · Delivered in 72 hours
