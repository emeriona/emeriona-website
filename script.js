/* =========================================================
   EMERIONA GLOBAL
   Institutional Website — Core Interaction System
   Version: 4.0
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =========================================================
     01. CORE REFERENCES & CONFIGURATION
     ========================================================= */

  const body = document.body;
  const documentElement = document.documentElement;

  const CONFIG = {
    mobileBreakpoint: 820,
    headerScrollOffset: 20,
    revealThreshold: 0.12,
    revealRootMargin: "0px 0px -48px 0px",
    navRootMargin: "-18% 0px -68% 0px",
    staggerStep: 70,
    menuTransitionMs: 320
  };

  const SELECTORS = {
    header: ".site-header",
    menuButton: ".menu-toggle",
    nav: ".main-nav",
    navLinks: ".main-nav a",
    reveal: ".reveal",
    sections: "main section[id]",
    year: "#year",
    contactForm: ".contact-form-wrap form"
  };

  const header = document.querySelector(SELECTORS.header);
  const menuButton = document.querySelector(SELECTORS.menuButton);
  const nav = document.querySelector(SELECTORS.nav);

  const navLinks = nav
    ? Array.from(nav.querySelectorAll(SELECTORS.navLinks))
    : [];

  const revealElements = Array.from(
    document.querySelectorAll(SELECTORS.reveal)
  );

  const sections = Array.from(
    document.querySelectorAll(SELECTORS.sections)
  );

  const yearElement = document.querySelector(SELECTORS.year);

  const contactForm = document.querySelector(
    SELECTORS.contactForm
  );

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  let menuIsOpen = false;
  let revealObserver = null;
  let sectionObserver = null;


  /* =========================================================
     02. UTILITY FUNCTIONS
     ========================================================= */

  const isMobileViewport = () =>
    window.innerWidth <= CONFIG.mobileBreakpoint;

  const canAnimate = () =>
    !prefersReducedMotion.matches;

  const setAriaCurrent = (activeLink) => {
    navLinks.forEach((link) => {
      const isActive = link === activeLink;

      link.classList.toggle(
        "is-active",
        isActive
      );

      if (isActive) {
        link.setAttribute(
          "aria-current",
          "page"
        );
      } else {
        link.removeAttribute(
          "aria-current"
        );
      }
    });
  };

  const getTargetFromLink = (link) => {
    if (!link) return null;

    const href = link.getAttribute("href");

    if (
      !href ||
      href === "#" ||
      !href.startsWith("#")
    ) {
      return null;
    }

    const id = href.slice(1);

    if (!id) return null;

    try {
      return document.getElementById(
        decodeURIComponent(id)
      );
    } catch {
      return null;
    }
  };


  /* =========================================================
     03. MOBILE NAVIGATION
     ========================================================= */

  const setMenuState = (
    isOpen,
    options = {}
  ) => {
    if (!menuButton || !nav) return;

    const {
      restoreFocus = false,
      immediate = false
    } = options;

    menuIsOpen = Boolean(isOpen);

    nav.classList.toggle(
      "is-open",
      menuIsOpen
    );

    body.classList.toggle(
      "menu-open",
      menuIsOpen
    );

    menuButton.setAttribute(
      "aria-expanded",
      String(menuIsOpen)
    );

    menuButton.setAttribute(
      "aria-label",
      menuIsOpen
        ? "Close navigation"
        : "Open navigation"
    );

    if (!nav.id) {
      nav.id = "main-navigation";
    }

    menuButton.setAttribute(
      "aria-controls",
      nav.id
    );

    menuButton.textContent =
      menuIsOpen ? "×" : "☰";

    if (immediate) {
      nav.style.transition = "none";

      window.requestAnimationFrame(() => {
        nav.style.transition = "";
      });
    }

    if (!menuIsOpen && restoreFocus) {
      window.setTimeout(() => {
        if (
          document.contains(menuButton)
        ) {
          menuButton.focus();
        }
      }, immediate
        ? 0
        : CONFIG.menuTransitionMs);
    }
  };

  const toggleMenu = () => {
    setMenuState(!menuIsOpen);
  };

  const initializeNavigation = () => {
    if (!menuButton || !nav) return;

    if (!nav.id) {
      nav.id = "main-navigation";
    }

    menuButton.setAttribute(
      "aria-controls",
      nav.id
    );

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    menuButton.setAttribute(
      "aria-label",
      "Open navigation"
    );

    menuButton.setAttribute(
      "type",
      "button"
    );

    menuButton.addEventListener(
      "click",
      toggleMenu
    );

    navLinks.forEach((link) => {
      link.addEventListener(
        "click",
        () => {
          if (isMobileViewport()) {
            setMenuState(false);
          }
        }
      );
    });

    document.addEventListener(
      "click",
      (event) => {
        if (!menuIsOpen) return;

        const target = event.target;

        if (
          !(target instanceof Node) ||
          nav.contains(target) ||
          menuButton.contains(target)
        ) {
          return;
        }

        setMenuState(false);
      }
    );

    document.addEventListener(
      "keydown",
      (event) => {
        if (
          event.key === "Escape" &&
          menuIsOpen
        ) {
          event.preventDefault();

          setMenuState(false, {
            restoreFocus: true
          });
        }
      }
    );

    window.addEventListener(
      "resize",
      () => {
        if (
          !isMobileViewport() &&
          menuIsOpen
        ) {
          setMenuState(false, {
            immediate: true
          });
        }
      },
      {
        passive: true
      }
    );
  };


  /* =========================================================
     04. HEADER SCROLL STATE
     ========================================================= */

  const updateHeaderState = () => {
    if (!header) return;

    const isScrolled =
      window.scrollY >
      CONFIG.headerScrollOffset;

    header.classList.toggle(
      "is-scrolled",
      isScrolled
    );
  };

  const initializeHeader = () => {
    if (!header) return;

    updateHeaderState();

    window.addEventListener(
      "scroll",
      updateHeaderState,
      {
        passive: true
      }
    );
  };


  /* =========================================================
     05. REVEAL / ENTRANCE ANIMATION ENGINE
     ========================================================= */

  const initializeRevealSystem = () => {
    if (!revealElements.length) return;

    const staggerGroups = [
      ".values-grid",
      ".pillars-grid",
      ".solutions-grid",
      ".knowledge-grid",
      ".service-grid",
      ".contact-grid"
    ];

    staggerGroups.forEach(
      (groupSelector) => {
        document
          .querySelectorAll(groupSelector)
          .forEach((group) => {
            const items = Array.from(
              group.querySelectorAll(
                ".reveal"
              )
            );

            items.forEach(
              (item, index) => {
                item.style.setProperty(
                  "--reveal-delay",
                  canAnimate()
                    ? `${index *
                        CONFIG.staggerStep}ms`
                    : "0ms"
                );
              }
            );
          }
        );
      }
    );

    if (
      prefersReducedMotion.matches ||
      !(
        "IntersectionObserver" in
        window
      )
    ) {
      revealElements.forEach(
        (element) => {
          element.classList.add(
            "is-visible"
          );

          element.style.setProperty(
            "--reveal-delay",
            "0ms"
          );
        }
      );

      return;
    }

    revealObserver =
      new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(
            (entry) => {
              if (
                !entry.isIntersecting
              ) {
                return;
              }

              entry.target.classList.add(
                "is-visible"
              );

              observer.unobserve(
                entry.target
              );
            }
          );
        },
        {
          threshold:
            CONFIG.revealThreshold,

          rootMargin:
            CONFIG.revealRootMargin
        }
      );

    revealElements.forEach(
      (element) => {
        revealObserver.observe(
          element
        );
      }
    );
  };


  /* =========================================================
     06. ACTIVE SECTION NAVIGATION
     ========================================================= */

  const initializeActiveNavigation =
    () => {
      if (
        !sections.length ||
        !navLinks.length ||
        !(
          "IntersectionObserver" in
          window
        )
      ) {
        return;
      }

      const sectionMap = new Map();

      sections.forEach(
        (section) => {
          const matchingLink =
            navLinks.find(
              (link) =>
                link.getAttribute(
                  "href"
                ) ===
                `#${section.id}`
            );

          if (matchingLink) {
            sectionMap.set(
              section,
              matchingLink
            );
          }
        }
      );

      if (!sectionMap.size) return;

      sectionObserver =
        new IntersectionObserver(
          (entries) => {
            const visibleEntries =
              entries
                .filter(
                  (entry) =>
                    entry.isIntersecting
                )
                .sort(
                  (a, b) =>
                    b.intersectionRatio -
                    a.intersectionRatio
                );

            if (
              !visibleEntries.length
            ) {
              return;
            }

            const activeSection =
              visibleEntries[0].target;

            const activeLink =
              sectionMap.get(
                activeSection
              );

            if (activeLink) {
              setAriaCurrent(
                activeLink
              );
            }
          },
          {
            threshold: [
              0.08,
              0.15,
              0.3,
              0.5
            ],

            rootMargin:
              CONFIG.navRootMargin
          }
        );

      sections.forEach(
        (section) => {
          sectionObserver.observe(
            section
          );
        }
      );
    };


  /* =========================================================
     07. ACCESSIBLE SMOOTH ANCHOR NAVIGATION
     ========================================================= */

  const initializeAnchorNavigation =
    () => {
      const anchorLinks =
        Array.from(
          document.querySelectorAll(
            'a[href^="#"]'
          )
        );

      anchorLinks.forEach(
        (link) => {
          link.addEventListener(
            "click",
            (event) => {
              const target =
                getTargetFromLink(
                  link
                );

              if (!target) {
                return;
              }

              event.preventDefault();

              const behavior =
                canAnimate()
                  ? "smooth"
                  : "auto";

              target.scrollIntoView(
                {
                  behavior,
                  block: "start"
                }
              );

              const targetId =
                target.id;

              if (targetId) {
                try {
                  history.replaceState(
                    null,
                    "",
                    `#${targetId}`
                  );
                } catch {
                  /* History API unavailable. */
                }
              }

              if (
                !target.hasAttribute(
                  "tabindex"
                )
              ) {
                target.setAttribute(
                  "tabindex",
                  "-1"
                );
              }

              window.setTimeout(
                () => {
                  if (
                    document.activeElement !==
                      target &&
                    typeof target.focus ===
                      "function"
                  ) {
                    target.focus({
                      preventScroll:
                        true
                    });
                  }
                },
                canAnimate()
                  ? 450
                  : 0
              );
            }
          );
        }
      );
    };


  /* =========================================================
     08. EXTERNAL LINK HARDENING
     ========================================================= */

  const initializeExternalLinks =
    () => {
      document
        .querySelectorAll(
          'a[target="_blank"]'
        )
        .forEach((link) => {
          link.setAttribute(
            "rel",
            "noopener noreferrer"
          );
        });
    };


  /* =========================================================
     09. CONTACT FORM EXPERIENCE
     ========================================================= */

  const initializeContactForm =
    () => {
      if (!contactForm) return;

      const submitButton =
        contactForm.querySelector(
          'button[type="submit"], input[type="submit"]'
        );

      if (!submitButton) return;

      const originalText =
        submitButton.textContent;

      contactForm.addEventListener(
        "submit",
        () => {
          submitButton.dataset.originalText =
            originalText;

          submitButton.textContent =
            "Preparing Message…";

          submitButton.setAttribute(
            "aria-disabled",
            "true"
          );

          submitButton.disabled = true;

          /*
           * The form may use mailto or another
           * native browser submission method.
           * We do not claim that a message
           * was successfully delivered.
           */

          window.setTimeout(
            () => {
              if (
                !document.contains(
                  submitButton
                )
              ) {
                return;
              }

              submitButton.disabled =
                false;

              submitButton.removeAttribute(
                "aria-disabled"
              );

              submitButton.textContent =
                submitButton.dataset
                  .originalText ||
                originalText ||
                "Send Message";
            },
            2500
          );
        }
      );
    };


  /* =========================================================
     10. CURRENT YEAR
     ========================================================= */

  const initializeCurrentYear =
    () => {
      if (!yearElement) return;

      yearElement.textContent =
        String(
          new Date().getFullYear()
        );
    };


  /* =========================================================
     11. REDUCED MOTION
     ========================================================= */

  const applyReducedMotion = () => {
    if (
      !prefersReducedMotion.matches
    ) {
      revealElements.forEach(
        (element) => {
          element.style.removeProperty(
            "--reveal-delay"
          );
        }
      );

      return;
    }

    revealElements.forEach(
      (element) => {
        element.classList.add(
          "is-visible"
        );

        element.style.setProperty(
          "--reveal-delay",
          "0ms"
        );
      }
    );
  };

  const initializeReducedMotion =
    () => {
      applyReducedMotion();

      const changeHandler = () => {
        applyReducedMotion();

        if (
          prefersReducedMotion.matches
        ) {
          revealElements.forEach(
            (element) => {
              element.classList.add(
                "is-visible"
              );
            }
          );
        }
      };

      if (
        typeof prefersReducedMotion.addEventListener ===
        "function"
      ) {
        prefersReducedMotion.addEventListener(
          "change",
          changeHandler
        );
      } else if (
        typeof prefersReducedMotion.addListener ===
        "function"
      ) {
        prefersReducedMotion.addListener(
          changeHandler
        );
      }
    };


  /* =========================================================
     12. INITIAL HASH / DEEP LINK SUPPORT
     ========================================================= */

  const handleInitialHash = () => {
    const hash =
      window.location.hash;

    if (!hash || hash === "#") {
      return;
    }

    let target = null;

    try {
      target =
        document.querySelector(hash);
    } catch {
      return;
    }

    if (!target) return;

    window.setTimeout(() => {
      target.scrollIntoView({
        behavior: "auto",
        block: "start"
      });
    }, 0);
  };


  /* =========================================================
     13. PAGE INITIALIZATION
     ========================================================= */

  initializeNavigation();

  initializeHeader();

  initializeRevealSystem();

  initializeActiveNavigation();

  initializeAnchorNavigation();

  initializeExternalLinks();

  initializeContactForm();

  initializeCurrentYear();

  initializeReducedMotion();

  documentElement.classList.add(
    "js-ready"
  );

  handleInitialHash();
});
