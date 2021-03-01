import React, { Component }  from 'react';


class AccountInput extends React.Component {

    state = {
        name: '',
        balance: ''
    };

    handleChange = (event) => {
        // debugger
    }

    render() {
        return (
            <div>
                <form>
                    <label>Checking Account Name:</label><br/>
                    <input type='text' placeholder='Name...'  value={this.state.name} name="name" onChange={this.handleChange}/><br/><br/>
                    <label>Checking Account Balance:</label><br/>
                    <input type='text' placeholder='Balance' value={this.state.balance} name="balance" onChange={this.handleChange}/><br/>
                </form>
            </div>
        )
    }
}

export default AccountInput