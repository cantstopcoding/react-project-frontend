import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";

import { deleteAccount } from "../actions/deleteAccount";

const Accounts = (props) => {
  const handleDelete = (account) => {
    // debugger;
    props.deleteAccount(account.id);
  };

  return (
    <div>
      {props.accounts.map(
        (account) => (
          <li key={account.id}>
            <Link to={`/accounts/${account.id}`}>{account.first_name}</Link>
            <button onClick={() => handleDelete(account)}>Delete</button>
          </li>
        )
        // <Account account={account}/>
      )}
    </div>
  );
};

export default connect(null, { deleteAccount })(Accounts);
