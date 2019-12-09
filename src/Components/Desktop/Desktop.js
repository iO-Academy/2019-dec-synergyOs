import React, { Component } from 'react'

class Desktop extends Component {

    constructor(props) {
        super(props)
        this.styles = {
            width: '100%',
            height: '100vh',
            backgroundColor: this.props.background,
            backgroundImage: ` url${this.props.backgroundImg})`,
            backgroundRepeat: `no-repeat`,
            backgroundAttachment: `fixed`,
            backgroundPosition: `center`
        }
    }

    render() {
        return(
            <div className='desktop' style={this.styles}>

            </div>
        )
    }
}

export default Desktop;