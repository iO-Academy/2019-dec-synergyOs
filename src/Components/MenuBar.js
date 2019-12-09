import React from 'react';
import './MenuBar.css';
import Clock from './Menu/Clock'

function MenuBar() {
    return (
        <div className="MenuBar">
            <div className='menuClock'><Clock /></div>
        </div>
    )
}

export default MenuBar;
