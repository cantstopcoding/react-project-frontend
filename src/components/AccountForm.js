import React from "react";

const AccountForm = () => {
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
  </form>;
};

export default AccountForm;
