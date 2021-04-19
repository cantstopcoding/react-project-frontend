import React from "react";
import { connect } from "react-redux";
import AccountsContainer from "./containers/AccountsContainer";
import ItemsContainer from "./containers/ItemsContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { NoMatch } from "./components/NoMatch";
import { Layout } from "./components/Layouts";
import { Jumbotron } from "./components/Jumbotron";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AccountsContainer />
        <ItemsContainer />
        <Jumbotron />
        <React.Fragment>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </React.Fragment>
      </div>
    );
  }
}

export default connect()(App);
// export default App
