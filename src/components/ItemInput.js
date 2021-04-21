import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/addItem";
import { Accordion, Card, Button } from "react-bootstrap";

class ItemInput extends Component {
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
    this.props.addItem(this.state, this.props.account.id);
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
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Create an Item
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
                    name="image_url"
                    value={this.state.image_url}
                    onChange={this.handleChange}
                  />
                  <br />
                  <input type="submit" />
                </form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <br />
      </div>
    );
  }
}

export default connect(null, { addItem })(ItemInput);
