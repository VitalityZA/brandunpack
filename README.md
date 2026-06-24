# BrandUnpack — Website

Complete, self-contained website. Everything it needs is inside this folder.
Fully responsive — works on phones, tablets, and desktop.

## A) Add your images
Open `images/` and read `images/README.txt`. Drop in correctly-named .jpg files
(`sw1.jpg`, `rr1.jpg`, `header1.jpg`, …) and they appear automatically. Until
then, colored placeholders show a hint of which file goes where.

## B) Preview on your computer
You CANNOT double-click `index.html` (browsers block how it loads its code from a
local file — you'd get a blank page). Serve it instead:

- **VS Code (easiest):** install the free "Live Server" extension, open this
  folder, right-click `index.html` → "Open with Live Server".
- **Terminal (Mac built-in):** `cd` into this folder, run
  `python3 -m http.server 8000`, then visit http://localhost:8000

To preview mobile: in the browser, open DevTools (F12) → click the
phone/tablet icon to toggle device sizes.

## C) Put it on GitHub (replace your current site)
1. Copy ALL contents of this folder into your repo root (so `index.html` is at
   the root with `assets/`, `tokens/`, `images/`, and the `.jsx` files).
2. In GitHub Desktop: Commit to main → Push origin. Live in ~1 min.
3. One-time: github.com → repo → Settings → Pages → Deploy from branch `main`,
   folder `/ (root)`.

Your `images/` folder then lives on your desktop (via GitHub Desktop) — drop new
images in, commit, push, and the live site updates.

## D) Contact form
Already wired to your Formspree (form xwvdveon). Submissions — name, email,
selected services, budget, and the message — arrive in your Formspree inbox.
Includes validation + error handling.

## Notes
- Fonts load from Google Fonts (needs internet). Free and standard.
- The brand "Broxa" font is shipped as outlined SVG in the logo, so no font file
  is needed. Headings use Poppins as the closest match.
