import React, { Component } from 'react'
import './App.css'
import MenuBar from './Components/MenuBar'
import Desktop from './Components/Desktop/Desktop';
import logo from './Images/synergyoslogo.png';
import { AppContext } from './AppStateContext';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openApps: []
    }
  }

  setAppOpen = (appName) => {
    let currentState = this.state
    this.setState({
      openApps: [...currentState.openApps, appName]
    })
  }

  


  render() {
    return (
      <div>
        <AppContext.Consumer>
          <Desktop background='#D8AEB6' backgroundImg={logo}/>
        </AppContext.Consumer>
        
        <AppContext.Provider>
          <MenuBar />
        </AppContext.Provider>
      </div>
    );
  }
  
}

export default App
