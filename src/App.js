import React, { Component } from 'react';
import './index.css';
import Todolist from './components/Todolist';

class App extends Component {
  render() {
    return (
      <div className="todo-app">
        <Todolist />
      </div>
    );
  }
}

export default App;