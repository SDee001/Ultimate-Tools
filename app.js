// ─── Shared helpers ───────────────────────────────────────────────────────────

function getDomain(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); }
  catch { return ''; }
}

function getFavicon(url) {
  return `https://www.google.com/s2/favicons?sz=64&domain=${getDomain(url)}`;
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const FALLBACK_SVG = `
  <svg class="fav-svg" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.3"/>
    <rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.3"/>
    <rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.3"/>
    <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.3"/>
  </svg>`;

const ARROW_SVG = `
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

const CHEVRON_SVG = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M9 18l6-6-6-6"/>
  </svg>`;

// ─── Group tools by category ──────────────────────────────────────────────────

const grouped = {};
for (const cat of CATEGORY_ORDER) grouped[cat] = [];
for (const tool of TOOLS) {
  if (grouped[tool.cat]) grouped[tool.cat].push(tool);
}

// ─── Detect mobile ────────────────────────────────────────────────────────────

function isMobile() {
  return window.innerWidth <= 700;
}

// ════════════════════════════════════════════════════════════════════════════
// DESKTOP LOGIC
// ════════════════════════════════════════════════════════════════════════════

function initDesktop() {

  // ── Header scroll shadow ──────────────────────────────────────────────────
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 4);
  }, { passive: true });

  // ── Category nav (marquee) ────────────────────────────────────────────────
  const catNav = document.getElementById('cat-nav');

  // Build one set of buttons
  const cats = CATEGORY_ORDER.filter(cat => grouped[cat] && grouped[cat].length > 0);

  function buildNavSet() {
    const frag = document.createDocumentFragment();
    for (const cat of cats) {
      const btn = document.createElement('button');
      btn.className = 'cat-nav-btn';
      btn.textContent = cat;
      btn.dataset.cat = cat;
      btn.addEventListener('click', () => {
        const section = document.getElementById('cat-' + slugify(cat));
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      frag.appendChild(btn);

      const sep = document.createElement('span');
      sep.className = 'cat-nav-sep';
      sep.textContent = '·';
      frag.appendChild(sep);
    }
    return frag;
  }

  // Create a track and duplicate content for seamless loop
  const track = document.createElement('div');
  track.className = 'cat-nav-track';
  track.appendChild(buildNavSet());
  track.appendChild(buildNavSet()); // duplicate for seamless scroll
  catNav.appendChild(track);

  // ── Render tool cards ─────────────────────────────────────────────────────
  const main = document.getElementById('main');
  let totalTools = 0;
  let totalCats  = 0;

  for (const cat of CATEGORY_ORDER) {
    const tools = grouped[cat];
    if (!tools || tools.length === 0) continue;

    totalCats++;
    totalTools += tools.length;

    const section = document.createElement('section');
    section.className = 'cat-section';
    section.id = 'cat-' + slugify(cat);
    section.dataset.cat = cat.toLowerCase();

    const head = document.createElement('div');
    head.className = 'cat-head';
    head.innerHTML = `<h2 class="cat-title">${cat}</h2><span class="cat-badge">${tools.length}</span>`;
    section.appendChild(head);

    const grid = document.createElement('div');
    grid.className = 'tool-grid';

    for (const tool of tools) {
      const card = document.createElement('div');
      card.className = 'tool-card';
      if (tool.recommended)    card.classList.add('is-recommended');
      if (tool.notRecommended) card.classList.add('is-not-recommended');

      card.dataset.name = tool.name.toLowerCase();
      card.dataset.desc = tool.desc.toLowerCase();
      card.dataset.cat  = cat.toLowerCase();
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', tool.name);

      // Badge HTML
      let badgeHtml = '';
      if (tool.recommended)    badgeHtml = `<span class="tool-badge badge-star">★ Pick</span>`;
      if (tool.notRecommended) badgeHtml = `<span class="tool-badge badge-ban">⊘ Skip</span>`;

      card.innerHTML = `
        ${badgeHtml}
        <div class="tool-fav">
          <img src="${getFavicon(tool.url)}" alt="${tool.name} icon" loading="lazy"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
          <div class="fav-fallback" style="display:none">${FALLBACK_SVG}</div>
        </div>
        <div class="tool-body">
          <div class="tool-name">${tool.name}</div>
          <div class="tool-desc">${tool.desc.split('.')[0]}.</div>
        </div>
        <span class="tool-arrow">${ARROW_SVG}</span>
      `;

      // Click opens overlay
      card.addEventListener('click', () => openOverlay(tool, cat));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openOverlay(tool, cat); }
      });

      grid.appendChild(card);
    }

    section.appendChild(grid);
    main.appendChild(section);
  }

  // Stats
  document.getElementById('stat-tools').textContent = totalTools;
  document.getElementById('stat-cats').textContent  = totalCats;

  // ── Search ────────────────────────────────────────────────────────────────
  const searchInput = document.getElementById('search');
  const noResults   = document.getElementById('no-results');
  const queryLabel  = document.getElementById('query-label');

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    let anyVisible = false;

    document.querySelectorAll('.cat-section').forEach(section => {
      let sectionHasMatch = false;
      section.querySelectorAll('.tool-card').forEach(card => {
        const matches = !q
          || card.dataset.name.includes(q)
          || card.dataset.desc.includes(q)
          || card.dataset.cat.includes(q);
        card.classList.toggle('hidden', !matches);
        if (matches) sectionHasMatch = true;
      });
      section.classList.toggle('hidden', !sectionHasMatch);
      if (sectionHasMatch) anyVisible = true;
    });

    if (!anyVisible && q) {
      queryLabel.textContent = q;
      noResults.classList.add('visible');
    } else {
      noResults.classList.remove('visible');
    }
  });

  // ── Active nav on scroll ──────────────────────────────────────────────────
  const navBtns     = track.querySelectorAll('.cat-nav-btn');
  const catSections = document.querySelectorAll('.cat-section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cat = entry.target.dataset.cat.toLowerCase();
        navBtns.forEach(btn => {
          btn.classList.toggle('active', btn.dataset.cat.toLowerCase() === cat);
        });
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });

  catSections.forEach(s => observer.observe(s));
}

