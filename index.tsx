import React, { Component } from 'react';
import { render } from 'react-dom';
import Player from './Player';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Player name="Joueur 1" />
        <Player name="Joueur 2" />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
