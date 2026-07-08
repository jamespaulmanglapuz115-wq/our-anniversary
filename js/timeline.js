/* ====================================================================
   TIMELINE.JS
   Fills the vertical timeline line as the user scrolls through
   the "Our Story" section.
==================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.timeline-track');
  const fill = document.getElementById('timelineFill');
  if (!track || !fill) return;

  function updateTimelineFill() {
    const rect = track.getBoundingClientRect();
    const viewportH = window.innerHeight;

    // Progress: 0 when track top is at bottom of viewport,
    // 1 when track bottom has reached the top of viewport.
    const total = rect.height + viewportH;
    const scrolled = viewportH - rect.top;
    let progress = scrolled / total;
    progress = Math.max(0, Math.min(1, progress));

    fill.style.height = (progress * 100) + '%';
  }

  window.addEventListener('scroll', updateTimelineFill, { passive: true });
  window.addEventListener('resize', updateTimelineFill);
  updateTimelineFill();
});
