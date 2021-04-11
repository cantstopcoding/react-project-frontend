import React from "react";
import { connect } from "react-redux";
import AdminsContainer from "./containers/AdminsContainer";
import ItemsContainer from "./containers/ItemsContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AdminsContainer />
        <ItemsContainer />
      </div>
    );
  }
}

export default connect()(App);
// export default App
