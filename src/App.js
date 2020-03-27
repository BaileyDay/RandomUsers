// Import React libraries
import React, { Component } from 'react';
import { Container, Box, Button } from 'bloomer';

// Import components
import ProfileCardList from './components/ProfileCardList';

// Import CSS
import './App.css';


// let userInput = document.getElementById("userInput").value 
let userInput = 18;

class App extends Component {
  state = {
    userData: [],
    title: 'Random Character Creator'
  };

  loadData = async () => {
    const response = await fetch(`https://randomuser.me/api/?results=${userInput}`);
    const data = await response.json();
    return data.results;
  };

  handleClick = async () => {
    const newUserData = await this.loadData();


    this.setState({
      userData: newUserData
    });
  };

  async componentDidMount() {
    const userData = await this.loadData();

    this.setState({
      userData: userData
    });
  }


  render() {

    const { title, userData } = this.state;
    return (
      <div className="App">
        <h1 className="title">{title}</h1>
        <div className="refreshButton">
          <button onClick={this.handleClick}>Load New Characters</button>
        </div>
        <div className="Input">
          <input placeholder="Number to generate" value="" id="userInput"></input>
        </div>

        <ProfileCardList userData={userData} />

      </div >

    );
  }
}


export default App;
