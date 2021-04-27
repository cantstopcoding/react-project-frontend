import React from "react";
import AccountEdit from "./AccountEdit";
import { Route } from "react-router-dom";
import NoMatch from "../components/NoMatch";

import ItemsContainer from "../containers/ItemsContainer";

const Account = (props) => {
  let account = props.accounts.filter(
    // match.params.id is a string, not a number!!!
    (account) => `${account.id}` == props.match.params.id
  )[0];

  return (
    <div>
      <h2>
        {account ? account.firstName : <Route component={NoMatch} />}{" "}
        {account ? account.lastName : null} -{" "}
        {account ? account.username : null}
      </h2>
      {account ? <AccountEdit account={account} /> : null}
      <br />
      {account ? <ItemsContainer account={account} /> : null}
    </div>
  );
};

export default Account;
