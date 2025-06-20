import React, { Component } from 'react';
import GitHub from './GitHub';
import GitHubUser from './GitHubUser';
import Dessert from './Dessert';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import Contact from './Contact';
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      //specify which routes render which components
      <BrowserRouter>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/github">GitHub</Nav.Link>
                <Nav.Link href="/dessert">Table</Nav.Link>
                <Nav.Link href="/contacts">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/github/user/:login/:id" component={GitHubUser} />
            <Route path="/github" component={GitHub} />
            <Route exact path="/" component={Home} />
            <Route exact path="/dessert" component={Dessert} />
            <Route exact path="/contacts" component={Contact} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
//http://localhost:3000/github/user/J4d4-M4thele/102987102

class Home extends Component {
  render() {
    return (
      <div style={styles.homeStyle}>
        <h1>Welcome to my react app</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

class NotFound extends Component {
  render() {
    return <div style={styles.homeStyle}>Not Found</div>
  }
}
export default App;

const styles = {
  homeStyle: {
    color: "darkPurple",
    backgroundColor: "darkBlue"
  }
}