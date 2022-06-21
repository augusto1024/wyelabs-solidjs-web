import { JSX } from 'solid-js/jsx-runtime';
import { Image, Options } from '.';

export const Game = (): JSX.Element => {
  return (
    <div class="game">
      <Image />
      <Options />
    </div>
  );
};
