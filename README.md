# Study rooms

The study room booking page for COMP2245 Tutorial 10. Everything works with a
mouse, but the page has more than twenty accessibility problems. Your job in
the tutorial's "Try it" section is to find and fix them.

## Setup

1. Clone this repository and `cd` into it.
2. Open `index.html` in Chrome. It doesn't need a server.

## What to do

1. Run Lighthouse (DevTools → Lighthouse → Accessibility) and the axe DevTools
   extension. Write down the score and the problems they report.
2. Put the mouse away. Press Tab from the top of the page and try to book
   Room B for tomorrow.
3. Turn on a screen reader (VoiceOver on macOS, NVDA or Narrator on Windows,
   Orca on Linux) and go through the page.
4. Fix `index.html`, `styles.css` and `app.js` until the tools report no
   problems and you can book a room with only the keyboard and with the
   screen reader on.

Use real HTML elements before reaching for ARIA. The tutorial has hints if you
get stuck.
