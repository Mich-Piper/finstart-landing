// js/animations.js
// Requires GSAP + ScrollTrigger loaded via CDN in index.html
gsap.registerPlugin(ScrollTrigger);

// ── Hero entrance sequence ──────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('.hero-badge',   { opacity: 0, y: 20, duration: 0.6 })
    .from('.hero-title',   { opacity: 0, y: 30, duration: 0.7 }, '-=0.3')
    .from('.hero-desc',    { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
    .from('.hero-actions', { opacity: 0, y: 20, duration: 0.5 }, '-=0.3')
    .from('.hero-stats',   { opacity: 0, y: 16, duration: 0.5 }, '-=0.2');
});

// ── Scroll-triggered stat counters ─────────────────────────────────────────
ScrollTrigger.create({
  trigger: '.stats-section',
  start: 'top 80%',
  once: true,
  onEnter() {
    document.querySelectorAll('.counter[data-target]').forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: target,
          duration: 1.8,
          ease: 'power2.out',
          snap: { innerText: 1 },
          onUpdate() { el.textContent = Math.round(this.targets()[0].innerText).toLocaleString(); },
        }
      );
    });
  },
});

// ── Feature cards stagger on scroll ────────────────────────────────────────
gsap.from('.feature-card', {
  scrollTrigger: { trigger: '.features-grid', start: 'top 80%' },
  opacity: 0,
  y: 30,
  stagger: 0.1,
  duration: 0.6,
  ease: 'power2.out',
});

// ── Testimonials ────────────────────────────────────────────────────────────
gsap.from('.testimonial-card', {
  scrollTrigger: { trigger: '.testimonials', start: 'top 80%' },
  opacity: 0,
  y: 24,
  stagger: 0.12,
  duration: 0.6,
  ease: 'power2.out',
});

// ── Nav background on scroll ────────────────────────────────────────────────
ScrollTrigger.create({
  start: 'top -60',
  onEnter:      () => document.querySelector('nav')?.classList.add('scrolled'),
  onLeaveBack:  () => document.querySelector('nav')?.classList.remove('scrolled'),
});
