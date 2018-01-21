import React, { Component } from 'react';
import MedalCount from './containers/MedalCount';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{maxWidth: "600px"}}>
          <MedalCount
            element_id="medals"
            sort="total"/>
        </div>
      </div>
    );
  }
}

export default App;
