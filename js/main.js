/* ====================================================================
   MAIN.JS
   Site bootstrap: AOS init, "Begin Our Journey" button, typewriter
   love letter, and the live "time together" counter.

   ---- THE TWO THINGS YOU MOST LIKELY WANT TO EDIT ARE BELOW ----
==================================================================== */

/* EDIT ME 1: the exact date & time you got together.
   Format: new Date(YEAR, MONTH_INDEX, DAY, HOUR, MINUTE)
   Note: MONTH_INDEX is 0-based (0 = January, 11 = December) */
const START_DATE = new Date(2021, 6, 9, 18, 0, 0); // placeholder: July 9, 2021, 6:00 PM

/* EDIT ME 2: your real love letter. Keep it as one string; use \n\n
   for a paragraph break. This is what gets "typed" on screen. */
const LOVE_LETTER = `Hi babb, happy anniversary! it's been 5 years since we entered this relationship, how time flies!. Sa loob ng limang taon we've shared a lot of experiences, joyful and even painful ones😂 (naging maalon din) but glory to Him, for He brought us here. I am so grateful bab na ganitong klase ng relationship ang nabuild within 5 years, through the help of Him. This relationship is built not for this world but for His kingdom. We've already been so far mahal and let's keep going ano. Wala pa man tayo ng buhay ng isang pagiging mag asawa but I appreciate you love for loving me as if I'm already your husband, na even at my worst, nandiyan palagi yung emotional and spiritual support, those are highly appreciated loveko. For me bab it's not about the experiences/memories that makes me glad, it's about who I've been with, in short it's about being with you. For the past 5 years we've been put into different situations, different places with different foods😅 and what makes me happiest is that I shared all those experiences with you my love. Nasa phase na ako bab na sa tuwing nag aask tayo sa isa't isa kung saan tayo, madalas na naisasagot ko ay kahit saan basta kasama kita and honestly hindi yun pambobola lang or katamaran ng pag iisip kung saan😂, the story behind it is that what matters most to me now is being with you. As we go on bab, it's not just the situation, the place, or the food that I am looking forward to the most. It's the moments that i'll get to share with you. Kahit saan tayo dalhin love ko basta ikaw kasama ko. Just keep waiting bab ano, sana wag ka mainip or mapagod btw hindi ko naman yun nakikita sayo. More patience and understanding to come! Iloveyouuuuuuu🫰.

`;

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- AOS INIT ---------- */
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true, offset: 60 });
  }

  /* ---------- BEGIN BUTTON ---------- */
  const beginBtn = document.getElementById('beginBtn');
  const timelineSection = document.getElementById('timeline');

  beginBtn.addEventListener('click', () => {
    if (window.__startMusic) window.__startMusic();
    timelineSection.scrollIntoView({ behavior: 'smooth' });
  });

  /* ---------- TYPEWRITER LOVE LETTER ---------- */
  const typedEl = document.getElementById('typedLetter');
  const cursorEl = document.getElementById('typedCursor');
  const letterSection = document.getElementById('letter');
  let typed = false;

  function typeLetter() {
    if (typed) return;
    typed = true;

    const text = LOVE_LETTER;
    let i = 0;

    function step() {
      if (i <= text.length) {
        typedEl.textContent = text.slice(0, i);
        i += 2; // characters per tick — raise for faster typing, lower for slower
        window.setTimeout(step, 22);
      } else {
        typedEl.textContent = text;
        if (cursorEl) cursorEl.style.animationIterationCount = '3';
      }
    }
    step();
  }

  const letterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeLetter();
      }
    });
  }, { threshold: 0.4 });

  if (letterSection) letterObserver.observe(letterSection);

  /* ---------- LIVE COUNTER ---------- */
  const dayEl = document.getElementById('count-days');
  const hourEl = document.getElementById('count-hours');
  const minEl = document.getElementById('count-mins');
  const secEl = document.getElementById('count-secs');

  function updateCounter() {
    const now = new Date();
    let diff = now - START_DATE;
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    if (dayEl) dayEl.textContent = days;
    if (hourEl) hourEl.textContent = String(hours).padStart(2, '0');
    if (minEl) minEl.textContent = String(mins).padStart(2, '0');
    if (secEl) secEl.textContent = String(secs).padStart(2, '0');
  }

  updateCounter();
  window.setInterval(updateCounter, 1000);
});
