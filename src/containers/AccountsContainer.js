import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchAccounts } from "../actions/fetchAccounts";
import AccountInput from "../components/AccountInput";
import Accounts from "../components/Accounts";
import Account from "../components/Account";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { NoMatch } from "../components/NoMatch";
import { Layout } from "../components/Layouts";

class AccountsContainer extends Component {
  componentDidMount() {
    this.props.fetchAccounts();
  }

  render() {
    console.log("ACCOUNT CONTAINER", this.props.accounts);
    return (
      <div>
        <React.Fragment>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/accounts/new" component={AccountInput} />
              <Route
                exact
                path="/accounts/:id"
                render={(routerProps) => (
                  <Account {...routerProps} accounts={this.props.accounts} />
                )}
              />
              <Route
                exact
                path="/accounts"
                render={(routerProps) => (
                  <Accounts {...routerProps} accounts={this.props.accounts} />
                )}
              />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accountReducer.accounts,
  };
};

export default connect(mapStateToProps, { fetchAccounts })(AccountsContainer);
