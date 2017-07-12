import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Stats from './Stats';
import EndTurn from './EndTurn';
import Research from './Research';
import Choices from './Choices';
import ToggleInfo from './ToggleInfo';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
      <div>
          <h2>Welcome to Jem's Civilization</h2>
          <ToggleInfo />
          <Stats />
          <Choices />
          <Research />
          <EndTurn />
      </div>
        </Provider>
    );
  }
}

export default App;
