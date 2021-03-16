import React from 'react-redux';
import TransactionInput from './TransactionInput';
import {connect} from 'react-redux'
import {deleteTransaction} from '../actions/deleteTransaction'

const Transactions = (props) => {
    console.log(props.transactions)
    
    const handleDelete = (transaction) => {
        // debugger
        props.deleteTransaction(transaction.id, transaction.account_id)
    }

    return (
        <div>
            <div>
                {props.transactions && props.transactions.map( transaction =>
                    <li key={transaction.id}>{transaction.kind} - {transaction.amount}  <button onClick={() => handleDelete(transaction)}>Delete</button></li>
                )}
            </div>
        </div>
    )
}

export default connect(null, {deleteTransaction})(Transactions)