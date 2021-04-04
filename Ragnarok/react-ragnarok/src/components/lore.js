import React from 'react';
import LoreEntry from './loreEntry';

class Lore extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lore_entries: [] };
        this.sendData = this.sendData.bind(this);
        this.fetchLore = this.fetchLore.bind(this);      }
    
        componentDidMount() {
          this.fetchLore();
        }
      
        fetchLore() {
          fetch('http://localhost:3001/lore', {
            method: 'GET',
          })
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.setState({lore_entries: data});
          })
        }
      
        sendData(lore) {
          this.props.onGodChange(lore);
        }

      render() {
        return (
          <div>
            <div className="grid-layout">
              {this.state.lore_entries.map((lore, index) => 
                <LoreEntry info={lore} sendData={this.sendData} />
              )}
            </div>   
          </div>
        );
    }
}
export default Lore;
