import React from 'react'
import './MenuBar.css'
import './MenuBar-bad.css'
import Clock from './Menu/Clock'
import AppBtn from './Menu/AppBtn'
import Fullscreen from "./Menu/Fullscreen"

function MenuBar() {
    return (
        <div className="MenuBar closed">
            <Fullscreen/>
            <div className='menuClock'><Clock/></div>
            <div className='menuAppBtn'><AppBtn/></div>
        </div>
    )
}

export default MenuBar
