import React, { Component } from "react";
import { connect } from "react-redux";
import { editAdmin } from "../actions/editAdmin";

class AdminEdit extends React.Component {
  state = {
    name: "",
    balance: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let admin = { ...this.state, id: this.props.admin.id };
    this.props.editAdmin(admin);
    this.setState({
      name: "",
      balance: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Checking Admin Name: </label>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
          <br />
          <label>Checking Admin Balance: </label>
          <input
            type="text"
            placeholder="Balance"
            value={this.state.balance}
            name="balance"
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { editAdmin })(AdminEdit);
