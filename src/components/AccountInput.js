import React, { Component } from "react";
import { connect } from "react-redux";
import { addAccount } from "../actions/addAccount";

class AccountInput extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addAccount(this.state);
    this.setState({
      first_name: "",
      last_name: "",
      username: "",
      email: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>First Name: </label>
          <input
            type="text"
            placeholder="First Name"
            value={this.state.first_name}
            name="first_name"
            onChange={this.handleChange}
          />
          <br />
          <label>Last Name: </label>
          <input
            type="text"
            placeholder="Last Name"
            value={this.state.last_name}
            name="last_name"
            onChange={this.handleChange}
          />
          <br />
          <label>Username: </label>
          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            name="username"
            onChange={this.handleChange}
          />
          <br />
          <label>Email: </label>
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addAccount })(AccountInput);
