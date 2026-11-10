# Habitat refinement verification

Illustrative procedural reef, not a surveyed dive or a report on current reef condition.

- All four habitat entry/encounter screens, drag and Reset hold: 390 and 1440, reduced and normal motion.
- 320 reduced motion: four habitats, 44px control and16px label floors, no overflow.
- Navigation strip swipe changes exactly one habitat; arrow navigation, dialog Escape, sound-off default.
- Glyph-mask comparison against actual hidden-ink backdrops: 104 samples over390/1440 and all habitats, minimum8.942:1. This is per-glyph worst sampled backdrop, not a page average.
- Actual app-destination audio captured for10seconds: mean-33.8dB, peak-22.1dB, no clipping. Listening quality remains unverified.
- Self-hosted fonts and included OFL licenses.

Run `npm ci --ignore-scripts && npm run check && npm test`. `WIDTHS`, `MOTIONS`, `CHAPTERS`, `OUT` select bounded test jobs. CI runs three widths in each motion setting. Browser evidence is generated, not checked into source.
