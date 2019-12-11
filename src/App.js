import React, {Component} from 'react'
import './App.css'
import MenuBar from './Components/MenuBar'
import Desktop from './Components/Desktop/Desktop'
import logo from './res/synergyoslogo.png'
import Intro from './Intro'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apps: {},
      activeApp: '',
      currentZ: '1',
      theme: 'default',
      color: 'pink',
      backgroundImg: logo,
      backgroundSize: '100%'
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
    currentState.currentZ++
    this.setState(currentState)
    return (currentState.currentZ)
  }

  setCurrentTheme = (theme) => {
    let currentState = this.state
    currentState.theme = theme
    this.setState(currentState)
  }

  setColor = (color) => {
    let currentState = this.state
    currentState.color = color
    this.setState(currentState)
  }

  setBackgroundImg = (background) => {
    let currentState = this.state
    currentState.backgroundImg = background
    this.setState(currentState)
  }

  setBackgroundSize = (int) => {
    let currentState = this.state
    currentState.backgroundSize = int
    this.setState(currentState)
  }

  render() {

    let appState = {
      currentApps: this.state.apps,
      activeApp: this.state.activeApp,
      openApp: this.setAppOpen,
      closeApp: this.setAppClosed,
      activateApp: this.setAppActive,
      currentZ: this.state.currentZ,
      setTheme: this.setCurrentTheme,

      // theme stuff
      currentTheme: this.state.theme,
      backgroundColor: this.state.color,
      setColor: this.setColor,
      setBackgroundImg: this.setBackgroundImg,
      setBackgroundSize: this.setBackgroundSize

    }

    document.getElementById('root').classList = ''
    document.getElementById('root').classList.add(appState.currentTheme) 
    return (
      <div>
        <Intro></Intro>
        <Desktop backgroundImg={this.state.backgroundImg} appState={appState} />
        <MenuBar currentApps={this.state.apps} openApp={this.setAppOpen} />
      </div>
    );
  }
}

export default App
