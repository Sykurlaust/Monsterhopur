/* effect.js
   - Particles (your original code, cleaned a hair)
   - Iridescent nav buttons: one-time "shine" + active state
*/
'use strict';

/* =========================
   1) PARTICLES (your code)
   ========================= */
let particlesContainer = null;
const particleCount = 80;

function initParticles() {
  particlesContainer = document.getElementById('particles-container');
  if (!particlesContainer) return;

  for (let i = 0; i < particleCount; i++) createParticle();

  // Mouse interaction (do NOT overwrite sphere transform)
  document.addEventListener('mousemove', (e) => {
    if (!particlesContainer) return;

    const mouseX = (e.clientX / window.innerWidth) * 100;
    const mouseY = (e.clientY / window.innerHeight) * 100;

    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${mouseX}%`;
    particle.style.top = `${mouseY}%`;
    particle.style.opacity = '0.6';
    particlesContainer.appendChild(particle);

    setTimeout(() => {
      particle.style.transition = 'all 2s ease-out';
      particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
      particle.style.top  = `${mouseY + (Math.random() * 10 - 5)}%`;
      particle.style.opacity = '0';
      setTimeout(() => particle.remove(), 2000);
    }, 10);
  });
}

function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  const size = Math.random() * 3 + 1;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  resetParticle(particle);
  particlesContainer.appendChild(particle);
  animateParticle(particle);
}

function resetParticle(particle) {
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  particle.style.left = `${posX}%`;
  particle.style.top = `${posY}%`;
  particle.style.opacity = '0';
  return { x: posX, y: posY };
}

function animateParticle(particle) {
  const pos = resetParticle(particle);
  const duration = Math.random() * 10 + 10;
  const delay = Math.random() * 5;

  setTimeout(() => {
    particle.style.transition = `all ${duration}s linear`;
    particle.style.opacity = (Math.random() * 0.3 + 0.1).toString();
    const moveX = pos.x + (Math.random() * 20 - 10);
    const moveY = pos.y - Math.random() * 30;
    particle.style.left = `${moveX}%`;
    particle.style.top  = `${moveY}%`;
    setTimeout(() => animateParticle(particle), duration * 1000);
  }, delay * 1000);
}

/* ==========================================
   2) NAV BUTTONS (shine once + active state)
   ========================================== */
function initNavButtons() {
  // Select your two right-side nav links (make sure they have class="iridescent nav-btn")
  const navBtns = document.querySelectorAll('.nav .button-group a.iridescent');
  if (!navBtns.length) return;

  // One-time "shine" effect on load
  navBtns.forEach((btn, i) => {
    setTimeout(() => btn.classList.add('shine'), 600 + i * 150);
    setTimeout(() => btn.classList.remove('shine'), 2800 + i * 150);
  });

  // Determine current file name (index.html default)
  const url = new URL(window.location.href);
  const current = (url.pathname.split('/').pop() || 'index.html').toLowerCase();

  // Mark the matching link as active, fallback for homepage
  let matched = false;
  navBtns.forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === current) {
      a.classList.add('is-active');
      matched = true;
    } else {
      a.classList.remove('is-active');
    }
  });

  // On the root/index, default to Ultra Energy as active
  if (!matched && (current === 'index.html' || current === '')) {
    const def = document.querySelector('.nav .button-group a[href="preorder.html"].iridescent');
    if (def) def.classList.add('is-active');
  }
}

/* =========================
   3) BOOTSTRAP
   ========================= */
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initNavButtons();
});
