document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".site-navbar");
  const navCollapse = document.querySelector(".navbar-collapse");
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const sections = [...document.querySelectorAll("header[id], main section[id]")];

  const updateNavbar = () => navbar?.classList.toggle("scrolled", window.scrollY > 20);
  updateNavbar();
  window.addEventListener("scroll", updateNavbar, { passive: true });

  const closeMenu = () => {
    navCollapse?.classList.remove("show");
    document.querySelector(".navbar-toggler")?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  document.querySelector(".navbar-toggler")?.addEventListener("click", (event) => {
    const isOpen = navCollapse?.classList.toggle("show") ?? false;
    event.currentTarget.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  document.querySelectorAll('.nav-link, .navbar-brand, .navbar-action, .footer-nav a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", isCurrent);
        if (isCurrent) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-35% 0px -58% 0px", threshold: 0 });
  sections.forEach((section) => sectionObserver.observe(section));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px" });
  document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
      document.body.classList.remove("menu-open");
      closeMenu();
    }
  });
});
