import React, {Component} from 'react'
import ItemInput from '../components/ItemInput'
import Items from '../components/Items'

class ItemsContainer extends Component {
    
    render() {
        return (
            <div>
                <ItemInput account={this.props.account}/>
                <Items items={this.props.account && this.props.account.items}/>
            </div>
        )
    }
}

export default ItemsContainer