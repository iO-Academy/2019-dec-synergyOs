import React, { Component } from 'react';
import './AppList.css'
import './AppList-bad.css'

import AboutIcon from '../../res/icons/question.svg'
import GiphyIcon from '../../res/icons/video.svg'
import ThemeIcon from '../../res/icons/settings.svg'
import MusicIcon from '../../res/icons/music.svg'
import TopCatIcon from '../../res/icons/cat.png'

class AppList extends Component {

    appIcons = {
        About: AboutIcon,
        Giphy: GiphyIcon,
        Themes: ThemeIcon,
        Music: MusicIcon,
        TopCat: TopCatIcon,
    }

    badOpener = () => {
        
    }

    render() {

        const apps = Object.getOwnPropertyNames(this.props.appData.currentApps)
        const listItems = apps.map((appName) =>
            <div id={`${appName}app`}className='AppContainer'>
                <img className='AppIcon' src={this.appIcons[appName]} alt='icon' />
                <li onClick={() => {this.props.appData.openApp(appName); this.props.appData.activateApp(appName)}} key={appName} className='AppListItem'>{appName}</li>
            </div>
        )

        return (
            <div className="AppList">
                <ul className='AppListInternal'>
                    <li className='AppListHeader AppListItem' >My Apps</li>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default AppList