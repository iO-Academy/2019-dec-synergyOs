import React, { Component } from 'react'
import AboutApp from './Apps/AboutApp'
import TestApp from "./Apps/TestApp";
import AppList from '../Menu/AppList'

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
        window.removeEventListener('reize', this.updateDimensions)
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
            backgroundSize: '50%'
        }
        return(
            <div scroll="no" className='desktop' style={this.styles}>
                <AboutApp name="About" desktopState={desktopState} />
                <AppList appData={desktopState} />
            </div>
        )
    }
}

export default Desktop