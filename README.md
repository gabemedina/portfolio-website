# Alex Morgan Portfolio

A responsive, data-driven personal portfolio and résumé built with Vue 3, Vite, and plain CSS.

## Install and run

```bash
npm install
npm run dev
```

Vite prints the local address after the development server starts.

## Production build

```bash
npm run build
npm run preview
```

The production files are written to `dist/`.

## Customize the résumé

Almost all visible résumé content is stored in `src/data/resume.js`. Update the `personal`, `experience`, `education`, `projects`, `skills`, `certifications`, `awards`, and `interests` values there.

Place your PDF résumé in `public/` and make sure `personal.resumeUrl` matches its filename. Replace the example GitHub, LinkedIn, project, and demo URLs before publishing your own version.

## Add, remove, or reorder sections

The section order is defined by the `sections` computed value in `src/App.vue`, while the corresponding markup appears below it in the same file.

- To remove a data-driven section, leave its array empty; it will disappear from the navigation. Remove its `ResumeSection` block too if it will not return.
- To reorder a section, move both its entry in `sections` and its matching `ResumeSection` block.
- To add a section, add its data in `src/data/resume.js`, add an entry to `sections`, and render it with `ResumeSection`. Keep the ID values identical.

## Active section navigation

`src/composables/useActiveSection.js` uses `IntersectionObserver` to observe each résumé section. On desktop, the observer uses the independently scrolling right pane as its root. On smaller screens, it observes the normal page viewport. A narrow activation band near the top of the reading area keeps transitions stable at section boundaries without an expensive scroll listener.
