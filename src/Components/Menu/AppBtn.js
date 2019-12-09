import React from 'react'

class AppBtn extends React.Component {

    render(){
        return (
            <div>
            <p style={{margin:0}}>{this.state.date.toLocaleTimeString()}</p>
        </div>
    )}
}

export default AppBtn