import React from 'react';
import './popup.css'

import logo from './images/pattern.png';

class Popup extends React.Component {
  render() {
    return (
      <div className="background">  
        <div className="popup_open">
            <div className="top">
              <img src={logo} alt="logo" />
              <h1>{this.props.name}</h1> 
            </div>
            <div className="body">
              {this.props.description}  
            </div>
            <div className="popup_close" onClick={this.props.closePopup}>X</div>
        </div>
      </div>
    );
  }
}
export default Popup;
