import React from "react";
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
        {account ? account.firstName : null} {account ? account.lastName : null}{" "}
        - {account ? account.username : null}
      </h2>
      <AccountEdit account={account} />
      <br />
      <ItemsContainer account={account} />
    </div>
  );
};

export default Account;
