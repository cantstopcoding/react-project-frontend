import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../actions/deleteItem";
import ItemEditOnAccount from "./ItemEditOnAccount";
import { Card, CardDeck } from "react-bootstrap";

class Items extends React.Component {
  state = {
    number: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleDelete = (item) => {
    this.props.deleteItem(item.id, item.accountId);
  };

  // list to when button is clicked
  // input for the number that was enter
  // add number to the button
  // if all numbers are incrementing, you might want to make a new component

  // make a new component
  // import the value of that input into the this.props and add the the value of that to incrementNumber
  incrementNumber = (event, state) => {
    console.log(event.target.innerText);
    const html = parseInt(event.target.innerText);
    const stateNumber = parseInt(state.number);

    if (isNaN(stateNumber)) {
      return event.target.innerText;
    } else {
      return (event.target.innerText = html + stateNumber);
    }
  };
  render() {
    return (
      <div>
        <div>
          Increment By:
          <input
            value={this.state.name}
            name="number"
            onChange={this.handleChange}
          />
        </div>

        <h2>My Items:</h2>

        <div>
          <CardDeck style={{ display: "flex", flexDirection: "row" }}>
            {this.props.items &&
              this.props.items.map((item) => (
                <div key={item.id}>
                  <Card style={{ width: "21.5rem", height: "97.5%" }}>
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      Price: ${item.price}
                      <br />
                      Description: {item.description}
                      <br />
                      <button onClick={() => this.handleDelete(item)}>
                        Delete
                      </button>
                      <button
                        onClick={(e) => this.incrementNumber(e, this.state)}
                      >
                        0
                      </button>
                      <ItemEditOnAccount item={item} />
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </CardDeck>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteItem })(Items);
