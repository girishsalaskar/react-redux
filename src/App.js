import React, { Component } from 'react';
import './App.css';
import NewComp from './NewComp';

class App extends Component {
  constructor(props) {
    super(props);
    this.style = {
      fontStyle: 'bold',
      color:'teal'
    }
  }
  render() {
    return (
      <div className="App">
        <h1 style={this.style}>Welcome</h1>
        <NewComp></NewComp>
      </div>
    );
  }
}

export default App;
