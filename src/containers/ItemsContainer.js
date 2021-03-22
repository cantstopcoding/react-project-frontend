import React, {Component} from 'react'
import Items from '../components/Items'
import ItemInput from '../components/ItemInput'

class ItemsContainer extends Component {
    render() {
        return(
        <div>
            <Items />
            <ItemInput />
        </div>
        )
    }
}

export default ItemsContainer