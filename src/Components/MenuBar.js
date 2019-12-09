import React from 'react';
import './MenuBar.css';
import Clock from './Menu/Clock'
import AppBtn from './Menu/AppBtn'

function MenuBar() {
    return (
        <div className="MenuBar">
            <div className='menuClock'><Clock /></div>
            <div className='menuAppBtn'><AppBtn /></div>
        </div>
    )
}

export default MenuBar;
