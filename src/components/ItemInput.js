import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/addItem";

class ItemInput extends Component {
  state = {
    kind: "",
    amount: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state, this.props.account.id);
    this.setState({
      kind: "deposit",
      amount: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Item Type:</label>
          <select
            name="kind"
            value={this.state.kind}
            onChange={this.handleChange}
          >
            <option>deposit</option>
            <option>withdraw</option>
          </select>
          <br />
          <label>Item Amount:</label>
          <input
            type="text"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addItem })(ItemInput);
