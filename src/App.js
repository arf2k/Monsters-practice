import "./App.css";
import React from "react";
import Cardlist from './components/cardlist/Cardlist.js'
import Searchbox from './components/search-box/Searchbox.js'

class App extends React.Component {

  state = {
    monsters: [],
    searchField: "",
    title: ""
  };


  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(data => 
     
      this.setState({monsters: data}))
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  // ^^^ arrow function automatically binds "this" where arrow function is defined (ie App comp here)- lexical scoping 

  render() {
    const {monsters , searchField} = this.state 
  //  ^^destructuring
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <>
      <h1>Monster's Rolodex</h1>
        <div>
         <Searchbox
          handleChange={this.handleChange} placeholder="search monsters"/>
           <Cardlist monsters={filteredMonsters}/> 
        </div>
      </>
    );
  }
}

export default App;
