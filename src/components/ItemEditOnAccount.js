import React, { Component } from "react";
import { connect } from "react-redux";
import { editItemOnAccount } from "../actions/editItemOnAccount";

class ItemEditOnAccount extends React.Component {
  state = {
    name: "",
    image_url: "",
    description: "",
    price: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // debugger;

    // this.props.editItemOnAccount(account.id, item.id);
    // this.props.editItemOnAccount(
    //   this.props.item.account_id,
    //   this.props.item.id
    // );
    let item = {
      ...this.state,
      account_id: this.props.item.account_id,
      id: this.props.item.id,
    };
    this.props.editItemOnAccount(item);
    // let account = { ...this.state, id: this.props.account.id };
    this.setState({
      name: "",
      image_url: "",
      description: "",
      price: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Edit Item:</h3>
          <label>Name: </label>
          <input
            type="text"
            placeholder="Name"
            value={this.state.first_name}
            name="name"
            onChange={this.handleChange}
          />
          <br />
          <label>Image Url: </label>
          <input
            type="text"
            placeholder="Image Url"
            value={this.state.last_name}
            name="image_url"
            onChange={this.handleChange}
          />
          <br />
          <label>Description: </label>
          <input
            type="text"
            placeholder="Description"
            value={this.state.username}
            name="description"
            onChange={this.handleChange}
          />
          <br />
          <label>Price: </label>
          <input
            type="text"
            placeholder="Price"
            value={this.state.price}
            name="price"
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { editItemOnAccount })(ItemEditOnAccount);
