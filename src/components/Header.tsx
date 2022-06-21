import { JSX } from 'solid-js/jsx-runtime';
import WyeworksLogo from '../assets/logo.png';

export const Header = (): JSX.Element => (
  <header>
    <img src={WyeworksLogo} />
  </header>
);
