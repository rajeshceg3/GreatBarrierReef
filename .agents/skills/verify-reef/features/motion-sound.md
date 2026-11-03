# Choose motion and sound

Pause ambient motion or enable soft locally generated water sound.

## Sub-features

Motion toggle; reduced-motion default; opt-in sound; hidden-tab audio pause.

## How to get to it (user POV)

Use the pause and musical-note controls in the upper corner. Set browser reduced motion before loading.

## Driving it with Playwright

Preconditions: the correct Reef page has loaded with WebGL working.

Run `npm run verify`. It toggles motion and sound through their accessible names and asserts aria-pressed. The reduced-motion run checks paused default and identical canvas pixels over 700 milliseconds after settling.

## Gotchas

Button state does not prove audible sound; listen in a normal browser. Reduced motion keeps direct camera exploration. The in-memory scene resets on reload.
