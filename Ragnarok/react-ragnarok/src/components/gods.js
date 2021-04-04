import React from 'react';
import God from './god';

class Gods extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gods: [] };
    this.sendData = this.sendData.bind(this);
    this.fetchGods = this.fetchGods.bind(this);
  }

  componentDidMount() {
    this.fetchGods();
  }

  fetchGods() {
    fetch('http://localhost:3001/gods', {
      method: 'GET',
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({gods: data});
    })
  }

  sendData(god) {
    this.props.onGodChange(god);
  }

  render() {
    return (
      <div>
        <div className="grid-layout">
          {this.state.gods.map((god, index) => 
            <God info={god} sendData={this.sendData} />
          )}
        </div>   
      </div>
    );  
  }
}
export default Gods;
