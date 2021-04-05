import React from "react";
import AccountEdit from "./AccountEdit";
import {fetchAccount} from '../actions/fetchAccount'
import {connect} from 'react-redux';    


import TransactionsContainer from "../containers/TransactionsContainer";

const Account = (props) => {
  // let account = props.accounts[props.match.params.id - 1]
  let account = props.accounts.filter(
    // match.params.id is a string, not a number!!!
    (account) => `${account.id}` == props.match.params.id
  )[0];

  React.useEffect(() => {
    handleSetAccount()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSetAccount = () => {
    let account = props.match.params.id
    props.fetchAccount(account)
    debugger
    localStorage.setItem("accountID", account)
}

  return (
    <div>
      <h2>
        {account ? account.name : null} - {account ? account.balance : null}
      </h2>
      <TransactionsContainer account={account} />
      <br />
      <h3>Edit Account:</h3>
      <AccountEdit account={account} />
    </div>
  );
};

export default connect(null, {fetchAccount})(Account)