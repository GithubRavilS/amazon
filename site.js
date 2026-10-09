const tabs = document.querySelectorAll('[data-route]');
tabs.forEach(button => button.addEventListener('click', () => {
  document.querySelector('.route-frame').dataset.filter = button.dataset.route;
  tabs.forEach(tab => tab.setAttribute('aria-pressed', String(tab === button)));
}));
const navLinks = [...document.querySelectorAll('.nav nav a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('active', link.hash === '#' + entry.target.id));
    });
  }, { rootMargin: '-15% 0px -60% 0px' });
  document.querySelectorAll('.chapter').forEach(section => observer.observe(section));
}
document.getElementById('print').addEventListener('click', () => window.print());
window.addEventListener('beforeprint', () => {
  document.querySelectorAll('details').forEach(detail => { detail.dataset.wasOpen = String(detail.open); detail.open = true; });
});
window.addEventListener('afterprint', () => {
  document.querySelectorAll('details').forEach(detail => { detail.open = detail.dataset.wasOpen === 'true'; });
});
