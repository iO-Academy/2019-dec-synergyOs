import React from 'react'
import screenfull from 'screenfull'
import fullscreenClose from '../../res/fullscreenClose.svg'
import fullscreenOpen from '../../res/fullscreenOpen.svg'

const toggleFullscreen = () => {

    if (screenfull.isFullscreen) {
        screenfull.exit()
    } else {
        screenfull.request()
    }
}

const Fullscreen = () => {

    return (
        <img id="fullscreenButton" alt='synergyOS logo' src={fullscreenOpen} onClick={toggleFullscreen}/>
    )
}

screenfull.on('change', () => {
    if (!screenfull.isFullscreen) {
        document.getElementById('fullscreenButton').src = fullscreenOpen
    } else {
        document.getElementById('fullscreenButton').src = fullscreenClose
    }
})

export default Fullscreen