import React from 'react'
import circle from '../../res/circle.svg'

class AppBtn extends React.Component {
    render(){

        const showApps = () => {
            console.log('Click');
          } 

        return (
            <div>
                <img onClick={()=> showApps()} className='appBtn' src={circle}/>
            </div>
    )}
}

export default AppBtn