/* ═══════════════════════════════════════════
   CASPER BEKAERT GALLERY — werk-popup
   Opent een werk in een overlay i.p.v. een aparte pagina.
   Zonder JavaScript blijft de link naar de werkpagina werken.
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  const cards = Array.from(document.querySelectorAll('.work-card[data-full]'));
  if (!cards.length) return;

  const artist = ((document.querySelector('.page-hero-title') || {}).textContent || '').replace(/\s+/g, ' ').trim();
  const labelEl = document.querySelector('.artist-born') || document.querySelector('.page-hero-label');
  // "Painting · b. 2000" / "Schilderkunst · geb. 2000" / "Peinture · né 2000":
  // the last part carries the birth year in whatever language is showing.
  function bornLine() {
    if (!labelEl) return '';
    const parts = labelEl.textContent.split('·').map(x => x.trim());
    const last = parts[parts.length - 1];
    return /\d{4}/.test(last) ? last : '';
  }
  const lang = () => (window.t ? null : null); // i18n.js levert t() globaal
  const tr = (key, fallback) => (typeof t === 'function' ? t(key) : fallback);

  // ── overlay opbouwen ──
  const box = document.createElement('div');
  box.className = 'lb';
  box.setAttribute('aria-hidden', 'true');
  box.innerHTML =
    '<button class="lb-close" aria-label="Sluiten">&#10005;</button>' +
    '<button class="lb-nav lb-prev" aria-label="Vorige">&#8249;</button>' +
    '<button class="lb-nav lb-next" aria-label="Volgende">&#8250;</button>' +
    '<div class="lb-inner">' +
      '<div class="lb-info">' +
        '<p class="lb-artist"><span class="lb-name"></span><span class="lb-born"></span></p>' +
        '<h2 class="lb-title"></h2>' +
        '<div class="lb-lines"></div>' +
        '<a class="lb-enquire" href="#"></a>' +
      '</div>' +
      '<div class="lb-image"><img alt=""></div>' +
    '</div>';
  document.body.appendChild(box);

  const els = {
    close: box.querySelector('.lb-close'),
    prev:  box.querySelector('.lb-prev'),
    next:  box.querySelector('.lb-next'),
    inner: box.querySelector('.lb-inner'),
    artist: box.querySelector('.lb-artist'),
    name:  box.querySelector('.lb-name'),
    born:  box.querySelector('.lb-born'),
    title: box.querySelector('.lb-title'),
    lines: box.querySelector('.lb-lines'),
    enq:   box.querySelector('.lb-enquire'),
    img:   box.querySelector('.lb-image img'),
  };

  let index = -1;
  let lastFocus = null;

  function line(value, href) {
    const p = document.createElement('p');
    p.className = 'lb-line';
    if (href) {
      const a = document.createElement('a');
      a.href = href;
      a.textContent = value;
      p.appendChild(a);
    } else {
      p.textContent = value;
    }
    els.lines.appendChild(p);
  }

  function render(i) {
    const c = cards[i];
    const d = c.dataset;
    index = i;

    els.name.textContent = artist;
    els.born.textContent = bornLine();
    els.title.textContent = d.title + (d.year ? ', ' + d.year : '');

    els.lines.textContent = '';
    if (d.materials) line(d.materials);
    if (d.dims)      line(d.dims);
    if (d.exh)       line(d.exh, d.exhhref);

    // Enquiring only makes sense for work that is still for sale
    els.enq.hidden = d.pricekind === 'sold';
    els.enq.textContent = tr('aw.enquire', 'Enquire');
    els.enq.href = '#';

    els.img.src = d.full;
    els.img.alt = d.title;

    const many = cards.length > 1;
    els.prev.hidden = !many;
    els.next.hidden = !many;
    els.inner.scrollTop = 0;
  }

  function open(i, trigger) {
    lastFocus = trigger || document.activeElement;
    render(i);
    box.classList.add('lb--open');
    box.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lb-locked');
    els.inner.setAttribute('tabindex', '-1');
    els.inner.focus({ preventScroll: true });
  }

  function close() {
    box.classList.remove('lb--open');
    box.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lb-locked');
    els.img.src = '';
    if (lastFocus) lastFocus.focus();
  }

  const step = n => render((index + n + cards.length) % cards.length);

  cards.forEach((c, i) => {
    const link = c.querySelector('.work-card-link') || c;
    link.addEventListener('click', e => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return; // nieuw tabblad blijft werken
      e.preventDefault();
      open(i, link);
    });
  });


  /* ── aanvraagformulier ── */
  const SUPA_URL = 'https://wojavtiwvveynjbkwotd.supabase.co';
  const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvamF2dGl3dnZleW5qYmt3b3RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5Mjk1NjksImV4cCI6MjA5NTUwNTU2OX0.9LsqSstJPEvwn3BHR6drEaf3PP_ZR3v5jMvdSkc8jO8';

  const eq = document.createElement('div');
  eq.className = 'eq';
  eq.setAttribute('aria-hidden', 'true');
  eq.innerHTML =
    '<div class="eq-sheet" role="dialog" aria-modal="true">' +
      '<button class="eq-close" aria-label="Sluiten">&#10005;</button>' +
      '<h2 class="eq-title"></h2>' +
      '<div class="eq-work"><img alt=""><span></span></div>' +
      '<form class="eq-form" novalidate>' +
        '<label><span class="eq-label"></span><input type="text" name="name" required autocomplete="name"></label>' +
        '<label><span class="eq-label"></span><input type="email" name="email" required autocomplete="email"></label>' +
        '<label><span class="eq-label"></span><input type="tel" name="phone" autocomplete="tel"></label>' +
        '<label><span class="eq-label"></span><textarea name="message" rows="5"></textarea></label>' +
        '<div class="eq-radio"><span class="eq-label"></span><div class="eq-choices">' +
          '<label><input type="radio" name="newsletter" value="yes"><span></span></label>' +
          '<label><input type="radio" name="newsletter" value="no" checked><span></span></label>' +
        '</div></div>' +
        '<div class="eq-actions"><button type="submit" class="eq-send"></button></div>' +
      '</form>' +
      '<p class="eq-note eq-required"></p>' +
      '<p class="eq-note eq-privacy"></p>' +
      '<p class="eq-result" hidden></p>' +
    '</div>';
  document.body.appendChild(eq);

  const eqEls = {
    sheet: eq.querySelector('.eq-sheet'),
    close: eq.querySelector('.eq-close'),
    title: eq.querySelector('.eq-title'),
    img:   eq.querySelector('.eq-work img'),
    work:  eq.querySelector('.eq-work span'),
    form:  eq.querySelector('.eq-form'),
    labels: eq.querySelectorAll('.eq-label'),
    choices: eq.querySelectorAll('.eq-choices span'),
    send:  eq.querySelector('.eq-send'),
    req:   eq.querySelector('.eq-required'),
    priv:  eq.querySelector('.eq-privacy'),
    result: eq.querySelector('.eq-result'),
  };

  function openEnquiry() {
    const d = cards[index].dataset;
    eqEls.title.textContent = tr('eq.title', 'Enquiry form');
    eqEls.img.src = d.full;
    eqEls.img.alt = d.title;
    eqEls.work.textContent = d.title + (d.year ? ', ' + d.year : '');
    const names = ['eq.name', 'eq.email', 'eq.phone', 'eq.message', 'eq.newsletter'];
    const marks = [' *', ' *', '', '', ' *'];
    eqEls.labels.forEach((el, i) => { el.textContent = tr(names[i], names[i]) + marks[i]; });
    eqEls.choices[0].textContent = tr('eq.yes', 'Yes');
    eqEls.choices[1].textContent = tr('eq.no', 'No');
    eqEls.send.textContent = tr('eq.send', 'Send enquiry');
    eqEls.req.textContent = tr('eq.required', '* required fields');
    eqEls.priv.textContent = tr('eq.privacy', '');
    eqEls.result.hidden = true;
    eqEls.form.hidden = false;
    eqEls.form.reset();
    eq.classList.add('eq--open');
    eq.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lb-locked');
    eqEls.form.querySelector('input[name="name"]').focus();
  }

  function closeEnquiry() {
    eq.classList.remove('eq--open');
    eq.setAttribute('aria-hidden', 'true');
    if (!box.classList.contains('lb--open')) document.body.classList.remove('lb-locked');
    els.enq.focus();
  }

  eqEls.close.addEventListener('click', closeEnquiry);
  eq.addEventListener('click', e => { if (e.target === eq) closeEnquiry(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && eq.classList.contains('eq--open')) { e.stopPropagation(); closeEnquiry(); }
  }, true);

  eqEls.form.addEventListener('submit', async e => {
    e.preventDefault();
    const f = eqEls.form.elements;
    const name = f.name.value.trim(), email = f.email.value.trim();
    if (!name || !email || !email.includes('@')) {
      (!name ? f.name : f.email).focus();
      return;
    }
    const d = cards[index].dataset;
    const link = cards[index].querySelector('.work-card-link');
    eqEls.send.disabled = true;
    try {
      const res = await fetch(SUPA_URL + '/rest/v1/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': SUPA_KEY,
                   'Authorization': 'Bearer ' + SUPA_KEY, 'Prefer': 'return=minimal' },
        body: JSON.stringify({
          work_page: link ? link.getAttribute('href') : '',
          work_title: d.title + (d.year ? ', ' + d.year : ''),
          artist: els.artist.textContent,
          name: name, email: email,
          phone: f.phone.value.trim() || null,
          message: f.message.value.trim() || null,
          newsletter: f.newsletter.value === 'yes',
          lang: (localStorage.getItem('cbg-lang') || 'en'),
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      eqEls.form.hidden = true;
      eqEls.result.textContent = tr('eq.thanks', 'Thank you.');
      eqEls.result.className = 'eq-result';
    } catch (err) {
      eqEls.result.textContent = tr('eq.error', 'Could not send.');
      eqEls.result.className = 'eq-result eq-result--error';
    }
    eqEls.result.hidden = false;
    eqEls.send.disabled = false;
  });

  els.enq.addEventListener('click', e => { e.preventDefault(); openEnquiry(); });

  els.close.addEventListener('click', close);
  els.prev.addEventListener('click', () => step(-1));
  els.next.addEventListener('click', () => step(1));
  box.addEventListener('click', e => { if (e.target === box || e.target === els.inner) close(); });
  document.addEventListener('keydown', e => {
    if (!box.classList.contains('lb--open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
  });

  // vegen op een telefoon
  let x0 = null;
  box.addEventListener('touchstart', e => { x0 = e.changedTouches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 60) step(dx < 0 ? 1 : -1);
    x0 = null;
  }, { passive: true });
});
