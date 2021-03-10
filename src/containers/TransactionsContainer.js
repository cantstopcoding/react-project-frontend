import React, {Component} from 'react'
import TransactionInput from '../components/TransactionInput'
import Transactions from '../components/Transactions'

class TransactionsContainer extends Component {
    
    render() {
        return (
            <div>
                <TransactionInput account={this.props.account}/>
                <Transactions transactions={this.props.account && this.props.account.transactions}/>
            </div>
        )
    }
}

export default TransactionsContainer