import { JSX } from 'solid-js/jsx-runtime';
import globalScore from '../states/score';

export const Score = (): JSX.Element => {
  const [score] = globalScore;

  return (
    <p class="score">
      Score: {score().correct}/{score().total}
    </p>
  );
};
