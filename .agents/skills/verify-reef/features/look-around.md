# Look around

Explore the whole reef by dragging the water or pressing arrow keys.

## Sub-features

Pointer rotation; unbounded azimuth; keyboard rotation; four quadrants.

## How to get to it (user POV)

Open the world. Drag its water. Focus the canvas and use arrow keys.

## Driving it with Playwright

Preconditions: the correct Reef page has loaded with WebGL working.

Run `npm run verify`. It drags the canvas by 262 pixels for each quarter-turn at 390 and 1365 widths. The compass changes and screenshots show different surrounding colonies. Focus `canvas`, press ArrowRight and require a changed compass value.

## Gotchas

Each quarter-turn is about 90 degrees. A static screenshot alone does not prove a pointer path. Software rendering is not a performance benchmark.
