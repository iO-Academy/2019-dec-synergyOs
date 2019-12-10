import React, { Component } from 'react'
import TestApp from './Apps/TestApp'
import AppList from '../Menu/AppList'

class Desktop extends Component {
    constructor(props) {
        super(props)
        this.styles = {
            width: '100%',
            height: '100vh',
            backgroundColor: this.props.background,
            backgroundImage: ` url(${this.props.backgroundImg})`,
            backgroundRepeat: `no-repeat`,
            backgroundAttachment: `fixed`,
            backgroundPosition: `center`
        }
    }

    render() {
        let desktopState = this.props.appState
        return(
            <div className='desktop' style={this.styles}>
                <TestApp name="test" desktopState={desktopState} />
                <TestApp name="test2" desktopState={desktopState} />
                <AppList appData={desktopState} />
            </div>
        )
    }
}

export default Desktop;