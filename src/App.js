import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/serach-box/search-box.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFeild:''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json().then(users => {
        console.log(users)
        this.setState({ monsters: users })
      }));
  }
  render() {
      const { monsters, searchFeild} = this.state;
      //monsters = this.state.monsters; // use up syntax
      //searchFeild = this.state.searchFeild;
      const filteredMonster = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchFeild.toLowerCase())
        )
    return (
      <div className="App">
          <SearchBox
            placeholder="search"
            handleChange={e=>this.setState({searchFeild: e.target.value})}/>
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
