// js/form.js — Waitlist form submission

const form  = document.getElementById('waitlist-form');
const input = document.getElementById('waitlist-email');
const btn   = document.getElementById('waitlist-btn');
const msg   = document.getElementById('waitlist-msg');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = input.value.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }

    btn.disabled   = true;
    btn.textContent = 'Joining…';

    try {
      // Replace with your actual API endpoint or Mailchimp/ConvertKit URL
      const res = await fetch('/api/waitlist', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email }),
      });

      if (res.ok) {
        input.value     = '';
        btn.textContent = 'Joined ✓';
        showMessage('🎉 You\'re on the list! We\'ll be in touch soon.', 'success');

        // Track signup event (e.g. Plausible, Fathom, or GA4)
        if (typeof window.plausible === 'function') {
          window.plausible('Waitlist Signup');
        }
      } else {
        throw new Error('Server error');
      }
    } catch {
      btn.disabled    = false;
      btn.textContent = 'Join Waitlist →';
      showMessage('Something went wrong. Please try again.', 'error');
    }
  });
}

function showMessage(text, type) {
  if (!msg) return;
  msg.textContent  = text;
  msg.className    = `form-msg ${type}`;
  msg.style.display = 'block';
  setTimeout(() => { msg.style.display = 'none'; }, 5000);
}

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded',
      navMenu.classList.contains('open') ? 'true' : 'false');
  });
}
