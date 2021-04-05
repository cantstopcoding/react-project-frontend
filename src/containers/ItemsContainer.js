import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchItems } from "../actions/fetchItems";
import { fetchAccount } from "../actions/fetchAccount";


import Items from "../components/Items";
import Item from "../components/Item";

class ItemsContainer extends Component {
 
  componentDidMount() {
    const accountID = localStorage.getItem("accountID")
    this.props.fetchItems();
    this.props.fetchAccount(accountID)
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/accounts/:id/items/:id"
            render={(routerProps) => {
             return <Item {...routerProps} items={this.props.items} />
            }}
          />
          <Route
            exact
            path="/items"
            render={(routerProps) => (
              <Items {...routerProps} items={this.props.items} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.itemReducer,
    account: state.accountReducer.account,
  };
};

export default connect(mapStateToProps, { fetchItems, fetchAccount })(ItemsContainer);
