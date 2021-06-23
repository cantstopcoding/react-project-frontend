import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteAccount } from "../actions/deleteAccount";

class Accounts extends React.Component {
  handleDelete = (account) => {
    this.props.deleteAccount(account.id);
  };

  render() {
    return (
      <div>
        {this.props.accounts.map((account) => (
          <li key={account.id}>
            <Link to={`/accounts/${account.id}`}>{account.firstName}</Link>
            <button onClick={() => this.handleDelete(account)}>Delete</button>
          </li>
        ))}
      </div>
    );
  }
}

export default connect(null, { deleteAccount })(Accounts);
