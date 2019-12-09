import React from "react";
import './Apps.css'

class TestApp extends React.Component {
    constructor(props){
        super(props)
        let appName = 'test'
        console.log(this.props.currentApps[appName])
        this.state = {
            name: appName,
            visibility: this.props.currentApps[appName],
        }
    }

    componentDidUpdate(prevProps) {
        console.log(this.props.currentApps[this.state.name])
        if(prevProps !== this.props) {
            this.setState({
                name: "test",
                visibility: this.props.currentApps[this.state.name],
            })
        }
    }

    dragApp(target) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
        
        target.onmousedown = dragMouseDown;
        let elmnt = target.parentElement

        function dragMouseDown(e) {
            e = e || window.event;
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
          }
    }

    

    render(){
        return (
            <div className={'app ' + this.state.visibility}>
                <div className="topBar" onMouseDown={e => this.dragApp(e.target)}>
                    <button onClick={() => this.props.closeApp(this.props.name)}>X</button>
                    <div className="divider"></div>
                    <p>{this.state.name}</p>
                </div>
                <div className="app-content">
                <h1>TestApp</h1>
                </div>
            </div>
        )
    }
}

export default TestApp