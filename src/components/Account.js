import React from "react";
import { Redirect } from "react-router-dom";
import AccountEdit from "./AccountEdit";

import ItemsContainer from "../containers/ItemsContainer";

const Account = (props) => {
  // let account = props.accounts[props.match.params.id - 1]
  let account = props.accounts.filter(
    // match.params.id is a string, not a number!!!
    (account) => `${account.id}` == props.match.params.id
  )[0];

  return (
    <div>
      <h2>
        {account ? account.name : null} - {account ? account.balance : null}
      </h2>
      <ItemsContainer account={account} />
      <br />
      <h3>Edit Account:</h3>
      <AccountEdit account={account} />
    </div>
  );
};

export default Account;
