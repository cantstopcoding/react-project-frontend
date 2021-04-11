import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAccounts } from "../actions/fetchAccounts";
import { Switch, Route } from "react-router";
import ItemInput from "../components/ItemInput";
import Items from "../components/Items";
import Item from "../components/Item";
import { fetchItem } from "../actions/fetchItem";

class ItemsContainer extends Component {
  componentDidMount() {
    this.props.fetchItem(1, 1);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/accounts/:id">
            <div>
              <ItemInput account={this.props.account} />
              <Items items={this.props.account && this.props.account.items} />
            </div>
          </Route>
          <Route
            exact
            path="/accounts/:id/items/:id"
            render={(routerProps) => {
              return (
                <div>
                  hiiiii
                  <Item {...routerProps} item={this.props} />
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.accountReducer);
  return {
    item: state.accountReducer.items,
  };
};

export default connect(mapStateToProps, { fetchItem })(ItemsContainer);
