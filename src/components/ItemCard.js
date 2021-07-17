import React, { Component } from "react";
import { Card } from "react-bootstrap";
import ItemEditOnAccount from "./ItemEditOnAccount";

export default class ItemCard extends Component {
  state = {
    number: "0",
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
              {this.state.number}
            </button>
            <ItemEditOnAccount item={this.props.item} />
          </Card.Body>
        </Card>
      </div>
    );
  }
}
