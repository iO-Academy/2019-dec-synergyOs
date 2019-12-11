import React, { Component } from 'react';
import vid from './res/syn.mp4'

function endVid() {
    document.querySelector('video').parentElement.outerHTML = ""
    document.querySelector('.desktop').classList.remove('closed')
    document.querySelector('.MenuBar').classList.remove('closed')
    
}

class Intro extends Component{
    componentDidMount() {
        document.querySelector('video').play()
    }

    render() {
        let height = window.innerHeight * 0.75
        return(
            <div className="video">
                <video autoplay onLoad={(e) => {e.target.play()}} onEnded={() => endVid()} width={height} height="100%" src={vid}type="video/mp4"></video>
            </div>
            
        )
    }
    
}

export default Intro