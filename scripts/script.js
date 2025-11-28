const scrollSpy = new bootstrap.ScrollSpy(document.body, {target: '#navbar-main'});

function filterProjects() {
  let projectFilter = document.getElementById("projectFilter");
  let projectCards = document.getElementsByClassName("project-card");

  for (let i = 0; i < projectCards.length; i++) {
    let year = projectCards[i].getAttribute("data-year");

    if (projectFilter.value == "all" || projectFilter.value == year) {
      projectCards[i].classList.remove("d-none");
    } else {
      projectCards[i].classList.add("d-none")
    }
  }
}

if (document.getElementById("projectFilter")) {
  document.getElementById("projectFilter").addEventListener("change", filterProjects);
}

function messageSent(event) {
  event.preventDefault();

  let success = document.getElementById("contactSuccess");
  success.classList.remove("d-none");
  success.classList.add("show");

  let contactForm = document.getElementById("contactForm");
  contactForm.reset();
}

if (document.getElementById("contactForm")) {
  document.getElementById("contactForm").addEventListener("submit", messageSent);
}
