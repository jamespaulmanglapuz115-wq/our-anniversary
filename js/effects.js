/* ====================================================================
   EFFECTS.JS
   Loader, floating hearts, page-turn transitions, music toggle,
   confetti finale.
==================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. LOADER ---------- */
  const loader = document.getElementById('loader');
  window.setTimeout(() => {
    loader.classList.add('loader-hidden');
  }, 3000); // EDIT ME: change 3000 to show the loader longer/shorter (in ms)

  /* ---------- 2. FLOATING HEARTS BACKGROUND ---------- */
  const heartsLayer = document.getElementById('floatingHearts');
  const HEART_COUNT = 14;

  function spawnHeart() {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');
    heart.style.fontSize = (12 + Math.random() * 14) + 'px';
    const duration = 8 + Math.random() * 10;
    heart.style.animationDuration = duration + 's';
    heartsLayer.appendChild(heart);
    window.setTimeout(() => heart.remove(), duration * 1000);
  }

  for (let i = 0; i < HEART_COUNT; i++) {
    window.setTimeout(spawnHeart, i * 900);
  }
  window.setInterval(spawnHeart, 1400);

  /* ---------- 3. PAGE-TURN ENTRANCE (IntersectionObserver) ---------- */
  const pages = document.querySelectorAll('.page');
  const pageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('page-active');
      }
    });
  }, { threshold: 0.25 });

  pages.forEach(page => pageObserver.observe(page));

  /* ---------- 4. MUSIC TOGGLE ---------- */
  const music = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-toggle');
  let musicPlaying = false;

  function setMusicState(playing) {
    musicPlaying = playing;
    musicBtn.classList.toggle('playing', playing);
    musicBtn.textContent = playing ? '🎶' : '🎵';
  }

  musicBtn.addEventListener('click', () => {
    if (musicPlaying) {
      music.pause();
      setMusicState(false);
    } else {
      // If there's no real audio file yet, play() will reject quietly —
      // that's expected until you add a file to assets/music/.
      music.play().then(() => setMusicState(true)).catch(() => {
        console.info('Add a song file to assets/music/ to enable music playback.');
      });
    }
  });

  // Expose a helper so main.js can start music from the "Begin" button too
  window.__startMusic = function () {
    if (!musicPlaying) {
      music.play().then(() => setMusicState(true)).catch(() => {});
    }
  };

  /* ---------- 5. CONFETTI ON FINALE ---------- */
  const finale = document.getElementById('finale');
  let confettiFired = false;

  const finaleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !confettiFired) {
        confettiFired = true;
        fireConfetti();
      }
    });
  }, { threshold: 0.5 });

  finaleObserver.observe(finale);

  function fireConfetti() {
    if (typeof confetti !== 'function') return;

    const duration = 2500;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
        colors: ['#FF4D6D', '#FF8FA3', '#FFD6E0']
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 60,
        origin: { x: 1 },
        colors: ['#FF4D6D', '#FF8FA3', '#FFD6E0']
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#FF4D6D', '#FF8FA3', '#FFD6E0']
    });
  }
});
