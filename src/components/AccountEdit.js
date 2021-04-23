import React, { Component } from "react";
import { connect } from "react-redux";
import { editAccount } from "../actions/editAccount";
import { Accordion, Card, Button } from "react-bootstrap";

class AccountEdit extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let account = { ...this.state, id: this.props.account.id };
    this.props.editAccount(account);
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
    });
  };

  render() {
    return (
      <div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Edit Account
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <form onSubmit={this.handleSubmit}>
                  <label>First Name: </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={this.state.firstName}
                    name="firstName"
                    onChange={this.handleChange}
                  />
                  <br />
                  <label>Last Name: </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    name="lastName"
                    onChange={this.handleChange}
                  />
                  <br />
                  <label>Username: </label>
                  <input
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    name="username"
                    onChange={this.handleChange}
                  />
                  <br />
                  <label>Email: </label>
                  <input
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    name="email"
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

export default connect(null, { editAccount })(AccountEdit);
