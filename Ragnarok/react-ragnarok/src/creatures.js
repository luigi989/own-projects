import React from 'react';

import ash_zombie from './images/mobs/Ash Zombie.png';
import bat from './images/mobs/Bat.png';
import bear from './images/mobs/Bear.png';
import icebear from './images/mobs/Icebear.png';
import skeleton_bear from './images/mobs/Skeleton Bear.png';
import vampire from './images/mobs/Vampire.png';
import wolf from './images/mobs/Wolf.png';

class Creatures extends React.Component {
    constructor(props) {
        super(props);
        this.sendData = this.sendData.bind(this);
    }

    sendData(event) {
        const name = event.currentTarget.textContent;
        fetch(`http://localhost:3001/creatures/${name}`, {
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
                    <div className="creatures" onClick={this.sendData}>
                        <img id="ash_zombie" src={ash_zombie} alt="Ash Zombie" /> 
                        <div className="name">Ash Zombie</div>
                    </div>
                    <div className="creatures" onClick={this.sendData}>
                        <img id="bat" src={bat} alt="Bat" /> 
                        <div className="name">Bat</div>
                    </div>
                    <div className="creatures" onClick={this.sendData}>
                        <img id="bear" src={bear} alt="Bear" /> 
                        <div className="name">Bear</div>
                    </div>
                    <div className="creatures" onClick={this.sendData}>
                        <img id="icebear" src={icebear} alt="IceBear" /> 
                        <div className="name">Icebear</div>
                    </div>
                    <div className="creatures" onClick={this.sendData}>
                        <img id="skelton_bear" src={skeleton_bear} alt="Skeleton Bear" /> 
                        <div className="name">Skeleton Bear</div>
                    </div>
                    <div className="creatures" onClick={this.sendData}>
                        <img id="vampire" src={vampire} alt="Vampire" /> 
                        <div className="name">Vampire</div>
                    </div>
                    <div className="creatures" onClick={this.sendData}>
                        <img id="wolf" src={wolf} alt="Wolf" /> 
                        <div className="name">Wolf</div>
                    </div>
                </div>     
            </div>
        );
    }
}
export default Creatures;
