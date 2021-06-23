import React from "react";
import AccountEdit from "./AccountEdit";
import { Route } from "react-router-dom";
import NoMatch from "../components/NoMatch";

import ItemsContainer from "../containers/ItemsContainer";

const Account = (props) => {
  let account = props.accounts.filter(
    (account) => `${account.id}` == props.match.params.id
    // match.params.id is a string, not a number!!!
  )[0];

  return (
    <div>
      {account ? (
        <div>
          <h2>
            {account.firstName} {account.lastName} - {account.username}
          </h2>
          <AccountEdit account={account} />
          <ItemsContainer account={account} />
        </div>
      ) : (
        <Route component={NoMatch} />
      )}
    </div>
  );
};

export default Account;
