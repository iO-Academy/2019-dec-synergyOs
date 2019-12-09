import React from 'react'
import './App.css'
import MenuBar from './Components/MenuBar'
import Desktop from './Components/Desktop/Desktop';
import logo from './Images/synergyoslogo.png';

function App() {
  return (
    <div>
      <Desktop background='#D8AEB6' backgroundImg={logo}/>
      <MenuBar />
    </div>
    
  );
}

export default App
