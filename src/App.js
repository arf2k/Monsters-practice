import "./App.css";
import React from "react";
import Cardlist from './components/cardlist/Cardlist.js'

class App extends React.Component {
  state = {
    monsters: [],
    searchField: ""
  };


  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(data => 
     
      this.setState({monsters: data}))
  }


  render() {
    const {monsters , searchField} = this.state 
  //  ^^destructuring
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <>
        <div>
          <input onChange={e => this.setState({searchField: e.target.value})} type="search" placeholder="search monsters"/>
          <Cardlist monsters={filteredMonsters}/>
        </div>
      </>
    );
  }
}

export default App;
