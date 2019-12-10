import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        setInterval(
            () => this.tick(),
            1000
        )
    }

    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <p style={{margin: 0}}>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock