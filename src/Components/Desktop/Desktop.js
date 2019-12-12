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
import Calculator from './Apps/Calculator/Calculator'
import Cows from "./Apps/Cows/Cows";
import Codepen from "./Apps/Codepen/Codepen"
import Bagel from "./Apps/Bagel/Bagel"
import SuperSpreadSheet from './Apps/Office/SuperSpreadSheet/SuperSpreadSheet'
import SuperWriter from './Apps/Office/SuperWriter/SuperWriter'
import SuperPresenter from './Apps/Office/SuperPresenter/SuperPresenter'
import SuperDraw from './Apps/Office/SuperDraw/SuperDraw'

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

        console.log(this.styles.backgroundSize)
        return (
            <div scroll="no" className='desktop closed' style={this.styles}>
                <AboutApp name="About" desktopState={desktopState}/>
                <GiphyApp name="Giphy" desktopState={desktopState}/>
                <Music name="Music" desktopState={desktopState}/>
                <TopCat name='TopCat' desktopState={desktopState}/>
                <Cows name='Cows' desktopState={desktopState}/>
                <Codepen name='Codepen' desktopState={desktopState}/>
                <Bagel name='Bagel' desktopState={desktopState}/>
                <Calculator name="Calculator" desktopState={desktopState}/>
                <SuperWriter name="SuperWriter" desktopState={desktopState}/>
                <SuperSpreadSheet name="SuperSpreadSheet" desktopState={desktopState}/>
                <SuperPresenter name="SuperPresenter" desktopState={desktopState}/>
                <SuperDraw name="SuperDraw" desktopState={desktopState}/>
                <Nyan name="TBWA" desktopState={desktopState}/>
                <Revelations name="TBWA" desktopState={desktopState}/>
                <ThemesApp name="Themes" desktopState={desktopState}/>
                <AppList appData={desktopState}/>
            </div>

        )
    }
}

export default Desktop
