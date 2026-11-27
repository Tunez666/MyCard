# Tunez — Dark Fantasy Portfolio

A responsive personal landing page built with React, TypeScript, and Vite.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Personalize before publishing

Update the contact links in `src/App.tsx`:
- Replace `your.email@example.com` with your email address.
- Replace `your_telegram` with your Telegram username.

The portfolio currently links to public GitHub repositories under `Tunez666`.
The text is intentionally written in simple English and can be edited directly in `src/App.tsx`.

## Notes

- The background architecture and ember effects are CSS illustrations, so no large background image is required.
- Google Fonts are loaded remotely; the site falls back to system serif/sans-serif fonts if they are unavailable.
- The project respects `prefers-reduced-motion`.
