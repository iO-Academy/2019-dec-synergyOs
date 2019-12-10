import React, { Component } from 'react'
import AboutApp from './Apps/About/AboutApp'
import AppList from '../Menu/AppList'
import './Apps/Apps.css'
import GiphyApp from './Apps/Giphy/Giphy'

class Desktop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: window.innerHeight - 50
        }
    }

    updateDimensions = () => {
        this.setState({height: window.innerHeight - 50})
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    render() {
        let desktopState = this.props.appState
        this.styles = {
            width: '100%',
            height: this.state.height,
            backgroundColor: this.props.background,
            backgroundImage: ` url(${this.props.backgroundImg})`,
            backgroundRepeat: `no-repeat`,
            backgroundAttachment: `fixed`,
            backgroundPosition: `center`,
            backgroundSize: '50%',
            overflow: 'hidden'
        }
        return (
            <div scroll="no" className='desktop' style={this.styles}>
                <AboutApp name="About" desktopState={desktopState} />
                <GiphyApp name="Giphy" desktopState={desktopState}/>
                <AppList appData={desktopState} />
            </div>
        )
    }
}

export default Desktop
