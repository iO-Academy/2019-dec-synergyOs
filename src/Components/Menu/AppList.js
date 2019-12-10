import React, { Component } from 'react';
import './AppList.css'

class AppList extends Component {
    render() {
        const apps = Object.getOwnPropertyNames(this.props.appData.currentApps)
        const listItems = apps.map((appName) =>
            <li onClick={()=>console.log('open app')} key={appName} className='AppListItem AppListHover'>{appName}</li>
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

export default AppList;