// ── Overlay ───────────────────────────────────────────────────────────────────

const overlay        = document.getElementById('overlay');
const overlayBackdrop = document.getElementById('overlay-backdrop');
const overlayPanel   = document.getElementById('overlay-panel');
const overlayClose   = document.getElementById('overlay-close');
const overlayFav     = document.getElementById('overlay-fav');
const overlayBadge   = document.getElementById('overlay-badge-wrap');
const overlayName    = document.getElementById('overlay-name');
const overlayCat     = document.getElementById('overlay-cat');
const overlayDesc    = document.getElementById('overlay-desc');
const overlayBtn     = document.getElementById('overlay-btn');

function openOverlay(tool, cat) {
  // Favicon
  const img = document.createElement('img');
  img.src = getFavicon(tool.url);
  img.alt = tool.name;
  img.width = 28; img.height = 28;
  const fb = document.createElement('div');
  fb.className = 'fav-fallback';
  fb.style.display = 'none';
  fb.innerHTML = FALLBACK_SVG;
  img.onerror = () => { img.style.display = 'none'; fb.style.display = 'flex'; };
  overlayFav.innerHTML = '';
  overlayFav.appendChild(img);
  overlayFav.appendChild(fb);

  // Badge
  overlayBadge.innerHTML = '';
  if (tool.recommended) {
    overlayBadge.innerHTML = `<span class="overlay-badge-full star">★ Recommended pick</span>`;
  } else if (tool.notRecommended) {
    overlayBadge.innerHTML = `<span class="overlay-badge-full ban">⊘ Not recommended</span>`;
  }

  overlayName.textContent = tool.name;
  overlayCat.textContent  = cat.toUpperCase();
  overlayDesc.textContent = tool.desc;
  overlayBtn.href = tool.url;

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  overlayClose.focus();
}

function closeOverlay() {
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
}

overlayClose.addEventListener('click', closeOverlay);
overlayBackdrop.addEventListener('click', closeOverlay);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeOverlay();
});

// Prevent overlay-btn click from also closing (it's inside panel)
overlayBtn.addEventListener('click', e => e.stopPropagation());


// ════════════════════════════════════════════════════════════════════════════
// MOBILE LOGIC
// ════════════════════════════════════════════════════════════════════════════

