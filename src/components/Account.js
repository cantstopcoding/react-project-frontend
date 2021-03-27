import React from 'react';
import {Redirect} from 'react-router-dom';
import AccountEdit from './AccountEdit'

import TransactionsContainer from '../containers/TransactionsContainer';

const Account = (props) => {
    // let account = props.accounts[props.match.params.id - 1]
    console.log('ACCOUNT PROPS', props)
    let account = props.accounts.filter(account => {
        console.log('MATCH ID', account.id)
        return `${account.id}` == props.match.params.id})[0]
    console.log('ACCOUNT', account)

    return (
        <div>
            <h2>
                {account ? account.name : null} - {account ? account.balance : null}
            </h2>
            <TransactionsContainer account={account} /><br/>
            <h3>Edit Account:</h3>
            <AccountEdit account={account}/>
        </div>
    )
}
Account.defaultProps = {
    accounts: []
}

export default Account 