import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//import Lamp from "./lamp"
import Quote from "./Quote"
//import Travels from "./Travels";

class App extends Component {
  constructor() {
    super()
    this.state = { 
    working: true
    }
    
  }
      handleClick= ()=> { 
      this.setState ({working: !this.state.working })
      console.log(this.state)
      }
  render() {
    //const logo = this.state.working ? 
    const img = this.state.working ? "https://sitejerk.com/images/homer-simpson-transparent-16.png" : "https://images.all-free-download.com/images/graphiclarge/homer_simpson_02_the_simpsons_50973.jpg"
    return (
    
      
      <div className="App">
          <h1 className="App-title">HOMER NOW</h1>
          <img src={logo} className={this.state.working? "App-logo" : "App-logo-stop" }/>
          <button onClick={this.handleClick}>
           SWITCH
          </button>

          <Quote quote={this.state.working? "Homer Sweat" : "Homer chill"} image={img}/>
      </div>
    
    
    );
  }
}

export default App;

