# Carolina Aloisio — Portfolio

Personal portfolio site, static HTML/CSS/JS. Ready to deploy on GitHub Pages.

## Structure

```
portfolio/
├── index.html                  # Home page
├── case-stewardship.html       # PROA analytics
├── case-ml-pipeline.html       # ML pipeline for R&D
├── case-system-gap.html        # Clinical system gap analysis
├── case-survey-dashboard.html  # Pet care survey & dashboard
├── case-pmbok.html             # PMBOK risk management
├── case-no-show.html           # No-show predictive scoring
├── css/
│   └── style.css               # Single stylesheet, theme variables
├── js/
│   └── theme.js                # Dark mode toggle
└── img/
    └── Cuadrado_tema.png       # Hero background (upload your own)
```

## Deployment to GitHub Pages

1. Put all these files at the root of your GitHub Pages repo (replace your existing `index.html`, `style.css`, etc.).
2. Make sure to upload `img/Cuadrado_tema.png` to the `img/` folder. The hero references it as background.
3. If you already had links to projects elsewhere (Power BI dashboard, GitHub repos), edit the `case-*.html` files to add them where it says "Stack" or add a custom section.
4. Update the email and LinkedIn URL in `index.html` (search for `caro.aloisio@example.com` and the LinkedIn `href="#"`).

## Theme

- Light by default
- Toggle button (top right) switches to dark
- Preference saved in localStorage and persists across sessions
- Respects `prefers-color-scheme` on first visit

## Editing case studies

Each case study HTML follows the same structure:
- Topbar (same across all pages)
- Case hero (title + one-liner + meta tags)
- Body with sections: Context, Problem, My role, Approach, Architecture/Diagram, Outcome, Industrial relevance, Stack
- Confidentiality footer (where applicable)

Diagrams are inline SVG with CSS variable-based theming (auto-adapts to dark mode).

## Adding a new case study

1. Copy any `case-*.html` as template
2. Update title, hero, tags, body content
3. Replace or update the inline SVG diagram
4. Add a new card in `index.html` linking to it
5. Update the case count in the "Selected work" header

## Fonts

Loaded from Google Fonts:
- Oxygen (300, 400, 700) — body and bold headlines
- Roboto (100, 300, 400, 500, 700) — UI labels, h2/h3, navigation

## Browser support

Modern evergreen browsers. No build step required.
