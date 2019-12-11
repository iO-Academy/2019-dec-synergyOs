import React, {Component} from 'react'
import AppList from '../Menu/AppList'
import './Apps/Apps.css'

import AboutApp from './Apps/About/AboutApp'
import GiphyApp from './Apps/Giphy/Giphy'
import ThemesApp from './Apps/Themes/Themes'
import Music from './Apps/Music/Music'
import Nyan from './Apps/Nyan/Nyan'
import Revelations from './Apps/Revelations/Revelations'
import TopCat from './Apps/TopCat/TopCat'
import Calculator from './Apps/Calculator/Calcualtor'
import Cows from "./Apps/Cows/Cows";
import Codepen from "./Apps/Codepen/Codepen"

class Desktop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: window.innerHeight - 50,
            backgroundSize: '50%'
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

    componentDidUpdate() {
        var theme = this.props.theme
        var varLOL = 'hello'

    }

    render() {
        let desktopState = this.props.appState
        this.styles = {
            width: '100%',
            height: this.state.height,
            backgroundColor: this.props.appState.backgroundColor,
            backgroundImage: ` url(${this.props.backgroundImg})`,
            backgroundRepeat: `no-repeat`,
            backgroundAttachment: `fixed`,
            backgroundPosition: `center`,
            backgroundSize: this.props.appState.backgroundSize,
            overflow: 'hidden'
        }
        return (
            <div scroll="no" className='desktop closed' style={this.styles}>
                <AboutApp name="About" desktopState={desktopState}/>
                <GiphyApp name="Giphy" desktopState={desktopState}/>
                {/* <Music name="Music" desktopState={desktopState}/> */}
                <TopCat name='TopCat' desktopState={desktopState}/>
                <Cows name='Cows' desktopState={desktopState}/>
                <Codepen name='Codepen' desktopState={desktopState}/>
                <Calculator name="Calculator" desktopState={desktopState}/>
                <Nyan name="TBWA" desktopState={desktopState}/>
                <Revelations name="TBWA" desktopState={desktopState}/>
                <ThemesApp name="Themes" desktopState={desktopState}/>
                <AppList appData={desktopState}/>
            </div>
        )
    }
}

export default Desktop
