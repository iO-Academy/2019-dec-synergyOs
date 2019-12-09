import React from 'react'
import circle from '../../res/circle.svg'

class AppBtn extends React.Component {
    render() {

        const showAppList = () => {
            var appList = document.querySelector('.AppList');
            appList.style.display = appList.style.display === "block" ? "none" : "block";
        }

        return (
            <div>
                <img onClick={() => showAppList()} className='appBtn' src={circle} alt='app list' />
            </div>
        )
    }
}

export default AppBtn