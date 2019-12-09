import React from 'react'
import circle from '../../res/circle.svg'

class AppBtn extends React.Component {
    render() {

        const showAppList = () => {
            var appList = document.querySelector('.AppList');
            if (appList.style.display === "none") {
                appList.style.display = "block";
            } else {
                appList.style.display = "none";
            }
        }

        return (
            <div>
                <img onClick={() => showAppList()} className='appBtn' src={circle} alt='app list' />
            </div>
        )
    }
}

export default AppBtn