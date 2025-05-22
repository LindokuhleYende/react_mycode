import React, { Component } from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';
import Rating from './Rating';

class App extends Component {
  render() {
    const isValid = true;
    return (
      <div style={styles.h1Style}>
        <h1>Learning React: Chapter3</h1>
        <Button variant="primary" disabled={!isValid}>Default</Button>

        <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" />
        <br />
        <hr />
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