function initMobile() {

  const picker    = document.getElementById('mob-picker');
  const reel      = document.getElementById('mob-reel');
  const catGrid   = document.getElementById('mob-cat-grid');
  const backBtn   = document.getElementById('mob-back');
  const reelCat   = document.getElementById('mob-reel-cat');
  const reelCount = document.getElementById('mob-reel-counter');
  const reelTrack = document.getElementById('mob-reel-track');
  const reelHint  = document.getElementById('mob-reel-hint');

  // Build category buttons
  let mobCatIndex = 0;
  for (const cat of CATEGORY_ORDER) {
    const tools = grouped[cat];
    if (!tools || tools.length === 0) continue;

    const btn = document.createElement('button');
    btn.className = 'mob-cat-btn';
    btn.style.animationDelay = `${mobCatIndex * 0.04}s`;
    mobCatIndex++;
    btn.innerHTML = `
      <div class="mob-cat-btn-left">
        <span class="mob-cat-label">${cat}</span>
        <span class="mob-cat-count">${tools.length}</span>
      </div>
      <span class="mob-cat-chevron">${CHEVRON_SVG}</span>
    `;
    btn.addEventListener('click', () => openReel(cat, tools));
    catGrid.appendChild(btn);
  }

  // Push a history entry when the picker is the base state
  // so the very first back gesture has somewhere to return to.
  history.replaceState({ view: 'picker' }, '');

  // Listen for browser / gesture back
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.view === 'picker') {
      reel.classList.remove('active');
      picker.classList.add('active');
      reelTrack.innerHTML = '';
    }
  });

  // Open reel for a category
  function openReel(cat, tools) {
    reelCat.textContent = cat;
    reelTrack.innerHTML = '';

    tools.forEach((tool, i) => {
      const slide = document.createElement('div');
      slide.className = 'mob-reel-slide';

      const card = document.createElement('div');
      card.className = 'mob-reel-card';
      if (tool.recommended)    card.classList.add('is-recommended');
      if (tool.notRecommended) card.classList.add('is-not-recommended');

      // Badge
      let badgeHtml = '';
      if (tool.recommended)    badgeHtml = `<span class="overlay-badge-full star">★ Recommended</span>`;
      if (tool.notRecommended) badgeHtml = `<span class="overlay-badge-full ban">⊘ Not recommended</span>`;

      card.innerHTML = `
        <div class="mob-reel-card-badge">${badgeHtml}</div>
        <div class="mob-card-fav">
          <img src="${getFavicon(tool.url)}" alt="${tool.name}" loading="lazy"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
          <div class="fav-fallback" style="display:none">${FALLBACK_SVG}</div>
        </div>
        <div class="mob-card-name">${tool.name}</div>
        <div class="mob-card-cat">${cat}</div>
        <div class="mob-card-desc">${tool.desc}</div>
        <a class="mob-card-open" href="${tool.url}" target="_blank" rel="noopener noreferrer">
          Open site ${ARROW_SVG}
        </a>
      `;

      slide.appendChild(card);
      reelTrack.appendChild(slide);
    });

    // Counter update
    reelCount.textContent = `1 / ${tools.length}`;
    reelHint.classList.remove('hidden');

    // Scroll counter listener
    let hintHidden = false;
    reelTrack.addEventListener('scroll', () => {
      const index = Math.round(reelTrack.scrollTop / window.innerHeight);
      reelCount.textContent = `${index + 1} / ${tools.length}`;

      // Hide hint after first scroll
      if (!hintHidden && reelTrack.scrollTop > 30) {
        reelHint.classList.add('hidden');
        hintHidden = true;
      }
    }, { passive: true });

    // Show reel screen and push a history entry so the
    // back gesture / button returns here rather than leaving the page.
    history.pushState({ view: 'reel', cat }, '');
    picker.classList.remove('active');
    reel.classList.add('active');
    reelTrack.scrollTop = 0;
  }

  // Back button — mirrors what popstate does
  backBtn.addEventListener('click', () => {
    history.back(); // triggers popstate → handler above cleans up
  });
}


// ════════════════════════════════════════════════════════════════════════════
// INIT — run the right layout
// ════════════════════════════════════════════════════════════════════════════

if (isMobile()) {
  initMobile();
} else {
  initDesktop();
}

// Handle resize (e.g., orientation change)
let lastMobile = isMobile();
window.addEventListener('resize', () => {
  const nowMobile = isMobile();
  if (nowMobile !== lastMobile) {
    lastMobile = nowMobile;
    location.reload();
  }
});
