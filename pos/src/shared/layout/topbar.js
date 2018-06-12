import React, { Component } from 'react';
import './topbar.css';
// import * as FontAwesome from 'react-icons/lib/fa'
// import * as icons from 'react-icons/lib/md'
import logo from '../../assets/Drawing.svg';


class TopBar extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between nav-bar">
        <div>
        <img src={logo} className="App-logo" alt="logo" />
            </div>
        <div></div>
      </div>
    );
  }
}

export default TopBar;