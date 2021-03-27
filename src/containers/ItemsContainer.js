import React, {Component} from 'react'
import { connect } from 'react-redux' 
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

// mapStateToProps = state => {
//     return {
        
//     }
// }

export default connect()(ItemsContainer)