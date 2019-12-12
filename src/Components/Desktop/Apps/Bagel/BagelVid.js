import React, { Component } from 'react';
import video from './res/bagel.mp4'
import screenfull from 'screenfull'

import './App.css'

class BagelVid extends Component {

    render() {
        return (

            <div className="video">
                <video width='640px' height="100%" src={video} type="video/mp4"></video>

            </div>
        )
    }
}

export default BagelVid