:root {
  --bg: #07111f;
  --bg-soft: #0b192a;
  --surface: #10243a;
  --surface-light: #f6f8fb;
  --white: #ffffff;

  --text: #f5f7fa;
  --text-dark: #142235;
  --muted: #aebdce;
  --muted-dark: #647387;

  --accent: #d7b56d;
  --accent-light: #f0d99b;
  --accent-dark: #b99650;

  --border: rgba(255, 255, 255, 0.12);
  --dark-border: rgba(20, 34, 53, 0.12);

  --max-width: 1180px;
  --header-height: 78px;

  --shadow-soft: 0 18px 50px rgba(7, 17, 31, 0.08);
  --shadow-dark: 0 25px 70px rgba(0, 0, 0, 0.25);

  --transition: 0.3s ease;
}


/* =========================
   RESET
========================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--header-height);
}

body {
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Arial,
    sans-serif;

  background: var(--surface-light);
  color: var(--text-dark);
  line-height: 1.7;

  overflow-x: hidden;
}

body.menu-open {
  overflow: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  border: 0;
}

img {
  max-width: 100%;
  display: block;
}

::selection {
  background: var(--accent);
  color: var(--bg);
}


/* =========================
   GLOBAL
========================= */

.container {
  width: min(100% - 40px, var(--max-width));
  margin: 0 auto;
}

.eyebrow {
  display: inline-block;

  color: var(--accent);

  font-size: 0.76rem;
  font-weight: 800;

  letter-spacing: 0.22em;
  text-transform: uppercase;

  margin-bottom: 18px;
}

.section {
  padding: 120px 0;
  background: var(--surface-light);
}

.section-heading {
  max-width: 850px;
  margin-bottom: 60px;
}

.section-heading h2 {
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.section-intro {
  max-width: 720px;

  margin-top: 25px;

  color: var(--muted);
  font-size: 1.08rem;
}

.dark-intro {
  color: var(--muted-dark);
}

.center-heading {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.center-text {
  max-width: 760px;

  margin: 0 auto 35px;

  text-align: center;

  color: var(--muted-dark);
  font-size: 1.08rem;
}

.center-action {
  display: flex;
  justify-content: center;
}


/* =========================
   HEADER
========================= */

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;

  height: var(--header-height);

  background: rgba(7, 17, 31, 0.92);

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  border-bottom: 1px solid var(--border);

  transition:
    background var(--transition),
    box-shadow var(--transition);
}

.site-header.scrolled {
  background: rgba(7, 17, 31, 0.98);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.18);
}

.nav-container {
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 30px;
}

.logo {
  flex-shrink: 0;

  font-size: 1.35rem;
  font-weight: 900;

  letter-spacing: 0.17em;

  color: var(--white);
}

.logo span {
  color: var(--accent);

  font-size: 0.55rem;

  vertical-align: top;

  margin-left: 3px;
}

.main-nav {
  display: flex;
  align-items: center;

  gap: 25px;
}

.main-nav a {
  position: relative;

  color: var(--muted);

  font-size: 0.82rem;
  font-weight: 600;

  transition:
    color var(--transition);
}

.main-nav a::after {
  content: "";

  position: absolute;

  left: 0;
  bottom: -8px;

  width: 0;
  height: 1px;

  background: var(--accent);

  transition: width var(--transition);
}

.main-nav a:hover,
.main-nav a.active {
  color: var(--white);
}

.main-nav a:hover::after,
.main-nav a.active::after {
  width: 100%;
}


/* =========================
   MOBILE MENU BUTTON
========================= */

.menu-toggle {
  display: none;

  width: 42px;
  height: 42px;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 5px;

  background: transparent;

  cursor: pointer;
}

.menu-toggle span {
  display: block;

  width: 23px;
  height: 2px;

  background: var(--white);

  transition:
    transform var(--transition),
    opacity var(--transition);
}

.menu-toggle.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}


/* =========================
   HERO
========================= */

