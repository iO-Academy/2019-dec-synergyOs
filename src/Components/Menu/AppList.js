import React, { Component } from 'react';
import './AppList.css'

class AppList extends Component {
    render() {
        return (
            
            <div className="AppList">
                <ul className='AppListInternal'>
                    <li className='AppListHeader AppListItem' >My Apps</li>
                    <li className='AppListItem' >app 1</li>
                    <li className='AppListItem' >app 2</li>
                    <li className='AppListItem' >app 3</li>
                    <li className='AppListItem' >app 4</li>
                </ul>
            </div>
        )
    }
}

export default AppList;
