document.addEventListener("DOMContentLoaded", () => {
  // Smooth navigation for internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Reveal sections as they enter the viewport
  const revealElements = document.querySelectorAll(
    ".value-card, .pillar, .solution-card, .content-block, .section-heading"
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
  });

  // Update the current year automatically
  const yearElement = document.querySelector(".site-footer p:last-child");

  if (yearElement) {
    yearElement.textContent =
      `© ${new Date().getFullYear()} EMERIONA Global. All rights reserved.`;
  }

  // Simple console confirmation for development
  console.log("EMERIONA Global website initialized successfully.");
});
