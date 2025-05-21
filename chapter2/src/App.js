import React, { Component } from 'react';
import Products from './Products';
import Name from "./names";

class App extends Component {
  formatName(user) {
    return user.firstName + " " + user.lastName;
  };

  render() {
    const user = {
      firstName: "Lindokuhle",
      lastName: "Yende"
    };

    return (
      <div>
        {/* <h1>My First React App!</h1> */}
        <Products />
        <h1>Hi there, {this.formatName(user)}!</h1>
        <Name />
      </div>
    );
  }
}

export default App;