.hero {
  min-height: calc(100vh - var(--header-height));
  min-height: 720px;

  position: relative;

  display: flex;
  align-items: center;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 78% 28%,
      rgba(215, 181, 109, 0.16),
      transparent 28%
    ),
    radial-gradient(
      circle at 20% 80%,
      rgba(40, 92, 130, 0.14),
      transparent 32%
    ),
    linear-gradient(
      135deg,
      #07111f 0%,
      #0b192a 52%,
      #10243a 100%
    );

  color: var(--text);
}

.hero::before {
  content: "";

  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgba(7, 17, 31, 0.95),
      rgba(7, 17, 31, 0.35)
    );

  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 5;

  max-width: 930px;

  padding: 120px 0;
}

.hero h1 {
  max-width: 950px;

  font-size: clamp(3rem, 8vw, 6.7rem);

  line-height: 0.99;

  letter-spacing: -0.055em;

  margin-bottom: 35px;
}

.hero-description {
  max-width: 700px;

  color: var(--muted);

  font-size: clamp(1rem, 2vw, 1.25rem);

  line-height: 1.8;

  margin-bottom: 40px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;

  gap: 14px;
}


/* HERO ORBITS */

.hero-orbit {
  position: absolute;

  border: 1px solid rgba(215, 181, 109, 0.17);

  border-radius: 50%;

  pointer-events: none;
}

.hero-orbit-one {
  width: 620px;
  height: 620px;

  right: -260px;
  top: 80px;
}

.hero-orbit-two {
  width: 420px;
  height: 420px;

  right: -160px;
  top: 180px;

  border-color: rgba(215, 181, 109, 0.1);
}


/* =========================
   BUTTONS
========================= */

.btn {
  min-height: 50px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 13px 27px;

  border-radius: 3px;

  font-size: 0.87rem;
  font-weight: 800;

  letter-spacing: 0.02em;

  cursor: pointer;

  transition:
    transform var(--transition),
    background var(--transition),
    color var(--transition),
    border-color var(--transition),
    box-shadow var(--transition);
}

.btn:hover {
  transform: translateY(-3px);
}

.btn-primary {
  background: var(--accent);
  color: var(--bg);

  box-shadow:
    0 10px 30px rgba(215, 181, 109, 0.15);
}

.btn-primary:hover {
  background: var(--accent-light);

  box-shadow:
    0 14px 35px rgba(215, 181, 109, 0.23);
}

.btn-secondary {
  border: 1px solid rgba(255, 255, 255, 0.2);

  color: var(--white);

  background: rgba(255, 255, 255, 0.02);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.08);

  border-color: rgba(255, 255, 255, 0.35);
}


/* =========================
   FOUNDATION
========================= */

.values {
  padding: 100px 0;

  background: var(--white);
}

.values-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 22px;
}

.value-card {
  position: relative;

  padding: 38px;

  background: var(--white);

  border: 1px solid var(--dark-border);

  transition:
    transform var(--transition),
    box-shadow var(--transition),
    border-color var(--transition);
}

.value-card:hover {
  transform: translateY(-7px);

  box-shadow: var(--shadow-soft);

  border-color: rgba(215, 181, 109, 0.45);
}

.card-number {
  display: block;

  color: var(--accent-dark);

  font-size: 0.72rem;
  font-weight: 800;

  letter-spacing: 0.16em;

  margin-bottom: 24px;
}

.value-card h3 {
  font-size: 1.4rem;

  margin-bottom: 13px;
}

.value-card p {
  color: var(--muted-dark);
}


/* =========================
   ABOUT
========================= */

.about-layout {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 90px;

  align-items: start;
}

.about-lead p {
  font-size: clamp(1.45rem, 3vw, 2rem);

  line-height: 1.45;

  letter-spacing: -0.025em;
}

.about-copy {
  color: var(--muted-dark);

  font-size: 1.05rem;
}

.about-copy p + p {
  margin-top: 25px;
}


/* =========================
   ECOSYSTEM
========================= */

