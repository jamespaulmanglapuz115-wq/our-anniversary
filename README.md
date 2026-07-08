# Our Anniversary Website ❤️

A storybook-style anniversary site: loading screen → welcome → our story
timeline → photo gallery → reasons I love you → love letter → live
"time together" counter → confetti finale.

Pure HTML/CSS/JS — no build step, no backend. Works by just opening
`index.html`, and deploys for free on GitHub Pages.

---

## 1. Personalize it

Everything you need to change is marked with `[BRACKETS]` in the code.
Open the files below in any text editor (Notepad, TextEdit, VS Code, etc.)
and search for these markers:

| What to change | Where |
|---|---|
| `[Her Name]` / `[Your Name]` | `index.html` (appears several times) |
| The 5 timeline stories | `index.html` — search `TIMELINE ITEM` |
| Photo captions | `index.html` — search `POLAROID` |
| The 6 "reasons I love you" | `index.html` — search `REASON` |
| Your real love letter | `js/main.js` — the `LOVE_LETTER` constant near the top |
| The date you got together (powers the counter) | `js/main.js` — the `START_DATE` constant near the top |
| Closing message on the final page | `index.html` — the `#finale` section near the bottom |

### Adding real photos
1. Put your image files in `assets/images/` (e.g. `beach-trip.jpg`).
2. In `index.html`, find the polaroid or timeline photo you want to replace —
   it currently looks like:
   ```html
   <div class="polaroid-photo placeholder-photo">Photo 1</div>
   ```
3. Replace it with:
   ```html
   <div class="polaroid-photo" style="background-image: url('assets/images/beach-trip.jpg');"></div>
   ```

### Adding background music
1. Put an mp3 file in `assets/music/` (e.g. `our-song.mp3`).
2. In `index.html`, find:
   ```html
   <source src="assets/music/our-song.mp3" type="audio/mpeg">
   ```
   and update the filename to match your file.
3. Music starts when she clicks "Begin Our Journey," or she can toggle it
   anytime with the 🎵 button in the top right. (Browsers block autoplay
   with sound until there's a click, which is why it's tied to a button.)

---

## 2. Preview it locally

Just double-click `index.html` to open it in your browser. Everything —
animations, counter, confetti — works fully offline except the Google
Fonts and the AOS/canvas-confetti libraries, which load from the internet.

---

## 3. Deploy to GitHub Pages (free, shareable link)

1. Create a free GitHub account if you don't have one, and create a new
   repository (e.g. `our-anniversary`).
2. Upload this whole folder's contents to that repository (drag and drop
   works fine on github.com, or use `git push` if you're comfortable with git).
3. In the repository, go to **Settings → Pages**.
4. Under "Source," select the `main` branch and `/ (root)` folder, then save.
5. GitHub will give you a live link, usually:
   `https://your-username.github.io/our-anniversary/`
6. Open that link yourself first to check everything looks right, then
   send it to her!

---

## Project structure

```
anniversary-website/
├── index.html          → all 7 sections/pages
├── css/
│   ├── style.css       → theme, colors, layout
│   ├── animations.css  → keyframes, page-turn effect
│   └── responsive.css  → mobile/tablet adjustments
├── js/
│   ├── main.js         → love letter text, start date, counter, AOS init
│   ├── timeline.js     → scroll-fill line on the timeline
│   ├── gallery.js      → polaroid tap-to-focus
│   └── effects.js      → loader, floating hearts, music, confetti
├── assets/
│   ├── images/         → put your photos here
│   ├── music/          → put your song here
│   ├── videos/         → optional, unused by default
│   └── icons/          → optional, unused by default
└── README.md            → this file
```

Made with love. Happy anniversary! ❤️
