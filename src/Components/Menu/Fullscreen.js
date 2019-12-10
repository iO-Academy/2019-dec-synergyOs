import React from 'react'
import screenfull from 'screenfull'
import fullscreenClose from '../../res/fullscreenClose.svg'
import fullscreenOpen from '../../res/fullscreenOpen.svg'

const root = document.getElementById('root')

const toggleFullscreen = () => {

    screenfull.toggle(root);
        if (document.getElementById('fullscreenButton').src=fullscreenOpen) {
            document.getElementById('fullscreenButton').src=fullscreenClose
    } else {
            document.getElementById('fullscreenButton').src=fullscreenOpen
        }
}

const Fullscreen = () => {

    return (
        <img id="fullscreenButton" src={fullscreenOpen} onClick={toggleFullscreen} />
    )
}

export default Fullscreen