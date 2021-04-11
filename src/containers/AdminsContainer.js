import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchAdmins } from "../actions/fetchAdmins";
import AdminInput from "../components/AdminInput";
import Admins from "../components/Admins";
import Admin from "../components/Admins";

class AdminsContainer extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  render() {
    console.log("Admin CONTAINER", this.props.admins);
    return (
      <div>
        <Switch>
          <Route exact path="/admins/new" component={AdminInput} />
          <Route
            exact
            path="/admins/:id"
            render={(routerProps) => (
              <Admin {...routerProps} admins={this.props.admins} />
            )}
          />
          <Route
            exact
            path="/admins"
            render={(routerProps) => (
              <Admins {...routerProps} admins={this.props.admins} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    admins: state.adminReducer.admins,
  };
};

export default connect(mapStateToProps, { fetchAdmins })(AdminsContainer);
