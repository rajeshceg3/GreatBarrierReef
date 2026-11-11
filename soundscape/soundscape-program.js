/* Great Barrier Reef soundscape: what the water holds, not the name.
 * Reef flat: snapping-shrimp crackle, grazing scrapes, bubbles over a low swell.
 * Turtle passage: slow water movement, sparse bubbles. Outer edge: deep blue
 * rumble, a distant outboard passing above. Spawning night: hushed water,
 * dense crackle, soft rising bubbles. All synthesis, no samples. */

import {
  rumble, crackle, bubbles, scrapes, streamBed, distantEngine, lapping,
} from '../soundscape/soundscape-layers.js';

const S = 12, SEED = 7103;
const mk = (render, seconds = S) => ({ render, seconds });

export default {
  defaultScene: 'reefFlat',
  layers: {
    lowSwell: mk((c) => rumble(c, { gain: 0.5, swellSec: 9, seed: SEED + 1 })),
    shrimp: mk((c) => crackle(c, { density: 70, gain: 0.16, seed: SEED + 2 })),
    shrimpNight: mk((c) => crackle(c, { density: 120, gain: 0.13, seed: SEED + 3 })),
    graze: mk((c) => scrapes(c, { count: 8, gain: 0.16, seed: SEED + 4 })),
    bubbleStream: mk((c) => bubbles(c, { count: 20, gain: 0.12, seed: SEED + 5 })),
    slowWater: mk((c) => lapping(c, { gain: 0.3, period: 3.4, depth: 0.5, seed: SEED + 6 })),
    currentWash: mk((c) => streamBed(c, { gain: 0.22, period: 0.5, depth: 0.35, seed: SEED + 7 })),
    deepBlue: mk((c) => rumble(c, { gain: 0.65, swellSec: 13, seed: SEED + 8 })),
    boatAbove: mk((c) => distantEngine(c, { f: 61, gain: 0.09, periodSec: 30, seed: SEED + 9 })),
    hush: mk((c) => lapping(c, { gain: 0.18, period: 5.2, depth: 0.4, seed: SEED + 10 })),
  },
  scenes: {
    reefFlat: [
      { layer: 'lowSwell', gain: 0.5 }, { layer: 'shrimp', gain: 0.8 },
      { layer: 'graze', gain: 0.7 }, { layer: 'bubbleStream', gain: 0.5 },
      { layer: 'currentWash', gain: 0.35 },
    ],
    turtlePassage: [
      { layer: 'slowWater', gain: 0.6 }, { layer: 'lowSwell', gain: 0.3 },
      { layer: 'bubbleStream', gain: 0.35 }, { layer: 'shrimp', gain: 0.25 },
    ],
    outerEdge: [
      { layer: 'deepBlue', gain: 0.7 }, { layer: 'boatAbove', gain: 0.6 },
      { layer: 'shrimp', gain: 0.12 }, { layer: 'currentWash', gain: 0.2 },
    ],
    spawningNight: [
      { layer: 'hush', gain: 0.5 }, { layer: 'shrimpNight', gain: 0.6 },
      { layer: 'bubbleStream', gain: 0.3 }, { layer: 'deepBlue', gain: 0.25 },
    ],
  },
};
