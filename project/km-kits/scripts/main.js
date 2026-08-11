// Sample projects array (object + array usage)
const projects = [
  { id: 'pr-001', name: 'School Kit Distribution', location: 'Lusaka, Zambia', year: 2025, image: 'images/kim-kits.jpeg', description: 'Distributed school kits to 420 children.' },
  { id: 'pr-002', name: 'Clean Water Initiative', location: 'Kampala, Uganda', year: 2024, image: 'images/clean_water.jpg', description: 'Installed community water filters and training.' },
  { id: 'pr-003', name: 'Healthcare Outreach', location: 'Arusha, Tanzania', year: 2023, image: 'images/mobile_hero_image.webp', description: 'Mobile clinic serving remote villages.' }
];

function renderProjects(list){
  const grid = document.getElementById('projectsGrid');
  if(!grid) return;
  grid.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name} photo" loading="lazy">
      <div class="card-body">
        <div class="project-meta">
          <span class="project-tag">${p.location}</span>
          <span class="project-year">${p.year}</span>
        </div>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <a href="project/project-detail.html" class="btn-secondary">Read more</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Example function demonstrating conditional branching
function filterRecent(year){
  return projects.filter(p => p.year >= year);
}

function setupMobileMenu(){
  const nav = document.querySelector('.primary-nav');
  if(!nav) return;

  if(!nav.id) {
    nav.id = 'primary-nav';
  }

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'menu-toggle';
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', nav.id);
  toggle.setAttribute('aria-label', 'Toggle navigation menu');
  toggle.innerHTML = '<span class="menu-icon">☰</span>';

  nav.parentNode.insertBefore(toggle, nav);

  toggle.addEventListener('click', ()=>{
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('active', !expanded);
  });

  window.addEventListener('resize', ()=>{
    if(window.innerWidth > 900){
      nav.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function setupActiveNavLink(){
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.primary-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if(href === currentPage || (currentPage === '' && href === 'km-kits.html')){
      link.classList.add('active');
    }
  });
}

function setupContactFormStorage(){
  const form = document.querySelector('.contact-form');
  if(!form) return;

  const fields = ['name', 'email', 'subject', 'message'];
  const savedDraft = JSON.parse(localStorage.getItem('kmKitsContactDraft') || '{}');

  fields.forEach(id => {
    const field = document.getElementById(id);
    if(field && savedDraft[id]){
      field.value = savedDraft[id];
    }
  });

  form.addEventListener('input', ()=>{
    const draft = {};
    fields.forEach(id => {
      const field = document.getElementById(id);
      if(field) draft[id] = field.value;
    });
    localStorage.setItem('kmKitsContactDraft', JSON.stringify(draft));
  });

  form.addEventListener('submit', ()=>{
    localStorage.removeItem('kmKitsContactDraft');
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  // Render all projects
  renderProjects(projects);

  // Example: if the viewport is large, show only recent projects (demonstrates conditional branching)
  if(window.innerWidth >= 1000){
    const recent = filterRecent(2024);
    if(recent.length) renderProjects(recent);
  }

  setupMobileMenu();
  setupActiveNavLink();
  setupContactFormStorage();

  // Footer dates
  const yearEl = document.getElementById('currentYear');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
  const lm = document.getElementById('lastModified');
  if(lm) lm.textContent = document.lastModified;
});