.section-dark {
  background: var(--bg);

  color: var(--text);
}

.section-dark .section-heading h2 {
  color: var(--white);
}

.pillars-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 1px;

  background: var(--border);

  border: 1px solid var(--border);
}

.pillar {
  min-height: 270px;

  padding: 36px;

  background: var(--bg);

  transition:
    background var(--transition);
}

.pillar:hover {
  background: var(--bg-soft);
}

.pillar span {
  display: block;

  color: var(--accent);

  font-size: 0.74rem;
  font-weight: 800;

  letter-spacing: 0.16em;

  margin-bottom: 35px;
}

.pillar h3 {
  font-size: 1.45rem;

  margin-bottom: 13px;
}

.pillar p {
  color: var(--muted);

  max-width: 330px;
}

.ecosystem-note {
  margin-top: 35px;

  color: var(--accent);

  font-size: 0.88rem;
  font-weight: 700;

  letter-spacing: 0.04em;
}


/* =========================
   SOLUTIONS
========================= */

.solutions-grid {
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 20px;
}

.solution-card {
  position: relative;

  padding: 38px;

  background: var(--white);

  border: 1px solid var(--dark-border);

  transition:
    transform var(--transition),
    box-shadow var(--transition),
    border-color var(--transition);
}

.solution-card:hover {
  transform: translateY(-6px);

  box-shadow: var(--shadow-soft);

  border-color: rgba(215, 181, 109, 0.45);
}

.solution-card h3 {
  font-size: 1.35rem;

  margin-bottom: 13px;
}

.solution-card p {
  color: var(--muted-dark);
}


/* =========================
   INNOVATION
========================= */

.innovation {
  background:
    linear-gradient(
      135deg,
      #f0f3f7,
      #ffffff
    );
}

.innovation-layout {
  display: grid;

  grid-template-columns: 0.9fr 1.1fr;

  gap: 100px;
}

.innovation-layout h2 {
  max-width: 600px;

  font-size: clamp(2.4rem, 5vw, 4.4rem);

  line-height: 1.05;

  letter-spacing: -0.045em;
}

.innovation-layout > div:last-child {
  color: var(--muted-dark);

  font-size: 1.08rem;
}

.innovation-layout > div:last-child p + p {
  margin-top: 25px;
}


/* =========================
   KNOWLEDGE
========================= */

.knowledge {
  background: #edf1f5;
}

.knowledge-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 1px;

  background: var(--dark-border);

  border: 1px solid var(--dark-border);
}

.knowledge-grid article {
  min-height: 210px;

  padding: 34px;

  background: #edf1f5;
}

.knowledge-grid h3 {
  font-size: 1.3rem;

  margin-bottom: 12px;
}

.knowledge-grid p {
  color: var(--muted-dark);
}


/* =========================
   IMPACT
========================= */

.impact {
  position: relative;

  overflow: hidden;
}

.impact::after {
  content: "";

  position: absolute;

  width: 500px;
  height: 500px;

  right: -260px;
  top: 50%;

  transform: translateY(-50%);

  border: 1px solid rgba(215, 181, 109, 0.13);

  border-radius: 50%;
}

.impact-layout {
  position: relative;
  z-index: 2;

  display: grid;

  grid-template-columns: 0.9fr 1.1fr;

  gap: 100px;
}

.impact-layout h2 {
  max-width: 650px;

  font-size: clamp(2.4rem, 5vw, 4.4rem);

  line-height: 1.05;

  letter-spacing: -0.045em;
}

.impact-layout > div:last-child {
  color: var(--muted);

  font-size: 1.08rem;
}

.impact-layout > div:last-child p + p {
  margin-top: 25px;
}

.impact strong {
  color: var(--accent);
}


/* =========================
   DIGITAL FACTORY
========================= */

.factory {
  background: var(--white);
}

.factory-flow {
  display: flex;

  flex-wrap: wrap;

  gap: 10px;

  margin-top: 50px;
}

