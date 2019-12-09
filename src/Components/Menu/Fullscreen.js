import React from 'react'
import fullscreenClose from '../../Images/fullscreenClose.png'
import fullscreenOpen from '../../Images/fullscreenOpen.png'

const toggleFullscreen = () => {
    if (document.fullscreenEnabled) {
        document.exitFullscreen()
            .then(()=>{
                document.getElementById('fullscreenButton').src=fullscreenOpen
            })
    } else {
        document.getElementById('root').requestFullscreen()
            .then(()=>{
            document.getElementById('fullscreenButton').src=fullscreenClose
        })
    }
};


const Fullscreen = () => {


    return (
        <img id="fullscreenButton" src={fullscreenOpen} onClick={toggleFullscreen} />

    )
}

export default Fullscreen