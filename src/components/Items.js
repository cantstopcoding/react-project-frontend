import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../actions/deleteItem";
import { CardDeck } from "react-bootstrap";
import ItemCard from "./ItemCard";

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
            value={this.state.number}
            name="number"
            onChange={this.handleChange}
          />
        </div>

        <h2>My Items:</h2>

        <div>
          <CardDeck style={{ display: "flex", flexDirection: "row" }}>
            {this.props.items &&
              this.props.items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
          </CardDeck>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteItem })(Items);
