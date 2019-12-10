import React, { Component } from 'react';
import './AppList.css'

import AboutIcon from '../../res/icons/about.svg'
import GiphyIcon from '../../res/icons/giphy.png'

class AppList extends Component {

    appIcons = {
        About: AboutIcon,
        Giphy: GiphyIcon
    }

    render() {

        let iconPath = ''
        const apps = Object.getOwnPropertyNames(this.props.appData.currentApps)
        apps.forEach(element => {
            if(this.appIcons.hasOwnProperty(element)) {
                iconPath = this.appIcons[element]
            } else {
                iconPath = this.appIcons['About']
            }
        });

        const listItems = apps.map((appName) =>
            <div className='AppContainer'>
                <img className='AppIcon' src={iconPath} alt='icon' />
                <li onClick={() => this.props.appData.openApp(appName)} key={appName} className='AppListItem'>{appName}</li>
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