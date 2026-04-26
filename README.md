# Weaves E-Commerce UX Proposal

A single-page interactive prototype for **Weaves**, submitted as part of the **E-Commerce Application Development** internship challenge. **ThreadPath** is a proposed end-to-end shopping experience for fabric and apparel: guided discovery, richer product inspection, and flows aimed at conversion and repeat purchase.

This repository is a **front-end demonstration only** (no backend, no real checkout). Interactions use lightweight JavaScript for prototyping purposes.

---

## What this prototype shows

| Area | Description |
|------|-------------|
| **Smart Fabric Finder** | A short guided quiz (occasion, feel, colour story) leading to a curated results grid. |
| **Texture Explorer** | A weave grid with a magnifier lens; supports mouse and touch. Swatches update the pattern colours. |
| **Colour Stories** | Browsing framed as narrative colour collections rather than flat filters. |
| **Product detail** | Tabbed content (details, care, story), variants, quantity, and add-to-cart toasts. |
| **Occasion tagging & reorder** | Filterable order history mock-up with reorder actions. |
| **Checkout** | Sample delivery form, payment method selection, and order summary. |
| **Proposal summary** | Six feature pillars and impact framing for stakeholders. |

The page is **responsive**: layouts adapt from large desktops down to narrow phones, with a collapsible navigation menu on smaller viewports.

---

## Tech stack

- **HTML5** — Semantic structure, in-page anchors, ARIA on the mobile menu toggle.
- **CSS3** — Custom properties, grid/flex layouts, media queries (`1024px`, `768px`, `640px`, `480px`), focus-visible styles.
- **Vanilla JavaScript** — No frameworks; global handlers for the demo (`script.js`).

Fonts are loaded from **Google Fonts** (Playfair Display, DM Sans, DM Mono).

---

## How to run locally

You do not need a build step.

1. Clone or download this folder.
2. Open **`index.html`** in a modern browser (Chrome, Firefox, Safari, Edge).

Then open `http://localhost:8080` in your browser.

---

## Project structure

```
weaves-challenge/
├── index.html    # Full-page layout and content
├── style.css     # Global styles and responsive rules
├── script.js     # Interactivity (finder, tabs, magnifier, nav, toasts, etc.)
└── README.md     # This file
```

---

## Browser and accessibility notes

- **JavaScript must be enabled** (the invalid script tag issue has been fixed; `script.js` loads at the end of the document).
- **Keyboard**: Primary controls support `:focus-visible` outlines.
- **Touch devices**: The Texture Explorer uses `touch-action: none` on the canvas wrapper and touch event listeners so the magnifier can follow a finger.

---

## Submission context

Prepared for **Weaves Corporation Limited** — intern application track in **E-Commerce Application Development**. The deliverable aligns with the brief: a concrete UI/UX concept that could **increase engagement, reduce friction**, and support **sales and retention** in an online fabric retail context.

---

## Licence / use

This work is a **portfolio and application sample**. Brand name **Weaves** is used in the context of the stated hiring challenge; replace or adapt copy if you reuse the layout for other purposes.
