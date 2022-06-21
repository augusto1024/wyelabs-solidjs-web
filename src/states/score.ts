import { createSignal } from 'solid-js';

const gameScore = createSignal({
  correct: 0,
  total: 0,
});

export default gameScore;
