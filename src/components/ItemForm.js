import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/addItem";
import { editItemOnAccount } from "../actions/editItemOnAccount";

class ItemForm extends Component {
  state = {
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.props.account) {
      this.props.addItem(this.state, this.props.account.id);
    } else {
      let item = {
        ...this.state,
        account_id: this.props.item.account_id,
        id: this.props.item.id,
      };
      this.props.editItemOnAccount(item);
    }

    this.setState({
      name: "",
      description: "",
      price: "",
      imageUrl: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <label>Description:</label>
          <br />
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <br />
          <label>Price:</label>
          <br />
          <input
            type="text"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <br />
          <label>Image Url:</label>
          <br />
          <input
            type="text"
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addItem, editItemOnAccount })(ItemForm);
