import React, { Component } from "react";
import { Card } from "react-bootstrap";
import ItemEditOnAccount from "./ItemEditOnAccount";

export default class ItemCard extends Component {
  state = {
    number: this.props.items,
    // whate is the state? the state should be the value of the like key in the api.
    // get the state.
  };

  incrementNumber(event) {
    this.setState({ number: parseInt(this.state.number) + 1 });
  }

  render() {
    return (
      <div key={this.props.item.id}>
        <Card style={{ width: "21.5rem", height: "97.5%" }}>
          <Card.Img variant="top" src={this.props.item.imageUrl} />
          <Card.Body>
            <Card.Title>{this.props.item.name}</Card.Title>
            Price: ${this.props.item.price}
            <br />
            Description: {this.props.item.description}
            <br />
            <button onClick={() => this.handleDelete(this.props.item)}>
              Delete
            </button>
            <button onClick={(e) => this.incrementNumber(e, this.state)}>
              {this.props.item.likes}
              {/* when an event happens, what kind of request do I want to make, and in what way do I want to manupulate the dom? */}
              {/* The event is the the click event */}
              {/* when the button is clicked, in the api, I want to add 1 to the like attribute in the api */}
              {/* I want to make a post request */}
              {/* and I want to manipulate the dom by changing the the number in the state.  */}
              {/* then i want to fetch that api and return the new account, with the updated likes attribute */}
            </button>
            <ItemEditOnAccount item={this.props.item} />
          </Card.Body>
        </Card>
      </div>
    );
  }
}
