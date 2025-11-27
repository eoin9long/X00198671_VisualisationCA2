const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-main',
  offset: 80
});

const projectFilter = document.getElementById('projectFilter');
const projectCards = document.querySelectorAll('.project-card');

if (projectFilter) {
  projectFilter.addEventListener('change', function () {
    const value = projectFilter.value; // "all", "2", "3", "4"

    projectCards.forEach(card => {
      const year = card.getAttribute('data-year');
      if (value === 'all' || value === year) {
        card.classList.remove('d-none');
      } else {
        card.classList.add('d-none');
      }
    });
  });
}

const contactForm = document.getElementById('contactForm');
const contactSuccess = document.getElementById('contactSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();


    contactSuccess.classList.remove('d-none');
    contactSuccess.classList.add('show');

    contactForm.reset();
  });
}

const yearSpan = document.getElementById('currentYear');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
