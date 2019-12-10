import React from "react";
import '../Apps.css'
import dragApp from '../AppDragger'
import resizeApp from '../AppResizer'

class Music extends React.Component {
    constructor(props) {
        super(props)
        let appName = this.props.name
        console.log(this.props.desktopState.currentApps[appName])
        this.state = {
            name: appName,
            visibility: this.props.desktopState.currentApps[appName],
        }

        this.style = {
            top: Math.floor(Math.random() * window.innerHeight / 2),
            left: Math.floor(Math.random() * window.innerWidth / 2)
        }

        this.props.desktopState.closeApp(appName)

    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({
                name: this.state.name,
                visibility: this.props.desktopState.currentApps[this.state.name],
            })
        }

        let app = document.getElementById(this.state.name)

        if (this.props.desktopState.activeApp === this.state.name) {
            app.classList.add('active')
        } else {
            app.classList.remove('active')
        }
    }

    activateApp = () => {
        let zIndex = this.props.desktopState.activateApp(this.state.name)
        let app = document.getElementById(this.state.name)
        app.style.zIndex = zIndex
    }

    render(){

        let appMinWidths = {minWidth: '100px', minHeight: '100px'}


        return (
            <div onClick={this.activateApp} id={this.state.name} className={'app ' + this.state.visibility}
                 style={this.style}>
                <div className="topBar" onPointerDown={e => {
                    dragApp(e.target, this.activateApp)
                }}>
                    <button onClick={() => {
                        this.props.desktopState.closeApp(this.state.name);
                        console.log(this.state.name)
                    }}>X
                    </button>
                    <div className="divider"></div>
                    <p>{this.state.name}</p>
                </div>
                <div className="app-content" style={appMinWidths}>
                    <h1>TestApp</h1>
                    <p>i am some text</p>
                </div>
                <div className="app-statusBar">
                    <div onPointerDown={e => {
                        resizeApp(e.target.parentElement, this.activateApp)
                    }}></div>
                </div>
            </div>
        )
    }
}

export default Music