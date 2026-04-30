// ============================================================
//  A.O.T & STORE — Loading Screen
//  loader.js
// ============================================================

(function () {
  'use strict';

  // ── CONFIG ────────────────────────────────────────────────
  const TICK_COUNT = 20;
  const MILESTONES = [25, 50, 75, 100]; // % checkpoints

  /**
   * Loading phases: { end (%), dur (ms) }
   * Adjust durations to match your real asset loading time.
   * To tie into actual load events, call setTarget() from your
   * fetch/load callbacks instead of relying on the simulation.
   */
  const PHASES = [
    { end: 15,  dur: 500 },   // quick init
    { end: 35,  dur: 900 },   // fetch books
    { end: 55,  dur: 700 },   // assets
    { end: 72,  dur: 600 },   // catalog
    { end: 88,  dur: 500 },   // finalize
    { end: 95,  dur: 400 },   // almost there
    { end: 100, dur: 600 },   // complete
  ];

  const MESSAGES = [
    'Initializing the archive…',
    'Dusting off ancient tomes…',
    'Cataloguing rare manuscripts…',
    'Fetching the book collection…',
    'Polishing the golden shelves…',
    'Mapping the library halls…',
    'Loading enchanted volumes…',
    'Almost there — final scroll…',
    'The gates are opening…',
  ];

  // ── ELEMENTS ──────────────────────────────────────────────
  const loader     = document.getElementById('loader');
  const bar        = document.getElementById('bar');
  const barHead    = document.getElementById('barHead');
  const pctEl      = document.getElementById('pct');
  const statusEl   = document.getElementById('statusText');
  const milestones = document.getElementById('milestones');
  const ticks      = document.getElementById('ticks');
  const subA       = document.getElementById('subA');
  const subB       = document.getElementById('subB');
  const subC       = document.getElementById('subC');

  // ── BUILD TICKS ───────────────────────────────────────────
  for (let i = 1; i < TICK_COUNT; i++) {
    const tick = document.createElement('div');
    tick.className = 'tick';
    tick.style.left = `${(i / TICK_COUNT) * 100}%`;
    ticks.appendChild(tick);
  }

  // ── BUILD MILESTONE DOTS ──────────────────────────────────
  const milestoneDots = MILESTONES.map(val => {
    const dot = document.createElement('div');
    dot.className = 'milestone';
    dot.style.left = `${val}%`;
    milestones.appendChild(dot);
    return { el: dot, val };
  });

  // ── STATE ─────────────────────────────────────────────────
  let progress   = 0;
  let target     = 0;
  let rafId      = null;
  let msgIndex   = 0;
  let msgTimer   = null;
  let phaseTimer = null;
  let phaseIdx   = 0;

  // ── RENDER ────────────────────────────────────────────────
  function render(p) {
    bar.style.width  = `${p}%`;
    pctEl.textContent = `${Math.round(p)}%`;

    // sub bars — each slightly offset for realism
    subA.style.width = `${Math.min(100, p * 1.05)}%`;
    subB.style.width = `${Math.min(100, p * 0.92)}%`;
    subC.style.width = `${Math.min(100, p * 0.98)}%`;

    // light milestone dots
    milestoneDots.forEach(({ el, val }) => {
      if (p >= val) el.classList.add('lit');
    });

    // hide head at 100%
    if (p >= 99.5) barHead.style.opacity = '0';
  }

  // ── SMOOTH ANIMATION LOOP ─────────────────────────────────
  function animate() {
    const diff = target - progress;
    if (Math.abs(diff) > 0.05) {
      progress += diff * 0.06;
      render(progress);
      rafId = requestAnimationFrame(animate);
    } else {
      progress = target;
      render(progress);
      rafId = null;
    }
  }

  /**
   * setTarget(value)
   * Call this from your own load events to drive the bar.
   * value: 0–100
   */
  function setTarget(value) {
    target = Math.min(100, Math.max(0, value));
    if (!rafId) rafId = requestAnimationFrame(animate);
  }

  // ── MESSAGE ROTATION ──────────────────────────────────────
  function rotateMessage() {
    statusEl.style.opacity = '0';
    setTimeout(() => {
      statusEl.textContent = MESSAGES[msgIndex % MESSAGES.length];
      statusEl.style.opacity = '1';
      msgIndex++;
    }, 280);
  }

  // ── PHASE RUNNER (simulation) ─────────────────────────────
  function runPhase() {
    if (phaseIdx >= PHASES.length) {
      onComplete();
      return;
    }
    const { end, dur } = PHASES[phaseIdx++];
    setTarget(end);
    phaseTimer = setTimeout(runPhase, dur);
  }

  // ── COMPLETION ────────────────────────────────────────────
  function onComplete() {
    clearInterval(msgTimer);

    statusEl.style.opacity = '0';
    setTimeout(() => {
      statusEl.textContent  = 'Welcome to the Archive ✦';
      statusEl.style.opacity = '1';
      pctEl.style.color      = '#e8c87a';
    }, 300);

    setTimeout(() => {
      loader.classList.add('done');

      // ── REDIRECT ──────────────────────────────────────────
      // Uncomment one of the options below:

      // Option A — redirect after fade-out
      // setTimeout(() => { window.location.href = 'index.html'; }, 800);

      // Option B — just hide the loader (SPA / same-page use)
      setTimeout(() => {
        loader.style.display = 'none';
        document.body.style.overflow = '';
      }, 800);
    }, 1000);
  }

  // ── INIT ─────────────────────────────────────────────────
  function init() {
    document.body.style.overflow = 'hidden'; // lock scroll while loading

    // start message rotation
    msgTimer = setInterval(rotateMessage, 900);

    // start phase simulation after initial animations settle
    setTimeout(runPhase, 600);
  }

  // ── PUBLIC API ────────────────────────────────────────────
  // Expose setTarget so you can drive it from real load events:
  //   window.AOTLoader.setTarget(60); // e.g. after fetching API data
  window.AOTLoader = { setTarget };

  // ── CLEANUP ───────────────────────────────────────────────
  window.addEventListener('unload', () => {
    clearInterval(msgTimer);
    clearTimeout(phaseTimer);
    if (rafId) cancelAnimationFrame(rafId);
  });

  // kick off
  init();

})();
