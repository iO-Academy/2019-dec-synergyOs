import React, { Component } from "react";
import GoogleAnalytics from "react-ga";
import { BrowserRouter, Route } from "react-router-dom";
import ListPage from "./ListPage";
import RunPage from "./RunPage";
import config from "./config";
import { handleError } from "./utils";
import "./App.css";

import '../Apps.css'
import '../Apps-bad.css'
import dragApp from '../AppDragger'
import resizeApp from '../AppResizer'

class NES extends React.Component {
  constructor(props) {
      super(props)
      let appName = this.props.name
      console.log(this.props.desktopState.currentApps[appName])
      this.state = {
          name: appName,
          visibility: this.props.desktopState.currentApps[appName],
      }

      this.style = {
          top: Math.floor(Math.random() * window.innerHeight / 2),
          left: Math.floor(Math.random() * window.innerWidth / 2)
      }

      this.props.desktopState.closeApp(appName)
  }

  componentDidUpdate(prevProps) {

      if (prevProps !== this.props) {
          this.setState({
              name: this.state.name,
              visibility: this.props.desktopState.currentApps[this.state.name],
          })
      }

      let app = document.getElementById(this.state.name)

      if (this.props.desktopState.activeApp === this.state.name) {
          app.classList.add('active')
      } else {
          app.classList.remove('active')
      }
  }

  activateApp = () => {
      let zIndex = this.props.desktopState.activateApp(this.state.name)
      let app = document.getElementById(this.state.name)
      app.style.zIndex = zIndex
  }

  render() {

      let appMinWidths = {minWidth: '800px', minHeight: '750px'}

      let game = <div className="nesGame">
                <Route exact path="/run" component={RunPage} />
                <Route exact path="/run/:slug" component={RunPage} />
                <Route path="/" render={this.recordPageview} />
                 </div>
                
      return (
          <div onClick={this.activateApp} id={this.state.name} className={'app ' + this.state.visibility}
               style={this.style}>
              <div className="topBar" onPointerDown={e => {
                  dragApp(e.target, this.activateApp)
              }}>
                  <button onClick={() => {
                      this.props.desktopState.closeApp(this.state.name);
                        document.querySelector('.appNes').remove()
                  }}>X
                  </button>
                  <div className="divider"></div>
                  <p>{this.state.name}</p>
              </div>
              <div className="app-content" style={appMinWidths}>
              <BrowserRouter>
              <div className="appNes">
                <Route exact path="/" component={ListPage} />

                {game}
            </div>
      </BrowserRouter>
              </div>
              <div className="app-statusBar">
                  <div onPointerDown={e => {
                      resizeApp(e.target.parentElement, this.activateApp)
                  }}></div>
              </div>
          </div>
      )
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    handleError(error, errorInfo);
  }
}

export default NES