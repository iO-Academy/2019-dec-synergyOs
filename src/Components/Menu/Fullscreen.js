import React from 'react'
import fullscreenOpen from '../../../public/fullscreenOpen.png'
import fullscreenClose from '../../../public/fullscreenClose.png'

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