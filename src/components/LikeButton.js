import React from "react";

class LikeButton extends React.Component {
  state = {
    number: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  incrementNumber = (event, state) => {
    console.log(event.target.innerText);
    const innerText = parseInt(event.target.innerText);
    const stateNumber = parseInt(state.number);

    if (isNaN(stateNumber)) {
      return event.target.innerText;
    } else {
      return (event.target.innerText = innerText + stateNumber);
    }
  };

  render() {
    return (
      <div>
        <br />
        <button onClick={(e) => this.incrementNumber(e, this.state)}>
          0
        </button>{" "}
        <br />
        Increment By:
        <input
          value={this.state.number}
          name="number"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default LikeButton;
