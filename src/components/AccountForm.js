import React from "react";
import { connect } from "react-redux";
import { addAccount } from "../actions/addAccount";
import { editAccount } from "../actions/editAccount";

class AccountForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
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

    if (window.location.href === "http://localhost:3001/accounts/new") {
      this.props.addAccount(this.state);
    } else {
      let account = { ...this.state, id: this.props.account.id };
      this.props.editAccount(account);
    }

    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>First Name: </label>
        <input
          type="text"
          placeholder="First Name"
          value={this.state.firstName}
          name="firstName"
          onChange={this.handleChange}
        />
        <br />
        <label>Last Name: </label>
        <input
          type="text"
          placeholder="Last Name"
          value={this.state.lastName}
          name="lastName"
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
    );
  }
}

export default connect(null, { addAccount, editAccount })(AccountForm);
