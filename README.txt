Arete Church TJM — Static Church Website
========================================

Pure HTML, CSS, and JavaScript. No build step required.

HOW TO RUN
----------
Option 1 (easiest): Double-click index.html to open it in your browser.

Option 2 (recommended — needed for PDF inline viewing & PWA features):
Serve the folder over a local web server, e.g.:

    python3 -m http.server 8000
    # then open http://localhost:8000

FOLDER STRUCTURE
----------------
  index.html            Home / welcome page
  about.html            About, vision, leadership
  contact.html          Contact form + map
  gallery.html          Photo gallery with lightbox
  audio-library.html    Sermons player (custom HTML5 audio)
  pdf-library.html      PDF document viewer
  manifest.json         PWA manifest (Android install support)
  css/styles.css        All styles (Indigo-blue + gold theme, light/dark)
  js/app.js             Shared app bar / drawer / theme toggle
  assets/               Images and logo
  audio/                Drop your MP3 sermon files here
  pdfs/                 Drop your PDF documents here

ADD YOUR CONTENT
----------------
- Audio: add MP3s to /audio/ and edit the `tracks` array in audio-library.html
- PDFs:  add PDFs  to /pdfs/  and edit the `docs`   array in pdf-library.html
- Photos: add JPGs to /assets/ and edit the `photos` array in gallery.html

FEATURES
--------
✓ Responsive (mobile, tablet, desktop) with Android optimization
✓ Material Design app bar + slide-out drawer navigation
✓ Dark mode toggle (preference saved)
✓ Indigo-blue + gold accent theme
✓ Custom audio player with play/pause/stop, ±10s skip, speed & volume
✓ PDF library with search, inline viewer and download
✓ Photo gallery with category filters and full-screen lightbox (← → / Esc)
✓ Contact form with thank-you toast
✓ PWA-ready (manifest + theme color)
