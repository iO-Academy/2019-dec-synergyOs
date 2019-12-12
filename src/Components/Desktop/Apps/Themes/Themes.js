import React from "react";
import './Themes.css'
import '../AppsDark.css'
import '../AppsMatrix.css'
import '../AppsGradient.css'
import '../Apps-bad.css'

import dragApp from '../AppDragger'
import resizeApp from '../AppResizer'
import logo from '../../../../res/synergyoslogo.png'
import logoDark from '../../../../res/synergyoslogoDark.png'
import matrix from '../../../../res/matrix.gif'
import gradient from '../../../../res/gradient.png'
import sean from '../../../../res/tbwa.png'

class ThemesApp extends React.Component {
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

    setTheme = (theme, color, background) => {
        this.props.desktopState.setTheme(theme)
        this.props.desktopState.setColor(color)
        this.props.desktopState.setBackgroundImg(background)
    }

    setThemeBackgroundSize = (backgroundSize) => {
        this.props.desktopState.setBackgroundSize(backgroundSize)
    }

    render() {

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
                <div className="app-content themesContainer" style={appMinWidths}>
                    <h1>Themes</h1>
                    <p>Select your preferred theme below</p>

                    <div>
                        <button id="defaultBtn" className='themeBtn' onClick={() => {this.setTheme('default', 'pink', logo); this.setThemeBackgroundSize('50%')}}>Default</button>
                        <button id="darkBtn" className='themeBtn' onClick={() => {this.setTheme('dark', '#323844', logoDark); this.setThemeBackgroundSize('50%')}}>Dark</button>
                        <button id="matrixBtn" className='themeBtn' onClick={() => {this.setTheme('matrix', '#00FF41', matrix); this.setThemeBackgroundSize('115%')}}>Matrix</button>
                        <button id="gradientBtn" className='themeBtn' onClick={() => {this.setTheme('gradient', 'red', gradient); this.setThemeBackgroundSize('111%')}}>Gradient</button>
                        <button id="more" className='themeBtn' onClick={(e) =>{e.target.classList.add('closed'); document.getElementById('tbwa').classList.remove('closed')} }>More...</button>
                        <button id="tbwa" className='themeBtn closed' onClick={() => {this.setTheme('bad', 'bisque', sean); this.setThemeBackgroundSize('50%')}}>TBWA</button>
                    </div>

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

export default ThemesApp