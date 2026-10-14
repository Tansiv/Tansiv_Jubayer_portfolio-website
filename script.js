(() => {
  'use strict';
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  const PROJECT_CATEGORIES = [
    { id: 'all', label: 'All work' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'ml', label: 'Machine learning' },
    { id: 'engineering', label: 'Engineering' }
  ];

  const PROJECTS = [
    { category: 'analytics', title: 'Customer Segmentation', discipline: 'Customer analytics', date: '2026', description: 'RFM feature engineering and K-Means clustering to uncover customer behaviour patterns across 5,878 customers.', art: 'segmentation', tags: ['Python', 'Pandas', 'Scikit-learn'], metrics: [['5,878', 'customers'], ['0.4187', 'silhouette score']], href: 'https://github.com/Tansiv/OIBSIP/tree/main/DataAnalytics-L1-CustomerSegmentation', action: 'View project' },
    { category: 'analytics', title: 'Istanbul Malls — Retail EDA', discipline: 'Retail intelligence', date: '2026', description: 'Exploratory analysis of 99,457 transactions to examine sales patterns and price relationships.', art: 'retail', tags: ['Python', 'EDA', 'Visualisation'], metrics: [['99,457', 'transactions'], ['0.962', 'price correlation (r)']], href: 'https://github.com/Tansiv/OIBSIP/tree/main/DataAnalytics-L1-EDARetailSales', action: 'View project' },
    { category: 'analytics', title: 'Sales & HR Dashboards', discipline: 'Business intelligence', date: '2026', description: 'Stakeholder-oriented dashboards designed to make operational performance easier to monitor and interpret.', art: 'dashboard', tags: ['Power BI', 'DAX', 'Power Query'], href: 'https://github.com/Tansiv/Power-BI-Assignment', action: 'View project' },
    { category: 'engineering', title: 'Full-Stack Task Manager', discipline: 'Web application', date: '2026', description: 'A task-management application backed by a REST API and relational data storage.', art: 'task', tags: ['React', 'Node.js', 'Express', 'PostgreSQL'], href: 'https://task-manager-ocvpl4ml8-tansiv-jubayer-s-projects.vercel.app', action: 'Open live demo' },
    { category: 'engineering', title: 'Role-Based Access Control', discipline: 'Application security', date: '2026', description: 'Authentication and authorisation with role-aware access logic and a relational SQL model.', art: 'security', tags: ['PHP', 'MySQL', 'JavaScript'], href: 'https://github.com/Tansiv/rbac_project', action: 'View project' },
    { category: 'ml', title: 'Green Energy Demand Forecasting', discipline: 'Applied machine learning', date: 'Research', description: 'Hybrid LSTM–XGBoost pipeline for divisional energy-demand forecasting, with feature engineering and ETL optimisation.', art: 'energy', tags: ['LSTM', 'XGBoost', 'Time series'], metrics: [['−15%', 'RMSE reported'], ['10K+', 'records reported']], href: '#research', action: 'Explore research' }
  ];

  const PROJECT_STORIES = [
    { description: 'Customer data can hide distinct buying patterns. I engineered RFM features and applied K-Means to group 5,878 customers into behaviour-led cohorts, then assessed cluster separation.', challenge: 'Identify useful customer groups in transaction data so behaviour can be compared and interpreted.', approach: 'Prepared recency, frequency, and monetary features, then applied K-Means in Python.', outcome: 'Analysed 5,878 customers and recorded a 0.4187 silhouette score; no downstream business lift is claimed.' },
    { description: 'Retail teams need a grounded view of sales activity. I explored 99,457 transactions across 10 malls to examine sales patterns and price relationships with Python.', challenge: 'Make a large retail transaction dataset easier to inspect for sales patterns and relationships.', approach: 'Used Python based exploratory analysis and visualisation to review 99,457 transactions across 10 malls.', outcome: 'The supplied project reports a 0.962 price correlation. Correlation is descriptive, not causal.' },
    { description: 'Scattered reporting makes operational performance harder to scan. These Power BI dashboards organise sales and HR views for stakeholders, using DAX and Power Query.', challenge: 'Present sales and HR information in a format stakeholders can scan and use.', approach: 'Built dashboard views in Power BI with DAX measures and Power Query data preparation.', outcome: 'Delivered dashboard examples for operational monitoring; no quantified business impact was supplied.' },
    { description: 'Teams need one place to track work. This task manager combines a React interface with an Express REST API and PostgreSQL storage.', challenge: 'Provide a focused interface for organising and tracking work.', approach: 'Connected a React frontend to a Node.js and Express REST API with PostgreSQL persistence.', outcome: 'Implemented a full stack task management demo; no usage or productivity metrics were supplied.' },
    { description: 'Applications with multiple user types need consistent access boundaries. This project implements authentication and role aware authorisation with PHP, JavaScript, and MySQL.', challenge: 'Represent user roles and protect application areas according to access rules.', approach: 'Implemented authentication and role based checks over a relational MySQL model.', outcome: 'Demonstrates role aware access control; no security audit or production deployment is claimed.' },
    { description: 'Energy planning depends on useful forecasts. This research combines engineered time series features, an optimised ETL process, and a hybrid LSTM XGBoost model.', challenge: 'Forecast sustainable energy demand across Bangladesh divisions from historical records.', approach: 'Developed a hybrid LSTM XGBoost pipeline with feature engineering and ETL optimisation.', outcome: 'The supplied CV reports a 15% RMSE reduction and 10K+ records. These are reported project results.' }
  ];
  PROJECTS.forEach((project, index) => Object.assign(project, PROJECT_STORIES[index]));

  const SKILL_GROUPS = [
    { title: 'Data & analytics', symbol: '↗', description: 'Turning raw data into structured evidence and clear reporting.', skills: ['Python', 'SQL', 'Excel', 'Pandas', 'NumPy', 'EDA', 'ETL pipelines', 'Power BI', 'DAX', 'Power Query', 'Matplotlib', 'Seaborn'] },
    { title: 'AI & machine learning', symbol: '⌘', description: 'Modelling, evaluation, and applied computer-vision workflows.', skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'Deep learning', 'Time series', 'Computer vision', 'OpenCV', 'ResNet', 'Swin Transformer'] },
    { title: 'Software engineering', symbol: '⌘', description: 'Building web interfaces, APIs, and relational data-backed tools.', skills: ['JavaScript', 'React', 'Node.js', 'Express', 'REST APIs', 'PHP', 'MySQL', 'PostgreSQL', 'HTML/CSS', 'Git/GitHub', 'Docker'] },
    { title: 'Automation & delivery', symbol: '✳', description: 'Connecting tools and reducing repetitive operational work.', skills: ['n8n', 'Make', 'Zapier', 'Webhooks', 'Prompt engineering', 'RAG fundamentals', 'Jupyter', 'VS Code', 'Project management'] }
  ];

  function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function renderProjects() {
    const grid = $('#projectGrid');
    if (!grid) return;
    const fragment = document.createDocumentFragment();
    PROJECTS.forEach((project, index) => {
      const card = makeElement('article', `project-card reveal${index === 0 ? ' project-featured' : ''}`);
      card.dataset.category = project.category;
      card.dataset.projectIndex = String(index);
      const artTemplate = $(`#projectArt-${project.art}`);
      if (artTemplate) {
        const art = artTemplate.content.firstElementChild.cloneNode(true);
        const artIndex = $('.art-index', art);
        if (artIndex) artIndex.textContent = String(index + 1).padStart(2, '0');
        card.append(art);
      }
      const info = makeElement('div', 'project-info');
      const meta = makeElement('div', 'project-meta');
      meta.append(makeElement('span', '', project.discipline), makeElement('span', '', project.date));
      info.append(meta, makeElement('h3', '', project.title), makeElement('p', '', project.description));
      if (project.metrics) {
        const metricRow = makeElement('div', 'metric-row');
        project.metrics.forEach(([value, label]) => {
          const metric = makeElement('div');
          metric.append(makeElement('strong', '', value), makeElement('span', '', label));
          metricRow.append(metric);
        });
        info.append(metricRow);
      }
      const tags = makeElement('div', 'tag-row');
      project.tags.forEach(tag => tags.append(makeElement('span', '', tag)));
      const link = makeElement('a', 'project-link');
      link.href = project.href;
      link.textContent = project.action;
      link.append(makeElement('span', '', project.href.startsWith('http') ? '↗' : '↓'));
      if (project.href.startsWith('http')) {
        link.target = '_blank';
        link.rel = 'noreferrer';
      }
      const actions = makeElement('div', 'project-actions');
      const caseStudyButton = makeElement('button', 'case-study-button', 'Read case study');
      caseStudyButton.type = 'button';
      caseStudyButton.dataset.projectIndex = String(index);
      caseStudyButton.setAttribute('aria-haspopup', 'dialog');
      const shortlistButton = makeElement('button', 'shortlist-button', 'Save project');
      shortlistButton.type = 'button';
      shortlistButton.dataset.projectIndex = String(index);
      shortlistButton.setAttribute('aria-pressed', 'false');
      actions.append(caseStudyButton, shortlistButton);
      info.append(tags, actions, link);
      card.append(info);
      fragment.append(card);
    });
    grid.replaceChildren(fragment);
  }

  function renderSkills() {
    const grid = $('#skillsGrid');
    if (!grid) return;
    const fragment = document.createDocumentFragment();
    SKILL_GROUPS.forEach((group, index) => {
      const card = makeElement('article', 'skill-group reveal');
      const header = makeElement('div', 'skill-group-head');
      header.append(makeElement('span', '', String(index + 1).padStart(2, '0')), makeElement('h3', '', group.title), makeElement('span', 'skill-symbol', group.symbol));
      card.append(header, makeElement('p', '', group.description));
      const pills = makeElement('div', 'skill-pills');
      group.skills.forEach(skill => pills.append(makeElement('span', '', skill)));
      card.append(pills);
      fragment.append(card);
    });
    grid.replaceChildren(fragment);
  }

  function renderFilters() {
    const row = $('#projectFilters');
    if (!row) return;
    const fragment = document.createDocumentFragment();
    PROJECT_CATEGORIES.forEach(category => {
      const count = category.id === 'all' ? PROJECTS.length : PROJECTS.filter(project => project.category === category.id).length;
      const button = makeElement('button', `filter-chip${category.id === 'all' ? ' active' : ''}`);
      button.type = 'button';
      button.dataset.filter = category.id;
      button.dataset.label = category.label;
      button.setAttribute('aria-pressed', String(category.id === 'all'));
      button.append(document.createTextNode(`${category.label} `), makeElement('span', '', String(count).padStart(2, '0')));
      fragment.append(button);
    });
    row.replaceChildren(fragment);
    const status = $('#filterStatus');
    if (status) status.textContent = `Showing all ${PROJECTS.length} projects`;
  }

  renderProjects();
  renderSkills();
  renderFilters();

  // Project case studies and a locally saved shortlist give visitors a focused way to review work.
  const caseStudyDialog = $('#caseStudyDialog');
  const caseStudyClose = $('#caseStudyClose');
  const shortlistList = $('#shortlistList');
  const shortlistStatus = $('#shortlistStatus');
  const clearShortlist = $('#clearShortlist');
  let shortlistedProjects = new Set();

  try {
    const savedShortlist = JSON.parse(localStorage.getItem('tj-project-shortlist') || '[]');
    shortlistedProjects = new Set(savedShortlist.filter(index => Number.isInteger(index) && PROJECTS[index]));
  } catch (_) {}

  function getProjectNarrative(project) {
    const outcome = project.metrics
      ? project.metrics.map(([value, label]) => `${value} ${label}`).join(' | ')
      : 'A documented portfolio implementation that demonstrates the workflow and technical decisions.';
    return {
      challenge: project.challenge || `Translate a ${project.discipline.toLowerCase()} question into a focused, useful deliverable.`,
      approach: project.approach || `${project.description} The implementation uses ${project.tags.join(', ')}.`,
      outcome: project.outcome || outcome
    };
  }

  function openCaseStudy(projectIndex) {
    const project = PROJECTS[projectIndex];
    if (!project || !caseStudyDialog || typeof caseStudyDialog.showModal !== 'function') return;
    const narrative = getProjectNarrative(project);
    $('#caseStudyDiscipline').textContent = project.discipline;
    $('#caseStudyIndex').textContent = `PROJECT / ${String(projectIndex + 1).padStart(2, '0')} / ${project.date}`;
    $('#caseStudyTitle').textContent = project.title;
    $('#caseStudySummary').textContent = project.description;
    $('#caseStudyChallenge').textContent = narrative.challenge;
    $('#caseStudyApproach').textContent = narrative.approach;
    $('#caseStudyOutcome').textContent = narrative.outcome;
    const tags = $('#caseStudyTags');
    tags.replaceChildren(...project.tags.map(tag => makeElement('span', '', tag)));
    const caseStudyLink = $('#caseStudyLink');
    caseStudyLink.href = project.href;
    caseStudyLink.textContent = project.action;
    caseStudyLink.append(makeElement('span', '', project.href.startsWith('http') ? '↗' : '↓'));
    if (project.href.startsWith('http')) {
      caseStudyLink.target = '_blank';
      caseStudyLink.rel = 'noreferrer';
    } else {
      caseStudyLink.removeAttribute('target');
      caseStudyLink.removeAttribute('rel');
    }
    caseStudyDialog.showModal();
  }

  function persistShortlist() {
    try { localStorage.setItem('tj-project-shortlist', JSON.stringify([...shortlistedProjects])); } catch (_) {}
  }

  function renderShortlist() {
    const count = shortlistedProjects.size;
    shortlistStatus.textContent = count ? `${count} saved ${count === 1 ? 'project' : 'projects'}` : 'No saved projects';
    clearShortlist.hidden = !count;
    const fragment = document.createDocumentFragment();
    [...shortlistedProjects].sort((a, b) => a - b).forEach(index => {
      const project = PROJECTS[index];
      const item = makeElement('button', 'shortlist-item');
      item.type = 'button';
      item.dataset.projectIndex = String(index);
      item.setAttribute('aria-label', `Open case study for ${project.title}`);
      item.append(makeElement('span', 'shortlist-item-index', String(index + 1).padStart(2, '0')), makeElement('span', '', project.title), makeElement('span', 'shortlist-item-arrow', '↗'));
      fragment.append(item);
    });
    shortlistList.replaceChildren(fragment);
    $$('.shortlist-button').forEach(button => {
      const isSaved = shortlistedProjects.has(Number(button.dataset.projectIndex));
      button.classList.toggle('is-saved', isSaved);
      button.setAttribute('aria-pressed', String(isSaved));
      button.textContent = isSaved ? 'Saved' : 'Save project';
    });
  }

  $('#projectGrid').addEventListener('click', event => {
    const caseStudyButton = event.target.closest('.case-study-button');
    if (caseStudyButton) openCaseStudy(Number(caseStudyButton.dataset.projectIndex));
    const shortlistButton = event.target.closest('.shortlist-button');
    if (shortlistButton) {
      const projectIndex = Number(shortlistButton.dataset.projectIndex);
      if (shortlistedProjects.has(projectIndex)) shortlistedProjects.delete(projectIndex);
      else shortlistedProjects.add(projectIndex);
      persistShortlist();
      renderShortlist();
    }
  });
  shortlistList.addEventListener('click', event => {
    const item = event.target.closest('.shortlist-item');
    if (item) openCaseStudy(Number(item.dataset.projectIndex));
  });
  clearShortlist.addEventListener('click', () => {
    shortlistedProjects.clear();
    persistShortlist();
    renderShortlist();
  });
  caseStudyClose.addEventListener('click', () => caseStudyDialog.close());
  caseStudyDialog.addEventListener('click', event => {
    if (event.target === caseStudyDialog) caseStudyDialog.close();
  });
  renderShortlist();

  const COMMANDS = [
    { label: 'Home', detail: 'Return to the introduction', href: '#home' },
    { label: 'Selected work', detail: 'Browse projects and case studies', href: '#work' },
    { label: 'Research', detail: 'Read publications and research interests', href: '#research' },
    { label: 'About', detail: 'Background and experience', href: '#about' },
    { label: 'Services', detail: 'Practical ways to work together', href: '#services' },
    { label: 'Capabilities', detail: 'Technical skills and tools', href: '#skills' },
    { label: 'Contact', detail: 'Start a conversation', href: '#contact' },
    { label: 'GitHub profile', detail: 'Open Tansiv on GitHub', href: 'https://github.com/Tansiv', external: true },
    { label: 'LinkedIn profile', detail: 'Connect professionally', href: 'https://www.linkedin.com/in/tansiv-jubayer/', external: true }
  ];

  const commandPalette = $('#commandPalette');
  const commandTrigger = $('#commandTrigger');
  const commandClose = $('#commandClose');
  const commandInput = $('#commandInput');
  const commandList = $('#commandList');
  let commandResults = COMMANDS;
  let activeCommandIndex = 0;

  function updateActiveCommand() {
    $$('.command-item', commandList).forEach((item, index) => {
      const isActive = index === activeCommandIndex;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });
  }

  function runCommand(command) {
    if (!command) return;
    commandPalette.close();
    if (command.external) {
      window.open(command.href, '_blank', 'noopener,noreferrer');
      return;
    }
    const destination = $(command.href);
    if (destination) destination.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', command.href);
  }

  function renderCommandResults(query = '') {
    const normalizedQuery = query.trim().toLowerCase();
    commandResults = COMMANDS.filter(command => `${command.label} ${command.detail}`.toLowerCase().includes(normalizedQuery));
    activeCommandIndex = 0;
    const fragment = document.createDocumentFragment();
    if (!commandResults.length) {
      fragment.append(makeElement('p', 'command-empty', 'No matching destinations.'));
    } else {
      commandResults.forEach((command, index) => {
        const item = makeElement('button', 'command-item');
        item.type = 'button';
        item.setAttribute('role', 'option');
        item.dataset.commandIndex = String(index);
        const copy = makeElement('span', 'command-copy');
        copy.append(makeElement('strong', '', command.label), makeElement('small', '', command.detail));
        item.append(makeElement('span', 'command-number', String(index + 1).padStart(2, '0')), copy, makeElement('span', 'command-arrow', command.external ? 'Open' : 'Go'));
        fragment.append(item);
      });
    }
    commandList.replaceChildren(fragment);
    updateActiveCommand();
  }

  function openCommandPalette() {
    if (!commandPalette || typeof commandPalette.showModal !== 'function') return;
    renderCommandResults('');
    commandPalette.showModal();
    commandInput.value = '';
    commandInput.focus();
  }

  if (commandPalette && commandTrigger) {
    commandTrigger.addEventListener('click', openCommandPalette);
    commandClose.addEventListener('click', () => commandPalette.close());
    commandInput.addEventListener('input', () => renderCommandResults(commandInput.value));
    commandList.addEventListener('click', event => {
      const item = event.target.closest('.command-item');
      if (item) runCommand(commandResults[Number(item.dataset.commandIndex)]);
    });
    commandPalette.addEventListener('click', event => {
      if (event.target === commandPalette) commandPalette.close();
    });
    commandPalette.addEventListener('keydown', event => {
      if (!commandResults.length) return;
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        activeCommandIndex = (activeCommandIndex + 1) % commandResults.length;
        updateActiveCommand();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        activeCommandIndex = (activeCommandIndex - 1 + commandResults.length) % commandResults.length;
        updateActiveCommand();
      } else if (event.key === 'Enter' && document.activeElement === commandInput) {
        event.preventDefault();
        runCommand(commandResults[activeCommandIndex]);
      }
    });
    window.addEventListener('keydown', event => {
      const modifierPressed = event.metaKey || event.ctrlKey;
      if (modifierPressed && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (commandPalette.open) commandPalette.close();
        else openCommandPalette();
      }
    });
  }

  // Keep the navigation state in sync with the section currently in view.
  const sectionObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        $$('.desktop-nav a, .mobile-nav a').forEach(link => {
          const active = link.getAttribute('href') === `#${id}`;
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-25% 0px -65% 0px' })
    : null;
  if (sectionObserver) $$('main section[id]').forEach(section => sectionObserver.observe(section));

  // Mobile navigation
  const menuToggle = $('#menuToggle');
  const mobileNav = $('#mobileNav');
  const closeMenu = () => {
    mobileNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  };
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  $$('#mobileNav a').forEach(link => link.addEventListener('click', closeMenu));

  // Theme switch; preference is stored locally when available.
  const themeToggle = $('#themeToggle');
  const themeIcon = $('#themeIcon');
  try {
    if (localStorage.getItem('tj-theme') === 'light') document.body.classList.add('light');
  } catch (_) {}
  const updateThemeIcon = () => { themeIcon.textContent = document.body.classList.contains('light') ? '☾' : '☼'; };
  themeToggle.setAttribute('aria-pressed', String(document.body.classList.contains('light')));
  themeToggle.setAttribute('aria-label', `Switch to ${document.body.classList.contains('light') ? 'dark' : 'light'} theme`);
  updateThemeIcon();
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    themeToggle.setAttribute('aria-pressed', String(isLight));
    themeToggle.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} theme`);
    updateThemeIcon();
    try { localStorage.setItem('tj-theme', isLight ? 'light' : 'dark'); } catch (_) {}
  });

  // Project filtering
  const filterButtons = $$('.filter-chip');
  const projectCards = $$('.project-card');
  filterButtons.forEach(button => button.addEventListener('click', () => {
    filterButtons.forEach(item => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    const filter = button.dataset.filter;
    let visibleCount = 0;
    projectCards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !show);
      card.setAttribute('aria-hidden', String(!show));
      if (!show) card.setAttribute('inert', '');
      else card.removeAttribute('inert');
      if (show) visibleCount += 1;
    });
    const filterStatus = $('#filterStatus');
    if (filterStatus) filterStatus.textContent = `Showing ${filter === 'all' ? 'all' : button.dataset.label} ${visibleCount} ${visibleCount === 1 ? 'project' : 'projects'}`;
  }));

  // Subtle pointer parallax for the hero orb; disabled on touch/reduced motion.
  const orbScene = $('#orbScene');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (orbScene && !reduceMotion && window.matchMedia('(pointer:fine)').matches) {
    orbScene.addEventListener('pointermove', event => {
      const rect = orbScene.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      orbScene.style.transform = `rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    });
    orbScene.addEventListener('pointerleave', () => { orbScene.style.transform = ''; });
  }

  // A lightweight ambient pointer glow adds feedback without tracking touch devices.
  const pointerGlow = $('#pointerGlow');
  if (pointerGlow && !reduceMotion && window.matchMedia('(pointer:fine)').matches) {
    let pointerFrame = 0;
    let pointerX = -200;
    let pointerY = -200;
    const paintPointerGlow = () => {
      pointerGlow.style.setProperty('--pointer-x', `${pointerX}px`);
      pointerGlow.style.setProperty('--pointer-y', `${pointerY}px`);
      pointerGlow.classList.add('is-active');
      pointerFrame = 0;
    };
    window.addEventListener('pointermove', event => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!pointerFrame) pointerFrame = window.requestAnimationFrame(paintPointerGlow);
    }, { passive: true });
    document.addEventListener('mouseleave', () => pointerGlow.classList.remove('is-active'));
  }

  // Scroll reveal, with a graceful fallback for browsers without IntersectionObserver.
  const revealItems = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index % 4, 3) * 65}ms`;
      observer.observe(item);
    });
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  // Reading progress
  const progress = $('#scrollProgress');
  const header = $('.site-header');
  let ticking = false;
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 16);
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { window.requestAnimationFrame(updateProgress); ticking = true; }
  }, { passive: true });
  updateProgress();

  // Keep this empty until a real HTTPS n8n production webhook is configured.
  const N8N_WEBHOOK_URL = '';
  const form = $('#contactForm');
  const formNote = $('#formNote');
  const submitButton = $('.form-submit', form);
  const submitLabel = $('.button-label', submitButton);
  const fields = ['name', 'email', 'message'].map(id => $(`#${id}`));
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u;

  function getWebhookEndpoint() {
    if (!N8N_WEBHOOK_URL) return '';
    try {
      const endpoint = new URL(N8N_WEBHOOK_URL);
      if (endpoint.protocol !== 'https:') throw new Error('Webhook must use HTTPS.');
      return endpoint.href;
    } catch (error) {
      console.error('Invalid contact webhook configuration:', error);
      setFormStatus('The contact webhook must be a valid HTTPS URL. Please contact me by email instead.', 'error');
      return null;
    }
  }

  function setFormStatus(message, state = '') {
    formNote.textContent = message;
    formNote.classList.remove('is-success', 'is-error', 'is-loading');
    if (state) formNote.classList.add(`is-${state}`);
    formNote.dataset.state = state || 'idle';
  }

  function setFieldError(field, message = '') {
    const errorHook = $(`#${field.id}Error`);
    field.setAttribute('aria-invalid', String(Boolean(message)));
    if (errorHook) errorHook.textContent = message;
    return Boolean(message);
  }

  function validateContactForm() {
    let firstInvalid = null;
    fields.forEach(field => {
      const value = field.value.trim();
      let message = '';
      if (!value) message = 'This field is required.';
      else if (field.id === 'name' && value.length < 2) message = 'Please enter at least two characters.';
      else if (field.id === 'email' && !emailPattern.test(value)) message = 'Enter a valid email address.';
      else if (field.id === 'message' && value.length < 10) message = 'Please add a little more detail (at least 10 characters).';
      if (setFieldError(field, message) && !firstInvalid) firstInvalid = field;
    });
    if (firstInvalid) firstInvalid.focus();
    return !firstInvalid;
  }

  fields.forEach(field => field.addEventListener('input', () => {
    setFieldError(field);
    if (formNote.dataset.state === 'error') setFormStatus('Update the highlighted fields and try again.');
  }));

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!validateContactForm()) {
      setFormStatus('Please review the highlighted fields.', 'error');
      return;
    }

    const values = Object.fromEntries(new FormData(form).entries());
    const payload = {
      name: String(values.name).trim(),
      email: String(values.email).trim(),
      topic: String(values.topic || '').trim(),
      message: String(values.message).trim(),
      source: 'personal-portfolio',
      submittedAt: new Date().toISOString()
    };

    const webhookEndpoint = getWebhookEndpoint();
    if (webhookEndpoint === null) return;
    if (!webhookEndpoint) {
      openMailDraft(payload);
      return;
    }

    submitButton.disabled = true;
    submitButton.classList.add('is-loading');
    submitLabel.textContent = 'Sending…';
    setFormStatus('Sending your message securely…', 'loading');

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(webhookEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      if (!response.ok) throw new Error(`Webhook returned ${response.status}`);
      setFormStatus('Thank you. Your message has been sent successfully.', 'success');
      form.reset();
      fields.forEach(field => setFieldError(field));
    } catch (error) {
      console.error('Contact webhook submission failed:', error);
      setFormStatus(error.name === 'AbortError'
        ? 'The request timed out. Please try again or email jtansiv@gmail.com.'
        : 'Your message could not be sent. Please try again or email jtansiv@gmail.com.', 'error');
    } finally {
      window.clearTimeout(timeoutId);
      submitButton.disabled = false;
      submitButton.classList.remove('is-loading');
      submitLabel.textContent = 'Send message';
    }
  });

  function openMailDraft(data) {
    const subject = encodeURIComponent(`[Portfolio] ${data.topic} — ${data.name}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nTopic: ${data.topic}\n\n${data.message}`);
    setFormStatus('Opening a prepared email draft…');
    window.location.href = `mailto:jtansiv@gmail.com?subject=${subject}&body=${body}`;
  }
  $('#year').textContent = new Date().getFullYear();
})();
