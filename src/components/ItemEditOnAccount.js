import React, { Component } from "react";
import { connect } from "react-redux";
import { editItemOnAccount } from "../actions/editItemOnAccount";

class ItemEditOnAccount extends React.Component {
  state = {
    name: "",
    description: "",
    price: "",
    image_url: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    let item = {
      ...this.state,
      account_id: this.props.item.account_id,
      id: this.props.item.id,
    };
    this.props.editItemOnAccount(item);
    this.setState({
      name: "",
      description: "",
      price: "",
      image_url: "",
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
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
          <br />
          <label>Image Url: </label>
          <input
            type="text"
            placeholder="Image Url"
            value={this.state.image_url}
            name="image_url"
            onChange={this.handleChange}
          />
          <br />
          <label>Description: </label>
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
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
