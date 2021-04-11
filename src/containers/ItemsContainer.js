import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions/fetchAdmins";
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
          <Route exact path="/admins/:id">
            <div>
              <ItemInput admin={this.props.admin} />
              <Items items={this.props.admin && this.props.admin.items} />
            </div>
          </Route>
          <Route
            exact
            path="/admins/:id/items/:id"
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
  console.log(state.adminReducer);
  return {
    item: state.adminReducer.items,
  };
};

export default connect(mapStateToProps, { fetchItem })(ItemsContainer);
