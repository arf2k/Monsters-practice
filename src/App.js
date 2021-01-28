import "./App.css";
import React from "react";
import Cardlist from './components/cardlist/Cardlist.js'

class App extends React.Component {
  state = {
    monsters: []
  };


  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(data => 
     
      this.setState({monsters: data}))
  }


  render() {
    return (
      <>
        <div>
          <Cardlist monsters={this.state.monsters}/>

        </div>
      </>
    );
  }
}

export default App;
