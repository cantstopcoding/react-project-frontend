import React from "react";
import { connect } from "react-redux";
import AccountsContainer from "./containers/AccountsContainer";
import { Jumbotron } from "./components/Jumbotron";
import Navigation from "./components/Navigation";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Jumbotron />
        <AccountsContainer />
      </div>
    );
  }
}

export default connect()(App);
