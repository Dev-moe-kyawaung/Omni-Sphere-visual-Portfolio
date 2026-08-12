/* ============================================
   PREMIUM V2 - ULTIMATE EDITION
   Core Interactions & UX
   ============================================ */

(function () {
  "use strict";

  const state = {
    isMobile: false,
    ticking: false,
    lastScrollY: window.scrollY,
  };

  const dom = {
    topbar: document.querySelector(".topbar"),
    nav: document.querySelector(".nav"),
    hero: document.getElementById("hero"),
    work: document.getElementById("work"),
    caseStudies: document.getElementById("case-studies"),
    about: document.getElementById("about"),
    skills: document.getElementById("skills"),
    contact: document.getElementById("contact"),
    contactForm: document.querySelector(".contact-form"),
    sphere: document.querySelector(".sphere-3d"),
  };

  // Utility: clamp
  const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

  // Utility: prefers reduced motion
  const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Mobile detection
  const updateMobile = () => {
    state.isMobile = window.innerWidth < 1100;
  };

  // Smooth scroll for anchor links
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const href = anchor.getAttribute("href");
        if (!href || href === "#") return;
        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 72;

        if (prefersReducedMotion()) {
          window.scrollTo(0, top);
          return;
        }

        const start = window.scrollY;
        const distance = top - start;
        const duration = 600;
        const startTime = performance.now();

        const step = (now) => {
          const t = Math.min((now - startTime) / duration, 1);
          const ease = 1 - Math.pow(1 - t, 3);
          window.scrollTo(0, start + distance * ease);
          if (t < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
      });
    });
  };

  // Active nav highlight based on scroll
  const initActiveNav = () => {
    const sections = [dom.hero, dom.work, dom.caseStudies, dom.about, dom.skills, dom.contact].filter(Boolean);
    const links = Array.from(document.querySelectorAll(".nav a")).filter((a) =>
      a.getAttribute("href")?.startsWith("#")
    );

    if (!sections.length || !links.length) return;

    const onScroll = () => {
      const scrollY = window.scrollY + 120;

      let currentId = sections[0].id;

      for (const sec of sections) {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          currentId = sec.id;
          break;
        }
      }

      links.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === `#${currentId}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  };

  // Subtle parallax for hero sphere
  const initHeroParallax = () => {
    if (!dom.sphere || prefersReducedMotion()) return;

    let rect = dom.sphere.getBoundingClientRect();
    letHere is a strong, production-ready `js/premium.js` that matches the upgraded layout and 2026 best practices: fast, accessible, mobile-first, and focused on the sections that actually convert (hero, work, case studies, contact) [web:51][web:52][web:56].

```js
/* ============================================
   PREMIUM V2 - ULTIMATE EDITION
   Core Interactions & UX
   ============================================ */

(function () {
  "use strict";

  const state = {
    isMobile: false,
    ticking: false,
    lastScrollY: window.scrollY,
  };

  const dom = {
    topbar: document.querySelector(".topbar"),
    nav: document.querySelector(".nav"),
    hero: document.getElementById("hero"),
    work: document.getElementById("work"),
    caseStudies: document.getElementById("case-studies"),
    about: document.getElementById("about"),
    skills: document.getElementById("skills"),
    contact: document.getElementById("contact"),
    contactForm: document.querySelector(".contact-form"),
    sphere: document.querySelector(".sphere-3d"),
  };

  // Utility: clamp
  const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

  // Utility: prefers reduced motion
  const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Mobile detection
  const updateMobile = () => {
    state.isMobile = window.innerWidth < 1100;
  };

  // Smooth scroll for anchor links
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const href = anchor.getAttribute("href");
        if (!href || href === "#") return;
        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 72;

        if (prefersReducedMotion()) {
          window.scrollTo(0, top);
          return;
        }

        const start = window.scrollY;
        const distance = top - start;
        const duration = 600;
        const startTime = performance.now();

        const step = (now) => {
          const t = Math.min((now - startTime) / duration, 1);
          const ease = 1 - Math.pow(1 - t, 3);
          window.scrollTo(0, start + distance * ease);
          if (t < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
      });
    });
  };

  // Active nav highlight based on scroll
  const initActiveNav = () => {
    const sections = [dom.hero, dom.work, dom.caseStudies, dom.about, dom.skills, dom.contact].filter(Boolean);
    const links = Array.from(document.querySelectorAll(".nav a")).filter((a) =>
      a.getAttribute("href")?.startsWith("#")
    );

    if (!sections.length || !links.length) return;

    const onScroll = () => {
      const scrollY = window.scrollY + 120;

      let currentId = sections.id;

      for (const sec of sections) {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          currentId = sec.id;
          break;
        }
      }

      links.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === `#${currentId}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  };

  // Subtle parallax for hero sphere
  const initHeroParallax = () => {
    if (!dom.sphere || prefersReducedMotion()) return;

    let rect = dom.sphere.getBoundingClientRect();
    let centerX = rect.left + rect.width / 2;
    let centerY = rect.top + rect.height / 2;

    const onMove = (e) => {
      if (state.ticking) return;
      state.ticking = true;

      requestAnimationFrame(() => {
        const x = (e.clientX - centerX) / 25;
        const y = (e.clientY - centerY) / 25;
        dom.sphere.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        state.ticking = false;
      });
    };

    const onResize = () => {
      rect = dom.sphere.getBoundingClientRect();
      centerX = rect.left + rect.width / 2;
      centerY = rect.top + rect.height / 2;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
  };

  // Counter animation for stats (if present)
  const initCounters = () => {
    const counters = document.querySelectorAll(".stat-value, .counter");
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);

          const target = parseInt(entry.target.getAttribute("data-count") || "0", 10);
          const duration = 1800;
          const start = 0;
          const startTime = performance.now();

          const step = (now) => {
            const t = Math.min((now - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - t, 3);
            const value = Math.floor(start + (target - start) * ease);
            entry.target.textContent = value + "+";
            if (t < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
        });
      },
      { threshold: 0.6 }
    );

    counters.forEach((el) => observer.observe(el));
  };

  // Contact form behavior (non-blocking)
  const initContactForm = () => {
    if (!dom.contactForm) return;

    dom.contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = dom.contactForm;
      const btn = form.querySelector('button[type="submit"]');
      if (!btn) return;

      const originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Sending...";

      // Simulate async send
      await new Promise((r) => setTimeout(r, 1200));

      btn.textContent = "Message sent";
      btn.style.background = "linear-gradient(135deg, #10b981, #34d399)";
      btn.style.color = "#052010";

      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = originalText;
        btn.style.background = "";
        btn.style.color = "";
        form.reset();
      }, 2200);
    });
  };

  // Topbar elevation on scroll
  const initTopbarScroll = () => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 40) {
        dom.topbar?.classList.add("elevated");
      } else {
        dom.topbar?.classList.remove("elevated");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  };

  // Reveal on scroll (simple)
  const initReveal = () => {
    const items = document.querySelectorAll(".project-card, .case-study, .skill-box, .about-panel");
    if (!items.length || prefersReducedMotion()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(12px)";
      el.style.transition =
        "opacity 600ms ease, transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1)";
      observer.observe(el);
    });
  };

  // Keyboard navigation for project cards
  const initProjectKeyboard = () => {
    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => {
      card.setAttribute("tabindex", "0");
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const link = card.querySelector(".links a");
          if (link) link.click();
        }
      });
    });
  };

  // Init
  const init = () => {
    updateMobile();
    window.addEventListener("resize", updateMobile, { passive: true });

    initSmoothScroll();
    initActiveNav();
    initHeroParallax();
    initCounters();
    initContactForm();
    initTopbarScroll();
    initReveal();
    initProjectKeyboard();

    // Small delay to avoid layout thrash on load
    requestAnimationFrame(() => {
      document.body.classList.add("is-ready");
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
