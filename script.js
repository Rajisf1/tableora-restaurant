document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const hamburger = document.querySelector('.hamburger');
  const navlinks = document.querySelector('.navlinks');
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.food-panel');
  const form = document.getElementById('bookingForm');
  const toast = document.getElementById('toast');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  const updateHeader = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 30);
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  hamburger?.addEventListener('click', () => {
    const open = navlinks?.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  navlinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navlinks.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
    });
  });

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(item => item.classList.toggle('active', item === tab));
      panels.forEach(panel => panel.classList.toggle('active', panel.id === target));
    });
  });

  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!toast) return;
    toast.classList.add('show');
    form.reset();
    window.setTimeout(() => toast.classList.remove('show'), 3500);
  });
});
