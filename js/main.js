/* ═══════════════════════════════════════════
   CASPER BEKAERT GALLERY — main.js
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Nav scroll behaviour ──────────────────
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // ── Scroll reveal ─────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => revealObserver.observe(el));

  // ── Newsletter form → Supabase ───────────
  const SUPABASE_URL = 'https://wojavtiwvveynjbkwotd.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvamF2dGl3dnZleW5qYmt3b3RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5Mjk1NjksImV4cCI6MjA5NTUwNTU2OX0.9LsqSstJPEvwn3BHR6drEaf3PP_ZR3v5jMvdSkc8jO8';

  const form    = document.getElementById('newsletter-form');
  const success = document.getElementById('subscribe-success');

  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();

      const firstNameEl = form.querySelector('input[placeholder="First name"], input[data-i18n-ph="nl.firstname"]');
      const lastNameEl  = form.querySelector('input[placeholder="Last name"],  input[data-i18n-ph="nl.lastname"]');
      const emailEl     = form.querySelector('input[type="email"]');

      const payload = {
        first_name: firstNameEl ? firstNameEl.value.trim() : null,
        last_name:  lastNameEl  ? lastNameEl.value.trim()  : null,
        email:      emailEl     ? emailEl.value.trim()     : null,
      };

      try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/subscribers`, {
          method:  'POST',
          headers: {
            'Content-Type':  'application/json',
            'apikey':        SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Prefer':        'return=minimal',
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error(await res.text());
      } catch (err) {
        console.error('Supabase insert error:', err);
      }

      form.querySelectorAll('input, button').forEach(el => el.style.display = 'none');
      if (success) success.style.display = 'block';

      setTimeout(() => {
        form.querySelectorAll('input, button').forEach(el => el.style.display = '');
        if (success) success.style.display = 'none';
        form.reset();
      }, 4000);
    });
  }

  // ── Mobile hamburger menu ─────────────────
  const navToggle  = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  function openMenu() {
    navToggle.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
  }

  navToggle.addEventListener('click', () => {
    navToggle.classList.contains('open') ? closeMenu() : openMenu();
  });

  mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ── Photo gallery lightbox ────────────────
  const lightbox   = document.getElementById('lightbox');
  if (lightbox) {
    const lbImg     = document.getElementById('lb-img');
    const lbClose   = document.getElementById('lb-close');
    const lbPrev    = document.getElementById('lb-prev');
    const lbNext    = document.getElementById('lb-next');
    const lbCounter = document.getElementById('lb-counter');
    const items     = Array.from(document.querySelectorAll('.gallery-item img'));
    let current     = 0;

    function openLightbox(idx) {
      current = idx;
      lbImg.src = items[current].src;
      lbImg.alt = items[current].alt;
      lbCounter.textContent = `${current + 1} / ${items.length}`;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }

    items.forEach((img, i) => {
      img.parentElement.addEventListener('click', () => openLightbox(i));
    });

    lbClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

    lbPrev.addEventListener('click', () => {
      current = (current - 1 + items.length) % items.length;
      lbImg.src = items[current].src;
      lbCounter.textContent = `${current + 1} / ${items.length}`;
    });

    lbNext.addEventListener('click', () => {
      current = (current + 1) % items.length;
      lbImg.src = items[current].src;
      lbCounter.textContent = `${current + 1} / ${items.length}`;
    });

    document.addEventListener('keydown', e => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape')      closeLightbox();
      if (e.key === 'ArrowLeft')   lbPrev.click();
      if (e.key === 'ArrowRight')  lbNext.click();
    });

    // Add cursor pointer to gallery items
    items.forEach(img => img.parentElement.style.cursor = 'pointer');
  }

  // ── Smooth anchor scroll ──────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

});

/* ─── Supabase foto helper ───────────────────
   Gebruik deze functie om foto-URL's te bouwen:

   const SUPABASE_URL = 'https://jouw-project.supabase.co';
   const BUCKET = 'gallery';

   function imgUrl(path) {
     return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${path}`;
   }

   // Gebruik:
   document.querySelector('.hero-frame-img img').src = imgUrl('hero/distillery.jpg');
   document.querySelector('.exh-card:nth-child(1) .exh-card-img').style.backgroundImage = `url(${imgUrl('exhibitions/distillery.jpg')})`;
─────────────────────────────────────────── */
