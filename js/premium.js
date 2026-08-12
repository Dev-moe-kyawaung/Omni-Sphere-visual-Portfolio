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

/* ============================================
   PREMIUM V2 - ULTIMATE EDITION
   Core Interactions + Mobile Menu + Theme + AI
   ============================================ */

(function () {
  "use strict";

  const state = {
    isMobile: false,
    ticking: false,
    lastScrollY: window.scrollY,
    theme: "Here’s an extended `js/premium.js` that adds:

- **Mobile menu toggle** (with overlay + body scroll lock)
- **Theme toggle** (dark / light, persisted in `localStorage`)
- **Lightweight AI assistant panel** with predefined Q&A about your stack and projects

It stays framework-free and performance-minded.

```js
/* ============================================
   PREMIUM V2 - ULTIMATE EDITION
   Core Interactions + Mobile Menu + Theme + AI
   ============================================ */

(function () {
  "use strict";

  const state = {
    isMobile: false,
    ticking: false,
    lastScrollY: window.scrollY,
    theme: "dark",
    menuOpen: false,
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
    contactForm: document.querySelectorHere’s an extended `js/premium.js` that adds:

- **Mobile menu toggle** (with overlay + body scroll lock)
- **Theme toggle** (dark / light, persisted in `localStorage`)
- **Lightweight AI assistant panel** with predefined Q&A about your stack and projects

It stays framework-free and performance-minded.

```js
/* ============================================
   PREMIUM V2 - ULTIMATE EDITION
   Core Interactions + Mobile Menu + Theme + AI
   ============================================ */

(function () {
  "use strict";

  const state = {
    isMobile: false,
    ticking: false,
    lastScrollY: window.scrollY,
    theme: "dark",
    menuOpen: false,
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

    // Mobile menu
    menuToggle: null,
    menuOverlay: null,
    menuClose: null,

    // Theme toggle
    themeToggle: null,

    // AI assistant
    aiToggle: null,
    aiPanel: null,
    aiMessages: null,
    aiInput: null,
    aiSend: null,
    aiClose: null,
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

  // ---------- THEME ----------

  const applyTheme = (theme) => {
    state.theme = theme;
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);

    if (dom.themeToggle) {
      const icon = dom.themeToggle.querySelector("i");
      if (icon) {
        icon.className = theme === "dark" ? "fas fa-moon" : "fas fa-sun";
      }
    }
  };

  const initTheme = () => {
    dom.themeToggle = document.querySelector("#theme-toggle");

    const saved = localStorage.getItem("theme") || "dark";
    applyTheme(saved);

    dom.themeToggle?.addEventListener("click", () => {
      const next = state.theme === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  };

  // ---------- MOBILE MENU ----------

  const createMobileMenu = () => {
    // Toggle button
    const btn = document.createElement("button");
    btn.className = "menu-toggle";
    btn.setAttribute("aria-label", "Toggle menu");
    btn.innerHTML = `
      <span class="menu-icon"></span>
    `;

    // Overlay + panel
    const overlay = document.createElement("div");
    overlay.className = "menu-overlay";

    const panel = document.createElement("div");
    panel.className = "menu-panel";

    const navClone = dom.nav?.cloneNode(true);
    if (navClone) {
      navClone.classList.add("nav-mobile");
      panel.appendChild(navClone);
    }

    const closeBtn = document.createElement("button");
    closeBtn.className = "menu-close";
    closeBtn.setAttribute("aria-label", "Close menu");
    closeBtn.innerHTML = `<i class="fas fa-times"></i>`;

    panel.appendChild(closeBtn);
    overlay.appendChild(panel);

    document.body.appendChild(btn);
    document.body.appendChild(overlay);

    dom.menuToggle = btn;
    dom.menuOverlay = overlay;
    dom.menuClose = closeBtn;
  };

  const openMenu = () => {
    state.menuOpen = true;
    dom.menuOverlay.classList.add("open");
    dom.menuToggle.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    state.menuOpen = false;
    dom.menuOverlay.classList.remove("open");
    dom.menuToggle.classList.remove("open");
    document.body.style.overflow = "";
  };

  const initMobileMenu = () => {
    if (!dom.nav) return;
    createMobileMenu();

    dom.menuToggle.addEventListener("click", () => {
      if (state.menuOpen) closeMenu();
      else openMenu();
    });

    dom.menuClose.addEventListener("click", closeMenu);
    dom.menuOverlay.addEventListener("click", (e) => {
      if (e.target === dom.menuOverlay) closeMenu();
    });

    // Close on nav link click
    dom.menuOverlay.querySelectorAll(".nav-mobile a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && state.menuOpen) closeMenu();
    });
  };

  // ---------- AI ASSISTANT ----------

  const qaDatabase = [
    {
      keywords: ["stack", "tech", "technology", "tools"],
      answer: `I focus on Android with Kotlin, Jetpack Compose, and Clean Architecture.  
Typical stack: Kotlin, Compose, MVVM/MVI, Firebase, Room, Retrofit, ExoPlayer, and basic CI/CD.  
I also use some Next.js/React for web and lightweight AI integrations.`
    },
    {
      keywords: ["project", "work", "app", "apps", "portfolio"],
      answer: `I highlight 3 flagship projects:  
• Social Dashboard – real-time analytics with Compose + Firebase  
• POS Ultimate Pro Max – enterprise POS with Room + offline patterns  
• Advanced Video Player – ExoPlayer/Media3 with clean UX  
Each is presented as a short case study with problem → approach → solution.`
    },
    {
      keywords: ["hire", "contact", "email", "available"],
      answer: `I’m open to senior Android roles and consulting.  
Email: moekyawaung@programmer.net  
GitHub: github.com/Dev-moe-kyawaung  
LinkedIn: linkedin.com/in/moe-kyaw-aung-2653093a1`
    },
    {
      keywords: ["experience", "year", "senior", "background"],
      answer: `I have 12+ years of experience building Android apps,  
with 551+ repositories and 82+ certifications.  
I focus on clean architecture, maintainable code, and product-quality UX.`
    },
    {
      keywords: ["resume", "cv", "download"],
      answer: `You can request my resume via email.  
I usually share a PDF tailored to the role (Android, mobile, or general software).`
    },
  ];

  const findAnswer = (query) => {
    const q = query.toLowerCase();
    for (const item of qaDatabase) {
      if (item.keywords.some((k) => q.includes(k))) {
        return item.answer;
      }
    }
    return `I can answer questions about my stack, projects, experience, and how to work together.  
Try: “What’s your tech stack?”, “Tell me about your projects”, or “How can I hire you?”`;
  };

  const addMessage = (text, role) => {
    if (!dom.aiMessages) return;
    const msg = document.createElement("div");
    msg.className = `ai-message ${role === "user" ? "ai-user" : "ai-bot"}`;
    msg.textContent = text;
    dom.aiMessages.appendChild(msg);
    dom.aiMessages.scrollTop = dom.aiMessages.scrollHeight;
  };

  const createAIPanel = () => {
    const toggle = document.createElement("button");
    toggle.className = "ai-toggle";
    toggle.setAttribute("aria-label", "Open AI assistant");
    toggle.innerHTML = `<i class="fas fa-robot"></i>`;

    const panel = document.createElement("div");
    panel.className = "ai-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");

    const header = document.createElement("div");
    header.className = "ai-header";
    header.innerHTML = `
      <div class="ai-title">
        <i class="fas fa-robot"></i>
        <span>AI Assistant</span>
      </div>
      <button class="ai-close" aria-label="Close assistant">
        <i class="fas fa-times"></i>
      </button>
    `;

    const messages = document.createElement("div");
    messages.className = "ai-messages";

    const inputWrap = document.createElement("div");
    inputWrap.className = "ai-input-wrap";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "ai-input";
    input.placeholder = "Ask about my stack, projects, or experience...";

    const send = document.createElement("button");
    send.className = "ai-send";
    send.innerHTML = `<i class="fas fa-paper-plane"></i>`;

    inputWrap.appendChild(input);
    inputWrap.appendChild(send);

    panel.appendChild(header);
    panel.appendChild(messages);
    panel.appendChild(inputWrap);

    document.body.appendChild(toggle);
    document.body.appendChild(panel);

    dom.aiToggle = toggle;
    dom.aiPanel = panel;
    dom.aiMessages = messages;
    dom.aiInput = input;
    dom.aiSend = send;
    dom.aiClose = header.querySelector(".ai-close");
  };

  const openAI = () => {
    dom.aiPanel.classList.add("open");
    dom.aiToggle.classList.add("open");
    dom.aiInput.focus();
  };

  const closeAI = () => {
    dom.aiPanel.classList.remove("open");
    dom.aiToggle.classList.remove("open");
  };

  const initAI = () => {
    createAIPanel();

    dom.aiToggle.addEventListener("click", () => {
      if (dom.aiPanel.classList.contains("open")) closeAI();
      else openAI();
    });

    dom.aiClose.addEventListener("click", closeAI);

    const sendMessage = () => {
      const text = dom.aiInput.value.trim();
      if (!text) return;

      addMessage(text, "user");
      dom.aiInput.value = "";

      const answer = findAnswer(text);
      setTimeout(() => addMessage(answer, "bot"), 350);
    };

    dom.aiSend.addEventListener("click", sendMessage);
    dom.aiInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendMessage();
    });

    // Close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && dom.aiPanel.classList.contains("open")) {
        closeAI();
      }
    });
  };

  // ---------- SMOOTH SCROLL ----------

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

  // ---------- ACTIVE NAV ----------

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

  // ---------- HERO PARALLAX ----------

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

  // ---------- COUNTERS ----------

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

  // ---------- CONTACT FORM ----------

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

  // ---------- TOPBAR SCROLL ----------

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

  // ---------- REVEAL ON SCROLL ----------

  const initReveal = () => {
    const items = document.querySelectorAll(
      ".project-card, .case-study, .skill-box, .about-panel"
    );
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

  // ---------- KEYBOARD FOR PROJECTS ----------

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

  // ---------- INIT ----------

  const init = () => {
    updateMobile();
    window.addEventListener("resize", updateMobile, { passive: true });

    initTheme();
    initMobileMenu();
    initAI();

    initSmoothScroll();
    initActiveNav();
    initHeroParallax();
    initCounters();
    initContactForm();
    initTopbarScroll();
    initReveal();
    initProjectKeyboard();

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
