import React from 'react'
import screenfull from 'screenfull'
import fullscreenClose from '../../res/fullscreenClose.svg'
import fullscreenOpen from '../../res/fullscreenOpen.svg'

const toggleFullscreen = () => {

    if (screenfull.isFullscreen) {
        document.getElementById('fullscreenButton').src = fullscreenOpen
        screenfull.exit()
    } else {
        document.getElementById('fullscreenButton').src = fullscreenClose
        screenfull.request()
    }
}

const Fullscreen = () => {

    return (
        <img id="fullscreenButton" alt='synergyOS logo' src={fullscreenOpen} onClick={toggleFullscreen}/>
    )
}

export default Fullscreen