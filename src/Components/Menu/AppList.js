import React, { Component } from 'react';
import './AppList.css'

import About from '../../res/icons/about.svg'
import Giphy from '../../res/icons/giphy.png'

class AppList extends Component {
    render() {

        let iconPath = ''
        const apps = Object.getOwnPropertyNames(this.props.appData.currentApps)
        apps.forEach(element => {
            switch (element) {
                case 'About':
                    iconPath = About
                    break;

                case 'Giphy':
                    iconPath = Giphy
                    break;

                default:
                    iconPath = About
                    break;
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
