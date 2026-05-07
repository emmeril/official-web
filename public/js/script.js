document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".nav-link, .navbar-brand").forEach((link) => {
    link.addEventListener("click", () => {
      if (nav && nav.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });
});
