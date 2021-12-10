import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteAccount } from "../actions/deleteAccount";

const Accounts = (props) => {
  function handleDelete(account) {
    props.deleteAccount(account.id);
  }

  return (
    <>
      {props.accounts.map((account) => (
        <li key={account.id}>
          <Link to={`/accounts/${account.id}`}>{account.firstName}</Link>
          <button onClick={() => handleDelete(account)}>Delete</button>
        </li>
      ))}
    </>
  );
};

export default connect(null, { deleteAccount })(Accounts);
