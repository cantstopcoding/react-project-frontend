import React from 'react';
import {Redirect} from 'react-router-dom';

const Account = (props) => {
    let account = props.accounts[props.match.params.id - 1]
    console.log(account)

    return (

        <h2>
            {account ? account.name : null} - {account ? account.balance : null}
        </h2>
    )
}
export default Account 