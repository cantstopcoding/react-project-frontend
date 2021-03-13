import React from 'react-redux';
import TransactionInput from './TransactionInput';

const Transactions = (props) => {
    console.log(props.transactions)
    
    return (
        <div>
            <div>
                {props.transactions && props.transactions.map( transaction =>
                    <li key={transaction.id}>{transaction.kind} - {transaction.amount}</li>
                )}
            </div>
        </div>
    )
}

export default Transactions