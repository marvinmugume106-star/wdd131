// Sample projects array (object + array usage)
const projects = [
  { id: 'pr-001', name: 'School Kit Distribution', location: 'Lusaka, Zambia', year: 2025, image: 'images/project-photo.jpg', description: 'Distributed school kits to 420 children.' },
  { id: 'pr-002', name: 'Clean Water Initiative', location: 'Kampala, Uganda', year: 2024, image: 'images/project-photo.jpg', description: 'Installed community water filters and training.' },
  { id: 'pr-003', name: 'Healthcare Outreach', location: 'Arusha, Tanzania', year: 2023, image: 'images/project-photo.jpg', description: 'Mobile clinic serving remote villages.' }
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
        <h3>${p.name}</h3>
        <p><strong>Location:</strong> ${p.location}</p>
        <p>${p.description}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Example function demonstrating conditional branching
function filterRecent(year){
  return projects.filter(p => p.year >= year);
}

document.addEventListener('DOMContentLoaded', ()=>{
  // Render all projects
  renderProjects(projects);

  // Example: if the viewport is large, show only recent projects (demonstrates conditional branching)
  if(window.innerWidth >= 1000){
    const recent = filterRecent(2024);
    if(recent.length) renderProjects(recent);
  }

  // Footer dates
  const yearEl = document.getElementById('currentYear');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
  const lm = document.getElementById('lastModified');
  if(lm) lm.textContent = document.lastModified;
});
