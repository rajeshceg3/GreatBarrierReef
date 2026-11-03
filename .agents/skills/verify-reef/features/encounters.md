# Discover reef life

Follow a parrotfish, turtle or ray, or learn what spawning makes possible.

## Sub-features

Named invitations; real creature picking; return to scene.

## How to get to it (user POV)

Use the encounter invitation beneath each scene, or tap the visible creature.

## Driving it with Playwright

Preconditions: the correct Reef page has loaded with WebGL working.

Run `npm run verify`. It clicks `#encounter`, captures the changed heading and habitat, then clicks Return to the drift. Separately tap the visible turtle or parrotfish and require the same encounter text.

## Gotchas

Fish-school species have no encounter. Creature picking must be verified separately from invitation buttons. Artistic scenes do not promise real sightings.
