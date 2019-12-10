import React, { Component } from 'react'
import './App.css'
import MenuBar from './Components/MenuBar'
import Desktop from './Components/Desktop/Desktop';
import logo from './Images/synergyoslogo.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apps: {
        test: 'open'
      },
      activeApp: ''
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

  setAppActive = (appName) => {
    let currentState = this.state
    currentState.activeApp = appName
    this.setState(currentState)
  }

  render() {
    return (
      <div>

          <Desktop background='#D8AEB6' backgroundImg={logo} appState={this.state}
          currentApps={this.state.apps} activeApp={this.state.activeApp} 
          openApp={this.setAppOpen} closeApp={this.setAppClosed} a
          ctivateApp={this.setAppActive} />

          <MenuBar currentApps={this.state.apps} openApp={this.setAppOpen}/>
      </div>
    );
  }
  
}

export default App
