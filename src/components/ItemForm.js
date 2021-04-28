import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
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
        accountId: this.props.item.accountId,
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
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                {this.props.account ? "Create Item" : "Edit Item"}{" "}
                {/* Edit Item: */}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
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
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default connect(null, { addItem, editItemOnAccount })(ItemForm);
