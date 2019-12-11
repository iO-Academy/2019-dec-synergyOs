import React, { Component } from 'react';
import vid from './res/syn.mp4'

function endVid() {
    document.querySelector('video').parentElement.outerHTML = ""
    document.querySelector('.desktop').classList.remove('closed')
    document.querySelector('.MenuBar').classList.remove('closed')
    
}

class Intro extends Component{

    render() {
        return(
            <div className="video">
                <video onClick={endVid} onEnded={() => endVid()} width='640px' height="100%" src={vid}type="video/mp4"></video>
                <button id="start" onClick={(e) => {e.target.remove(); document.querySelector('video').play()}}>START SYNERGY OS</button>
            </div>
            
        )
    }
    
}

export default Intro