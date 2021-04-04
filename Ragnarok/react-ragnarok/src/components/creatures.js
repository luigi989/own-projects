import React from 'react';
import Creature from './creature';

class Creatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = { creatures: [] };
        this.sendData = this.sendData.bind(this);
        this.fetchCreatures = this.fetchCreatures.bind(this);
    }

    componentDidMount() {
        this.fetchCreatures();
    }

    fetchCreatures() {
        fetch('http://localhost:3001/creatures', {
          method: 'GET',
        })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({creatures: data});
        })
      }
    
    sendData(creature) {
        this.props.onGodChange(creature);
    }

    render() {
        return (
            <div>
                <div className="grid-layout">
                    {this.state.creatures.map((creature, index) => 
                    <Creature info={creature} sendData={this.sendData} />
                    )}
                </div>   
            </div>
        );
    }
}
export default Creatures;
