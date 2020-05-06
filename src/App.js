import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

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
    return (
      <div className="App">
        <input type="search" placeholder="search"
         onChange={e=>
          this.setState({searchFeild: e.target.value})
          }/>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
