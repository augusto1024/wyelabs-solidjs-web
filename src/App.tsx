import type { Component } from 'solid-js';
import { Game, Header } from './components';

const App: Component = () => {
  return (
    <div>
      <Header />
      <Game />
    </div>
  );
};

export default App;
