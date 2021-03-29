import React from 'react';
import bow from './images/lore/Bow.png';
import club from './images/lore/Club.png';
import hammer from './images/lore/Hammer.png';
import sword from './images/lore/Sword.png';

class Lore extends React.Component {
    constructor(props) {
        super(props);
        this.sendData = this.sendData.bind(this);
      }
    
      sendData(event) {
        const name = event.currentTarget.textContent;
        fetch(`http://localhost:3001/lore/${name}`, {
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
                    <div className="lore" onClick={this.sendData}>
                        <img id="bow" src={bow} alt="Bow" /> 
                        <div className="name">Bow</div>
                    </div>
                    <div className="lore" onClick={this.sendData}>
                        <img id="club" src={club} alt="Club" /> 
                        <div className="name">Club</div>
                    </div>
                    <div className="lore" onClick={this.sendData}>
                        <img id="hammer" src={hammer} alt="Tor's Hammer" /> 
                        <div className="name">Hammer</div>
                    </div>
                    <div className="lore" onClick={this.sendData}>
                        <img id="sword" src={sword} alt="Sword" /> 
                        <div className="name">Sword</div>
                    </div>
                </div> 
            </div>
        );
    }
}
export default Lore;
