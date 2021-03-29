import React from 'react';

import oden from './images/humans/Oden.png';
import freja from './images/humans/Freja.png';
import tor from './images/humans/Tor.png';
import hades from './images/humans/Hades.png';
import frej from './images/humans/Frej.png';

class Gods extends React.Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
  }

  sendData(event) {
    const name = event.currentTarget.textContent;
    fetch(`http://localhost:3001/gods/${name}`, {
      method: 'GET',
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        var obj = data[0];
        this.props.onGodChange(obj.id, obj.name, obj.description);
      });
  }
  
  render() {
    return (
      <div>
        <div className="grid-layout">
            <div className="gods" onClick={this.sendData}>
                <img id="oden" src={oden} alt="Oden" /> 
                <div className="name">Oden</div>
            </div>
            <div className="gods" onClick={this.sendData}>
                <img id="freja" src={freja} alt="Freja" /> 
                <div className="name">Freja</div>
            </div>
            <div className="gods" onClick={this.sendData}>
                <img id="tor" src={tor} alt="Tor" /> 
                <div className="name">Tor</div>
            </div>
            <div className="gods" onClick={this.sendData}>
                <img id="hades" src={hades} alt="Hades" /> 
                <div className="name">Hades</div>
            </div>
            <div className="gods" onClick={this.sendData}>
                <img id="frej" src={frej} alt="Frej" /> 
                <div className="name">Frej</div>
            </div>
        </div>     
      </div>
    );  
  }
}
export default Gods;
