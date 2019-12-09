import React from 'react'
import circle from '../../res/circle.svg'

class AppBtn extends React.Component {
    render(){

        const showApps = () => {
            console.log('View apps');
          } 

        return (
            <div>
                <img onClick={()=> showApps()} className='appBtn' src={circle} alt='app list'/>
            </div>
    )}
}

export default AppBtn