document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     MOBILE NAVIGATION
  ========================================================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

      const isOpen = mainNav.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation"
          : "Open navigation"
      );
    });


    mainNav.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        mainNav.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open navigation"
        );
      });

    });

  }


  /* =========================================================
     REVEAL ANIMATIONS
  ========================================================= */

  const revealElements =
    document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        (entries, observerInstance) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "is-visible"
              );

              observerInstance.unobserve(
                entry.target
              );
            }

          });

        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -40px 0px"
        }
      );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

  } else {

    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });

  }


  /* =========================================================
     CURRENT YEAR
  ========================================================= */

  const yearElement =
    document.getElementById("year");

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }


  /* =========================================================
     ACTIVE NAVIGATION
  ========================================================= */

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );

  const navLinks =
    document.querySelectorAll(
      '.main-nav a[href^="#"]'
    );

  if (
    sections.length &&
    navLinks.length &&
    "IntersectionObserver" in window
  ) {

    const sectionObserver =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              const currentId =
                entry.target.getAttribute("id");

              navLinks.forEach((link) => {

                const isCurrent =
                  link.getAttribute("href") ===
                  `#${currentId}`;

                link.classList.toggle(
                  "active",
                  isCurrent
                );

              });

            }

          });

        },
        {
          rootMargin:
            "-25% 0px -60% 0px",
          threshold: 0
        }
      );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

  }


  /* =========================================================
     LANGUAGE SYSTEM
  ========================================================= */

  const languageToggle =
    document.querySelector(
      "[data-language-toggle]"
    );

  const translatableElements =
    document.querySelectorAll(
      "[data-en][data-ar]"
    );

  const htmlElement =
    document.documentElement;


  function applyLanguage(language) {

    const selectedLanguage =
      language === "ar"
        ? "ar"
        : "en";

    translatableElements.forEach(
      (element) => {

        const text =
          element.getAttribute(
            `data-${selectedLanguage}`
          );

        if (text !== null) {
          element.textContent = text;
        }

      }
    );


    document
      .querySelectorAll(
        "[data-en-placeholder][data-ar-placeholder]"
      )
      .forEach((element) => {

        const placeholder =
          element.getAttribute(
            selectedLanguage === "ar"
              ? "data-ar-placeholder"
              : "data-en-placeholder"
          );

        if (placeholder !== null) {
          element.setAttribute(
            "placeholder",
            placeholder
          );
        }

      });


    htmlElement.setAttribute(
      "lang",
      selectedLanguage
    );

    htmlElement.setAttribute(
      "dir",
      selectedLanguage === "ar"
        ? "rtl"
        : "ltr"
    );

    document.body.classList.toggle(
      "lang-ar",
      selectedLanguage === "ar"
    );


    if (languageToggle) {

      languageToggle.textContent =
        selectedLanguage === "ar"
          ? "EN"
          : "AR";

      languageToggle.setAttribute(
        "aria-label",
        selectedLanguage === "ar"
          ? "Switch to English"
          : "Switch to Arabic"
      );

    }


    try {
      localStorage.setItem(
        "emeriona-language",
        selectedLanguage
      );
    } catch (error) {
      /* Local storage may be unavailable. */
    }

  }


  if (languageToggle) {

    languageToggle.addEventListener(
      "click",
      () => {

        const currentLanguage =
          htmlElement.getAttribute("lang") ||
          "en";

        applyLanguage(
          currentLanguage === "ar"
            ? "en"
            : "ar"
        );

      }
    );

  }


  /* =========================================================
     INITIAL LANGUAGE
  ========================================================= */

  let savedLanguage = "en";

  try {

    const storedLanguage =
      localStorage.getItem(
        "emeriona-language"
      );

    if (
      storedLanguage === "ar" ||
      storedLanguage === "en"
    ) {
      savedLanguage = storedLanguage;
    }

  } catch (error) {
    /* Use English when storage is unavailable. */
  }

  applyLanguage(savedLanguage);


  /* =========================================================
     CLOSE MOBILE NAV ON ESCAPE
  ========================================================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        mainNav &&
        mainNav.classList.contains("open")
      ) {

        mainNav.classList.remove("open");

        if (menuToggle) {

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

          menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
          );

          menuToggle.focus();

        }

      }

    }
  );


  /* =========================================================
     CONTACT FORM
  ========================================================= */

  const contactForm =
    document.querySelector(
      ".contact form"
    );

  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      (event) => {

        const formData =
          new FormData(contactForm);

        const name =
          formData.get("name") || "";

        const email =
          formData.get("email") || "";

        const organization =
          formData.get("organization") || "";

        const purpose =
          formData.get("purpose") || "";

        const message =
          formData.get("message") || "";


        const subject =
          `EMERIONA Global — ${purpose}`;


        const body =
          [
            `Name: ${name}`,
            `Email: ${email}`,
            `Organization / Company: ${organization}`,
            `Purpose: ${purpose}`,
            "",
            "Message:",
            message
          ].join("\n");


        /*
         * We intentionally use mailto here because
         * the website is static and does not currently
         * have a server-side form-processing service.
         */

        const mailto =
          "mailto:emeriona.global@gmail.com" +
          `?subject=${encodeURIComponent(subject)}` +
          `&body=${encodeURIComponent(body)}`;


        event.preventDefault();

        window.location.href = mailto;

      }
    );

  }

});
