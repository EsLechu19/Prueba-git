const nav = document.getElementById('nav');
const energyPulse = document.getElementById('energyPulse');

function handleScroll() {
  const scrollY = window.scrollY;
  
  if (scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  if (scrollY > window.innerHeight * 0.6) {
    energyPulse.classList.add('visible');
  } else {
    energyPulse.classList.remove('visible');
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileClose = document.getElementById('mobileClose');

function openMobile() {
  mobileMenu.classList.add('open');
  mobileOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobile() {
  mobileMenu.classList.remove('open');
  mobileOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

mobileToggle.addEventListener('click', openMobile);
mobileClose.addEventListener('click', closeMobile);
mobileOverlay.addEventListener('click', closeMobile);

document.querySelectorAll('.mobile-menu-links a').forEach(link => {
  link.addEventListener('click', closeMobile);
});

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

const statNumbers = document.querySelectorAll('.stat-number');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'), 10);
      let current = 0;
      const increment = Math.max(1, Math.floor(target / 60));
      const duration = 2000;
      const stepTime = Math.floor(duration / target);

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.textContent = target + (target === 50 ? 'K' : '');
          clearInterval(timer);
          return;
        }
        el.textContent = current + (target === 50 ? 'K' : '');
      }, stepTime);

      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

statNumbers.forEach(el => counterObserver.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
    closeMobile();
  }
});
