import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchAccounts} from '../actions/fetchAccounts'
import AccountInput from '../components/AccountInput';
import Accounts from '../components/Accounts';

class AccountsContainer extends Component {
    
    componentDidMount() {
        this.props.fetchAccounts()
    }
    
    render() {
        return (
            <div>
                <Route path='/accounts/new' component={AccountInput} />
                <AccountInput accounts={this.props.accounts}/><br/><br/>
                <Accounts accounts={this.props.accounts}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)