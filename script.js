function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);

  if (target) {
    target.classList.add('active');
  } else {
    document.getElementById('page-home')?.classList.add('active');
    page = 'home';
  }

  document.querySelectorAll('[data-nav]').forEach(link => {
    link.classList.toggle('active', link.dataset.nav === page);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleHash() {
  const hash = window.location.hash.replace('#', '') || 'home';
  navigate(hash);
}

window.addEventListener('hashchange', handleHash);

function registerFor(program) {
  window.location.hash = '#contact';
  setTimeout(() => {
    const select = document.getElementById('fprog');
    if (select) select.value = program;
  }, 50);
}

document.addEventListener('DOMContentLoaded', () => {
  handleHash();

  document.querySelectorAll('.day-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  const form = document.getElementById('reg-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.classList.add('hidden');
      document.getElementById('form-success')?.classList.remove('hidden');
    });
  }

  if (window.lucide) {
    lucide.createIcons();
  }
});