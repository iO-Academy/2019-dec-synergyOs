import React from "react";
import '../../Apps.css'
import '../../Apps-bad.css'
import dragApp from '../../AppDragger'
import resizeApp from '../../AppResizer'

import '../App.css'

class NESControls extends React.Component {
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

    removeIframe = () => {
        let thisApp = document.getElementById(this.state.name)
        thisApp.querySelector('iframe').remove()
    }

    addIframe = () => {
        let thisApp = document.getElementById(this.state.name)
        thisApp.querySelector('.app-content').innerHTML = `<iframe src='https://docs.google.com/drawings/d/1URTCgrEl6H-jjqz-FUHLx468ZxrUykfUnD1wzgkbIyo/edit?usp=sharing'></iframe>`
    }

    render() {

        let appMinWidths = {minWidth: '100px', minHeight: '100px', maxHeight: '650px'}

        return (
            <div>
            <div onClick={this.activateApp} id={this.state.name} className={'app ' + this.state.visibility}
                 style={this.style}></div>
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
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Controls</h5>
                    </div>
                    <div class="modal-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Button</th>
                                    <th>Player 1</th>
                                    <th>Player 2</th></tr></thead><tbody><tr><td>Left</td><td>Left</td><td>Num-4</td></tr><tr><td>Right</td><td>Right</td><td>Num-6</td></tr><tr><td>Up</td><td>Up</td><td>Num-8</td></tr><tr><td>Down</td><td>Down</td><td>Num-2</td></tr><tr><td>A</td><td>X</td><td>Num-7</td></tr><tr><td>B</td><td>Z</td><td>Num-9</td></tr><tr><td>Start</td><td>Enter</td><td>Num-1</td></tr><tr><td>Select</td><td>Right Ctrl</td><td>Num-3</td></tr></tbody></table></div><div class="modal-footer"><button type="button" class="btn btn-outline-primary">Close</button></div></div>
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

export default NESControls