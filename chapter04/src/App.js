import React, { Component } from 'react';
import Products from './Products';

class App extends Component {
  render() {
    return (
      <div className='App' style={styles.h1Style}>
        <h1>Learning React: Chapter 4</h1>
        <Products />
      </div>
    );
  }
}

export default App;
const styles = {
  h1Style: {
    color: "blue",
    backgroundColor: "beige",
    textAlign: "center"
  }
}