.factory-flow span {
  padding: 13px 18px;

  background: var(--bg);

  color: var(--white);

  border: 1px solid rgba(215, 181, 109, 0.15);

  font-size: 0.78rem;
  font-weight: 700;

  letter-spacing: 0.04em;
}

.factory-flow span::after {
  content: "→";

  color: var(--accent);

  margin-left: 12px;
}

.factory-flow span:last-child::after {
  content: "";
  margin: 0;
}

.factory-note {
  max-width: 820px;

  margin-top: 40px;

  padding: 28px;

  border-left: 2px solid var(--accent);

  background: #f5f7fa;

  color: var(--muted-dark);
}


/* =========================
   PARTNERSHIPS
========================= */

.partnerships {
  background: #f1f4f7;
}

.partner-tags {
  display: flex;

  flex-wrap: wrap;

  justify-content: center;

  gap: 10px;

  max-width: 950px;

  margin: 0 auto 40px;
}

.partner-tags span {
  padding: 11px 17px;

  background: var(--white);

  border: 1px solid var(--dark-border);

  color: var(--text-dark);

  font-size: 0.82rem;
  font-weight: 700;
}


/* =========================
   CONTACT
========================= */

.contact {
  background: var(--white);
}

.contact-grid {
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 20px;

  max-width: 900px;

  margin: 0 auto 55px;
}

.contact-card {
  display: flex;

  flex-direction: column;

  align-items: flex-start;

  padding: 34px;

  background: #f7f9fb;

  border: 1px solid var(--dark-border);

  text-align: left;

  transition:
    transform var(--transition),
    border-color var(--transition),
    box-shadow var(--transition);
}

.contact-card:hover {
  transform: translateY(-5px);

  border-color: rgba(215, 181, 109, 0.55);

  box-shadow: var(--shadow-soft);
}

.contact-label {
  color: var(--accent-dark);

  font-size: 0.7rem;
  font-weight: 800;

  letter-spacing: 0.18em;

  margin-bottom: 12px;
}

.contact-card strong {
  font-size: 1.05rem;

  margin-bottom: 12px;

  word-break: break-word;
}

.contact-card span:last-child {
  color: var(--muted-dark);

  font-size: 0.85rem;
  font-weight: 700;
}


/* =========================
   CONTACT FORM
========================= */

.contact-form-wrapper {
  max-width: 900px;

  margin: 0 auto;
}

.contact-form {
  padding: 42px;

  background: #f7f9fb;

  border: 1px solid var(--dark-border);

  text-align: left;
}

.form-grid {
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 20px;
}

.contact-form label {
  display: block;

  margin-bottom: 22px;
}

.contact-form label span {
  display: block;

  margin-bottom: 8px;

  color: var(--text-dark);

  font-size: 0.82rem;
  font-weight: 700;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;

  border: 1px solid rgba(20, 34, 53, 0.16);

  border-radius: 2px;

  background: var(--white);

  color: var(--text-dark);

  padding: 13px 14px;

  outline: none;

  transition:
    border-color var(--transition),
    box-shadow var(--transition);
}

.contact-form textarea {
  resize: vertical;

  min-height: 160px;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  border-color: var(--accent-dark);

  box-shadow:
    0 0 0 3px rgba(215, 181, 109, 0.13);
}

.contact-form .btn {
  margin-top: 5px;
}

.form-note {
  margin-top: 15px;

  color: var(--muted-dark);

  font-size: 0.78rem;

  text-align: center;
}


/* =========================
   FOOTER
========================= */

.site-footer {
  padding: 70px 0 25px;

  background: var(--bg);

  color: var(--muted);
}

.footer-grid {
  display: grid;

  grid-template-columns: 2fr 1fr 1fr 1fr;

  gap: 50px;

  padding-bottom: 55px;

  border-bottom: 1px solid var(--border);
}

.footer-brand strong {
  display: block;

  color: var(--white);

  font-size: 1.15rem;

  letter-spacing: 0.08em;

  margin-bottom: 18px;
}

