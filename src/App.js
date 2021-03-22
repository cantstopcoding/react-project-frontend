import React from 'react'
import { connect } from 'react-redux' 
import AccountsContainer from './containers/AccountsContainer'
import ItemsContainer from './containers/ItemsContainer'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <AccountsContainer />
      </div>
    );
  }
}

export default connect()(App);
// export default App
