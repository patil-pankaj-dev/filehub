/**
 * Filehub - Client Application Engine
 * Handles theme toggling (Dark default), 9-card field grid rendering,
 * roadmap modal dialogs, desktop header navigation, and bottom navigation dock state.
 */

(function () {
  'use strict';

  // DOM Elements
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const headerThemeBtn = document.getElementById('header-theme-btn');
  const bottomThemeBtn = document.getElementById('bottom-nav-theme');
  const fieldsGrid = document.getElementById('fields-grid');
  
  // Dialog Elements
  const roadmapDialog = document.getElementById('roadmap-dialog');
  const dialogCloseBtn = document.getElementById('dialog-close-btn');
  const dialogTitle = document.getElementById('dialog-title');
  const dialogSubtitle = document.getElementById('dialog-subtitle');
  const dialogBody = document.getElementById('dialog-body');

  /* ==========================================
     1. Theme Engine (Dark is default)
     ========================================== */
  function initTheme() {
    const savedTheme = localStorage.getItem('filehub_theme');
    if (savedTheme === 'light') {
      htmlEl.classList.add('light');
    } else {
      htmlEl.classList.remove('light'); // default dark
    }
  }

  function toggleTheme() {
    const isLight = htmlEl.classList.toggle('light');
    localStorage.setItem('filehub_theme', isLight ? 'light' : 'dark');
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (headerThemeBtn) headerThemeBtn.addEventListener('click', toggleTheme);
  if (bottomThemeBtn) bottomThemeBtn.addEventListener('click', toggleTheme);

  /* ==========================================
     2. Navigation & Authentication State
     ========================================== */
  function initAuthState() {
    const user = window.FilehubAuth ? window.FilehubAuth.getUser() : null;
    const loginLink = document.getElementById('bottom-nav-login');
    const loginText = document.getElementById('bottom-nav-login-text');
    const headerLoginBtn = document.getElementById('header-login-btn');

    if (user) {
      if (loginLink) {
        loginLink.href = 'dashboard.html';
        loginLink.setAttribute('aria-label', 'Dashboard');
      }
      if (loginText) {
        loginText.textContent = 'Dashboard';
      }
      if (headerLoginBtn) {
        headerLoginBtn.href = 'dashboard.html';
        headerLoginBtn.textContent = 'Dashboard';
      }
    }
  }

  function initNavbars() {
    initAuthState();
    const currentPath = window.location.pathname.toLowerCase();
    
    // Bottom Nav Items
    const navItems = document.querySelectorAll('.bottom-nav-item');
    navItems.forEach(item => {
      const href = item.getAttribute('href');
      if (!href) return;
      if (
        (href === 'index.html' && (currentPath.endsWith('index.html') || currentPath.endsWith('/filehub/') || currentPath === '/' || currentPath === '')) ||
        (href !== 'index.html' && currentPath.includes(href))
      ) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Desktop Nav Items
    const desktopLinks = document.querySelectorAll('.desktop-nav-link');
    desktopLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#')) return;
      if (
        (href === 'index.html' && (currentPath.endsWith('index.html') || currentPath.endsWith('/filehub/') || currentPath === '/' || currentPath === '')) ||
        (href !== 'index.html' && currentPath.includes(href))
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /* ==========================================
     3. Render 9 Fields Grid (Zero CLS)
     ========================================== */
  function renderFieldsGrid() {
    if (!fieldsGrid || typeof ROADMAPS_DATA === 'undefined') return;

    fieldsGrid.innerHTML = '';

    ROADMAPS_DATA.forEach(function (role, index) {
      const card = document.createElement('article');
      card.className = `card motion-reveal motion-delay-${(index % 9) + 1}`;
      card.setAttribute('data-id', role.id);

      const skillsHtml = role.coreSkills
        .slice(0, 4)
        .map(function (skill) {
          return `<span class="skill-tag">${escapeHtml(skill)}</span>`;
        })
        .join('');

      card.innerHTML = `
        <div class="card-media">
          <img src="${role.thumbnail}" 
               alt="${escapeHtml(role.title)} architectural overview" 
               width="400" 
               height="225" 
               loading="lazy" 
               decoding="async" />
          <span class="badge card-media-badge">${escapeHtml(role.badge)}</span>
        </div>
        <div class="card-header">
          <span class="card-category">${escapeHtml(role.category)}</span>
          <h3 class="card-title">${escapeHtml(role.title)}</h3>
          <p class="card-description">${escapeHtml(role.quickSummary)}</p>
        </div>
        <div class="card-content">
          <div class="distinction-box">
            <div class="distinction-label">Role Focus:</div>
            ${escapeHtml(role.distinction)}
          </div>
          <div class="card-skills">
            ${skillsHtml}
          </div>
        </div>
        <div class="card-footer">
          <button type="button" class="btn btn-accent btn-block open-roadmap-btn" data-id="${role.id}">
            <span>How to Become</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      `;

      fieldsGrid.appendChild(card);
    });

    // Attach event listeners to "How to Become" buttons
    document.querySelectorAll('.open-roadmap-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const roleId = btn.getAttribute('data-id');
        openRoadmapModal(roleId);
      });
    });
  }

  /* ==========================================
     4. Modal / Dialog Handler
     ========================================== */
  function openRoadmapModal(roleId) {
    if (!roadmapDialog || typeof ROADMAPS_DATA === 'undefined') return;

    const role = ROADMAPS_DATA.find(function (item) {
      return item.id === roleId;
    });

    if (!role) return;

    dialogTitle.textContent = role.title;
    dialogSubtitle.textContent = `${role.category} • Complete B.Tech Career Pathway`;

    const phasesHtml = role.roadmapPhases
      .map(function (phase) {
        return `
          <div class="roadmap-phase-card">
            <h4 class="roadmap-phase-title">${escapeHtml(phase.phase)}</h4>
            <p class="roadmap-phase-desc">${escapeHtml(phase.details)}</p>
          </div>
        `;
      })
      .join('');

    const projectsHtml = role.projectIdeas
      .map(function (project) {
        return `
          <li class="dialog-project-item">
            <span class="dialog-project-bullet"></span>
            <span>${escapeHtml(project)}</span>
          </li>
        `;
      })
      .join('');

    const allSkillsHtml = role.coreSkills
      .map(function (s) {
        return `<span class="skill-tag">${escapeHtml(s)}</span>`;
      })
      .join('');

    dialogBody.innerHTML = `
      <div>
        <h4 class="dialog-section-heading">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
          Industry Salary Benchmark
        </h4>
        <div class="salary-banner">${escapeHtml(role.salaryInsights)}</div>
      </div>

      <div>
        <h4 class="dialog-section-heading">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          Step-by-Step Curriculum Roadmap
        </h4>
        ${phasesHtml}
      </div>

      <div>
        <h4 class="dialog-section-heading">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 18l6-6-6-6"></path>
            <path d="M8 6l-6 6 6 6"></path>
          </svg>
          Essential Tech Stack & Skills
        </h4>
        <div class="card-skills">
          ${allSkillsHtml}
        </div>
      </div>

      <div>
        <h4 class="dialog-section-heading">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          Recommended Real-World Capstone Projects
        </h4>
        <ul class="dialog-projects-list">
          ${projectsHtml}
        </ul>
      </div>
    `;

    roadmapDialog.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeRoadmapModal() {
    if (!roadmapDialog) return;
    roadmapDialog.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (dialogCloseBtn) {
    dialogCloseBtn.addEventListener('click', closeRoadmapModal);
  }

  if (roadmapDialog) {
    roadmapDialog.addEventListener('click', function (e) {
      if (e.target === roadmapDialog) {
        closeRoadmapModal();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && roadmapDialog.classList.contains('active')) {
        closeRoadmapModal();
      }
    });
  }

  /* ==========================================
     5. Lightweight Entrance Observer
     ========================================== */
  function initMotionObserver() {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
      );

      document.querySelectorAll('.motion-reveal').forEach(function (el) {
        observer.observe(el);
      });
    } else {
      document.querySelectorAll('.motion-reveal').forEach(function (el) {
        el.classList.add('is-revealed');
      });
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Initialize Lifecycle
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initNavbars();
    renderFieldsGrid();
    initMotionObserver();
  });
})();
