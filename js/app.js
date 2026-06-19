// ===== Shared App Logic =====

// Inject the app bar + drawer into every page
function buildShell(active) {
  const navItems = [
    { href: 'index.html', icon: 'home', label: 'Home' },
    { href: 'pdf-library.html', icon: 'menu_book', label: 'PDF Library' },
    { href: 'audio-library.html', icon: 'headphones', label: 'Audio Sermons' },
    { href: 'gallery.html', icon: 'photo_library', label: 'Photo Gallery' },
    { href: 'about.html', icon: 'church', label: 'About Us' },
    { href: 'contact.html', icon: 'mail', label: 'Contact' },
  ];

  const navLinks = navItems.map(i =>
    `<a href="${i.href}" class="${active === i.href ? 'active' : ''}">
       <span class="material-icons">${i.icon}</span> ${i.label}
     </a>`
  ).join('');

  const appbar = `
    <header class="appbar">
      <div class="appbar-inner">
        <button class="icon-btn" id="menuBtn" aria-label="Menu">
          <span class="material-icons">menu</span>
        </button>
        <a href="index.html" class="brand">
          <img src="assets/church-logo.png" alt="Arete Church TJM logo">
          <span>Arete Church TJM<small>Faith • Hope • Love</small></span>
        </a>
        <span class="spacer"></span>
        <button class="icon-btn" id="themeBtn" aria-label="Toggle theme">
          <span class="material-icons" id="themeIcon">dark_mode</span>
        </button>
      </div>
    </header>
    <div class="drawer-overlay" id="drawerOverlay"></div>
    <aside class="drawer" id="drawer">
      <div class="drawer-head">
        <h3>Arete Church TJM</h3>
        <p>A place to belong, believe & become</p>
      </div>
      <nav class="drawer-nav">${navLinks}</nav>
    </aside>
  `;

  const footer = `
    <footer>
      <div class="footer-inner">
        <div>
          <h4>Arete Church TJM</h4>
          <p style="opacity:.8;font-size:14px">A welcoming community rooted in faith, growing in love and serving with hope.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          ${navItems.map(i => `<a href="${i.href}">${i.label}</a>`).join('')}
        </div>
        <div>
          <h4>Service Times</h4>
          <p style="opacity:.8;font-size:14px">Sunday Worship: 9:00 AM &amp; 11:00 AM<br>
          Wednesday Prayer: 6:30 PM<br>
          Friday Youth: 7:00 PM</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p style="opacity:.8;font-size:14px">Arete The Jesus Mov't Mukono<br>The Jesus City<br>+256(0) 789 759175</p>
        </div>
      </div>
      <div class="copyright">© ${new Date().getFullYear()} Arete Church TJM. All rights reserved.</div>
    </footer>
  `;

  document.body.insertAdjacentHTML('afterbegin', appbar);
  document.body.insertAdjacentHTML('beforeend', footer);

  // Drawer behavior
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('drawerOverlay');
  document.getElementById('menuBtn').addEventListener('click', () => {
    drawer.classList.add('open'); overlay.classList.add('open');
  });
  overlay.addEventListener('click', () => {
    drawer.classList.remove('open'); overlay.classList.remove('open');
  });

  // Theme toggle
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  document.getElementById('themeIcon').textContent = saved === 'dark' ? 'light_mode' : 'dark_mode';
  document.getElementById('themeBtn').addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', cur);
    document.getElementById('themeIcon').textContent = cur === 'dark' ? 'light_mode' : 'dark_mode';
    localStorage.setItem('theme', cur);
  });
}

function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2400);
}
