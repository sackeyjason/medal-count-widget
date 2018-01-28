import React, { Component } from 'react';
import MedalCount from './containers/MedalCount';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{
          maxWidth: "400px",
          margin: "1em auto"}}>
          <MedalCount
            sort="gold" />
        </div>
      </div>
    );
  }
}

export default App;
