import React, {Component} from 'react'
import TransactionInput from '../components/TransactionInput'
import Transactions from '../components/Transactions'

class TransactionsContainer extends Component {
    render() {
        return (
            <div>
                <TransactionInput/>
                <Transactions/>
            </div>
        )
    }
}

export default TransactionsContainer