import type { Component } from 'solid-js';
import { Game, Header, Score } from './components';

const App: Component = () => {
  return (
    <div>
      <Score />
      <Header />
      <Game />
    </div>
  );
};

export default App;
