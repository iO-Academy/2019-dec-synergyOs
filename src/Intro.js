import React, { Component } from 'react';
import vid from './res/syn.mp4'
import screenfull from 'screenfull'

function endVid() {
    document.querySelector('video').parentElement.outerHTML = ""
    document.querySelector('.desktop').classList.remove('closed')
    document.querySelector('.MenuBar').classList.remove('closed')
    
}

class Intro extends Component{

    render() {
        return(
            <div onClick={(e) => {screenfull.request(document.querySelector('video')); document.querySelector('video').play(); }}>
                <button id="start" onClick={(e) => {e.target.remove();screenfull.request(document.querySelector('video')); document.querySelector('video').play(); }}>START SYNERGY OS</button>
                <div className="video">
                    <video onClick={endVid} onEnded={(e) => {screenfull.exit(); endVid()}} width='640px' height="100%" src={vid}type="video/mp4"></video>
                
                </div>
            </div>
            
        )
    }
    
}

export default Intro