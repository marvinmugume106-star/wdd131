// ====================================
// 3. REFINED JAVASCRIPT (scripts.js)
// ====================================

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    function toggleNav() {
        mainNav.classList.toggle('open');
        const isExpanded = mainNav.classList.contains('open');
        navToggle.setAttribute('aria-expanded', isExpanded);
        navToggle.textContent = isExpanded ? 'âœ•' : 'â˜°';
    }

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', toggleNav);
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    mainNav.classList.remove('open');
                    navToggle.textContent = 'â˜°';
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // --- 2. Dynamic Copyright ---
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = `${new Date().getFullYear()}`;
    }

    // --- 3. Form Submission Feedback ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const subject = document.getElementById('subject').value;
            alert(`Thanks, ${name}! Your message about "${subject}" has been sent.`);
            contactForm.reset();
        });
    }

    // --- 4. Save Last Selected Subject to localStorage ---
    const subjectSelect = document.getElementById('subject');
    if (subjectSelect) {
        subjectSelect.addEventListener('change', () => {
            localStorage.setItem('lastSubject', subjectSelect.value);
        });

        const savedSubject = localStorage.getItem('lastSubject');
        if (savedSubject) {
            subjectSelect.value = savedSubject;
        }
    }

    // --- 5. Featured Player Object & Array Filtering Example ---
    const featuredPlayers = [
        { name: "THE GREAT MEX", game: "FORZA Horizon", tags: ["speed", "drift"] },
        { name: "LEGENDARY SPARTA", game: "PUBG", tags: ["sniper", "stealth"] },
        { name: "MEGA RAYZ", game: "BLUR", tags: ["agility", "power"] }
    ];

    const forzaExperts = featuredPlayers.filter(player => player.game === "FORZA Horizon");
    console.log("FORZA Experts:", forzaExperts);

});
// --- Login Form Logic ---
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('remember-me');
const togglePassword = document.getElementById('toggle-password');

// Restore remembered username
if (localStorage.getItem('rememberedUser')) {
  usernameInput.value = localStorage.getItem('rememberedUser');
  rememberMeCheckbox.checked = true;
}

// Toggle password visibility
if (togglePassword) {
  togglePassword.addEventListener('click', (e) => {
    e.preventDefault();
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? 'Show Password' : 'Hide Password';
  });
}

// Handle login submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    localStorage.setItem('loggedInUser', username);
  
    alert(`Welcome back, ${username}!`);
  
    // âœ… Redirect to dashboard after short delay
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000); // 1 second delay for smoother UX
  
    loginForm.reset();
  });
  

// --- Register Form Logic ---
const registerForm = document.getElementById('register-form');
const registerPassword = document.getElementById('password');
const toggleRegisterPassword = document.getElementById('toggle-password');
const termsCheckbox = document.getElementById('terms');

if (toggleRegisterPassword) {
  toggleRegisterPassword.addEventListener('click', (e) => {
    e.preventDefault();
    const type = registerPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    registerPassword.setAttribute('type', type);
    toggleRegisterPassword.textContent = type === 'password' ? 'Show Password' : 'Hide Password';
  });
}

if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!termsCheckbox.checked) {
      alert("Please agree to the terms and conditions before registering.");
      return;
    }

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const game = document.getElementById('game').value;

    // Save user info to localStorage
    const userProfile = {
      username,
      email,
      game,
      registeredAt: new Date().toISOString()
    };

    localStorage.setItem('loggedInUser', JSON.stringify(userProfile));

    alert(`Welcome to the Arena, ${username}! Your account has been created and you're now logged in.`);
    registerForm.reset();
  });
}

if (toggleRegisterPassword) {
  toggleRegisterPassword.addEventListener('click', (e) => {
    e.preventDefault();
    const type = registerPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    registerPassword.setAttribute('type', type);
    toggleRegisterPassword.textContent = type === 'password' ? 'Show Password' : 'Hide Password';
  });
}

if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!termsCheckbox.checked) {
      alert("Please agree to the terms and conditions before registering.");
      return;
    }

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const game = document.getElementById('game').value;

    // Save user info to localStorage
    const userProfile = {
      username,
      email,
      game,
      registeredAt: new Date().toISOString()
    };

    localStorage.setItem('loggedInUser', JSON.stringify(userProfile));

    alert(`Welcome to the Arena, ${username}! Your account has been created and you're now logged in.`);
    registerForm.reset();
  });
}
// --- Dashboard Profile Loader ---
const userData = localStorage.getItem('loggedInUser');
if (userData) {
  const user = JSON.parse(userData);
  const welcome = document.getElementById('welcome-message');
  const username = document.getElementById('profile-username');
  const email = document.getElementById('profile-email');
  const game = document.getElementById('profile-game');
  const date = document.getElementById('profile-date');
  const avatarPreview = document.getElementById('avatar-preview');

  if (welcome) welcome.textContent = `Welcome, ${user.username}!`;
  if (username) username.textContent = user.username;
  if (email) email.textContent = user.email;
  if (game) game.textContent = user.game;
  if (date) date.textContent = new Date(user.registeredAt).toLocaleDateString();

  // Optional avatar preview (if you store base64 in localStorage later)
  if (avatarPreview && user.avatarBase64) {
    const img = document.createElement('img');
    img.src = user.avatarBase64;
    img.alt = "Your Avatar";
    img.style.width = "80px";
    img.style.height = "80px";
    img.style.borderRadius = "50%";
    avatarPreview.appendChild(img);
  }
}
// --- Recent Matches Feed ---
const matchFeed = document.getElementById('match-feed');
if (matchFeed) {
  const recentMatches = [
    { title: "SPARTAN SIZA vs RAY SIZA", game: "FC 26", result: "SPARTAN SIZA won 3-2" },
    { title: "BIG DAVIE vs MARVIN MUGUME", game: "FORZA Horizon", result: "MARVIN MUGUME won by drift points" },
    { title: "MEGA RAYZ vs LEGENDARY SPARTA", game: "BLUR", result: "MEGA RAYZ dominated 5-1" }
  ];

  recentMatches.forEach(match => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${match.title}</h3>
      <p class="meta">${match.game}</p>
      <p>${match.result}</p>
    `;
    matchFeed.appendChild(card);
  });
}

// --- Leaderboard Highlights ---
const leaderboardBody = document.getElementById('leaderboard-widget-body');
if (leaderboardBody) {
  const topPlayers = [
    { rank: "#1", name: "SPARTAN SIZA", game: "FC 26", wins: 120 },
    { rank: "#2", name: "RAY SIZA", game: "BLUR", wins: 98 },
    { rank: "#3", name: "MARVIN MUGUME", game: "FORZA Horizon", wins: 110 }
  ];

  topPlayers.forEach(player => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${player.rank}</td>
      <td>${player.name}</td>
      <td>${player.game}</td>
      <td>${player.wins}</td>
    `;
    leaderboardBody.appendChild(row);
  });
}
// --- Terms Modal Logic ---
const openTerms = document.getElementById('open-terms');
const closeTerms = document.getElementById('close-terms');
const termsModal = document.getElementById('terms-modal');

if (openTerms && closeTerms && termsModal) {
  openTerms.addEventListener('click', (e) => {
    e.preventDefault();
    termsModal.classList.remove('hidden');
  });

  closeTerms.addEventListener('click', () => {
    termsModal.classList.add('hidden');
  });

  window.addEventListener('click', (e) => {
    if (e.target === termsModal) {
      termsModal.classList.add('hidden');
    }
  });
}