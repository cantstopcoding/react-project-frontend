import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import AccountsContainer from "./containers/AccountsContainer";
import Jumbotron from "./components/Jumbotron";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layouts";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Jumbotron />
        <AccountsContainer />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default connect()(App);
