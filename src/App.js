import React, { Component } from 'react'
import './App.css'
import MenuBar from './Components/MenuBar'
import Desktop from './Components/Desktop/Desktop';
import logo from './res/synergyoslogo.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apps: {
        test: 'open'
      }
    }
  }

  setAppOpen = (appName) => {
    let currentState = this.state
    currentState.apps[appName] = 'open'
    this.setState(currentState)
  }

  setAppClosed = (appName) => {
    let currentState = this.state
    currentState.apps[appName] = 'closed'
    this.setState(currentState)
  }

  render() {
    return (
      <div>
          <Desktop background='#D8AEB6' backgroundImg={logo} currentApps={this.state.apps} closeApp={this.setAppClosed}/>
          <MenuBar currentApps={this.state.apps} openApp={this.setAppOpen}/>
      </div>
    );
  }
  
}

export default App
