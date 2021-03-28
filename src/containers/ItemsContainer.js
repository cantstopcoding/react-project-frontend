import React, {Component} from 'react'
import { connect } from 'react-redux' 
import Items from '../components/Items'
import ItemInput from '../components/ItemInput'
import { fetchItems } from '../actions/fetchItems'

class ItemsContainer extends Component {
    componentDidMount() {
        this.props.fetchItems()
    }

    render() {
        console.log('ITMES', this.props.items)
        return(
        <div>
            <Items items={this.props.items} />
            <ItemInput />
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state.itemReducer
    }
}

export default connect(mapStateToProps, {fetchItems})(ItemsContainer)