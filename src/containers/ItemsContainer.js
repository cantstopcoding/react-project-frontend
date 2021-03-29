import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchItems } from "../actions/fetchItems";
import Items from "../components/Items";
import Item from "../components/Item";

class ItemsContainer extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/items/:id"
            render={(routerProps) => (
              <Item {...routerProps} items={this.props.items} />
            )}
          />
          <Route
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
  };
};

export default connect(mapStateToProps, { fetchItems })(ItemsContainer);
