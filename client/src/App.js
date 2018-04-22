import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  testRequest() {
    axios.get('/test')
      .then(res => {
        console.log(res.data);
      });
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
        <button onClick={this.testRequest}>Test Request</button>
      </div>
    );
  }
}

export default App;
