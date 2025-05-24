import React, { Component } from 'react';
// import Products from './Products';
import JumboTronComponent from './JumboTronComponent';
import Task from "./taskTest";

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <Products /> */}
        <JumboTronComponent>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </JumboTronComponent>
        <Task />
      </div>
    );
  }
}

export default App;
