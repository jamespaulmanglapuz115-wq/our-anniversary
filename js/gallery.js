/* ====================================================================
   GALLERY.JS
   Small polaroid interaction: tapping a photo brings it to the
   front and straightens it; tapping again (or elsewhere) returns
   it to its resting tilt. Hover zoom/shadow is handled in CSS.
==================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const polaroids = document.querySelectorAll('.polaroid');

  polaroids.forEach(card => {
    card.addEventListener('click', () => {
      const isFocused = card.classList.contains('polaroid-focused');

      polaroids.forEach(p => p.classList.remove('polaroid-focused'));

      if (!isFocused) {
        card.classList.add('polaroid-focused');
      }
    });
  });

  // Tapping outside any polaroid clears the focused state
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.polaroid')) {
      polaroids.forEach(p => p.classList.remove('polaroid-focused'));
    }
  });
});