.footer-brand p {
  color: var(--accent);

  font-size: 0.88rem;

  line-height: 1.8;
}

.footer-column {
  display: flex;

  flex-direction: column;

  gap: 9px;
}

.footer-column h3 {
  color: var(--white);

  font-size: 0.82rem;

  letter-spacing: 0.12em;

  text-transform: uppercase;

  margin-bottom: 9px;
}

.footer-column a {
  width: fit-content;

  color: var(--muted);

  font-size: 0.83rem;

  transition: color var(--transition);
}

.footer-column a:hover {
  color: var(--accent-light);
}

.footer-bottom {
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 25px;

  padding-top: 24px;
}

.footer-bottom p {
  font-size: 0.75rem;

  color: var(--muted);
}


/* =========================
   REVEAL ANIMATION
========================= */

.reveal {
  opacity: 0;

  transform: translateY(25px);

  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.reveal.is-visible {
  opacity: 1;

  transform: translateY(0);
}


/* =========================
   RESPONSIVE — TABLET
========================= */

@media (max-width: 1000px) {

  .main-nav {
    gap: 16px;
  }

  .main-nav a {
    font-size: 0.76rem;
  }

  .values-grid,
  .pillars-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .knowledge-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-layout,
  .innovation-layout,
  .impact-layout {
    grid-template-columns: 1fr;

    gap: 50px;
  }

  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr;
  }
}


/* =========================
   RESPONSIVE — MOBILE
========================= */

@media (max-width: 760px) {

  :root {
    --header-height: 68px;
  }

  .container {
    width: min(100% - 28px, var(--max-width));
  }

  .section {
    padding: 80px 0;
  }

  .values {
    padding: 75px 0;
  }


  /* MOBILE HEADER */

  .main-nav {
    position: fixed;

    top: var(--header-height);
    left: 0;
    right: 0;

    display: flex;

    flex-direction: column;

    align-items: stretch;

    gap: 0;

    padding: 15px 20px 25px;

    background: rgba(7, 17, 31, 0.98);

    border-bottom: 1px solid var(--border);

    transform: translateY(-120%);

    opacity: 0;

    pointer-events: none;

    transition:
      transform 0.35s ease,
      opacity 0.35s ease;
  }

  .main-nav.open {
    transform: translateY(0);

    opacity: 1;

    pointer-events: auto;
  }

  .main-nav a {
    padding: 15px 5px;

    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    font-size: 0.9rem;
  }

  .main-nav a::after {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }


  /* HERO */

  .hero {
    min-height: 680px;
  }

  .hero-content {
    padding: 85px 0;
  }

  .hero h1 {
    font-size: clamp(2.7rem, 14vw, 4.8rem);

    line-height: 1.01;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-orbit-one {
    width: 400px;
    height: 400px;

    right: -250px;
  }

  .hero-orbit-two {
    width: 280px;
    height: 280px;

    right: -160px;
  }


  /* GRIDS */

  .values-grid,
  .pillars-grid,
  .solutions-grid,
  .knowledge-grid,
  .contact-grid,
  .form-grid {
    grid-template-columns: 1fr;
  }


  /* ABOUT */

  .about-lead p {
    font-size: 1.45rem;
  }


  /* CONTACT */

  .contact-form {
    padding: 25px 20px;
  }


  /* FOOTER */

  .footer-grid {
    grid-template-columns: 1fr 1fr;

    gap: 40px 25px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .footer-bottom {
    flex-direction: column;

    align-items: flex-start;
  }
}


/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 440px) {

  .hero-actions {
    flex-direction: column;

    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .pillar,
  .value-card,
  .solution-card {
    padding: 28px;
  }

  .factory-flow {
    gap: 8px;
  }

  .factory-flow span {
    width: 100%;
  }

  .factory-flow span::after {
    float: right;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}


/* =========================
   REDUCED MOTION
========================= */

@media (prefers-reduced-motion: reduce) {

  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .reveal {
    opacity: 1;

    transform: none;
  }
}
