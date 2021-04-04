import React from 'react';
import '../visual/popup.css';

import logo from '../images/pattern.png';

class Popup extends React.Component {
  render() {
    return (
      <div>
        <div className="background" onClick={this.props.closePopup}></div>
        <div className="popup">
            <div className="top">
              <img src={logo} alt="logo" />
              <div className="close_btn_top" onClick={this.props.closePopup}>
                <h2>X</h2>
              </div>
              <h1>{this.props.name}</h1> 
            </div>

            <div className="body">
              {this.props.description}  
            </div>

            <div className="bottom">
              <div className="close_btn" onClick={this.props.closePopup}>Close</div>
            </div>
        </div>
      </div>
    );
  }
}
export default Popup;
