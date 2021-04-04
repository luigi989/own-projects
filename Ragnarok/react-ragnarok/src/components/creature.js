import React from 'react';

class Creature extends React.Component {
    constructor(props) {
        super(props);
        this.state = { creature: [], showPopup: false, imagePath: '' }
        this.sendData = this.sendData.bind(this);
    }

  componentDidMount() {
    this.setState({creature: this.props.info});
    var path = require("../images/mobs/" + this.props.info.name + ".png");
    this.setState({imagePath: path})
  }

  sendData() {
    this.props.sendData(this.state.creature);
  }

  render() {
    return (
    <React.StrictMode>
        <div className="creatures" onClick={this.sendData}>
            <img src={this.state.imagePath.default} alt={this.state.creature.name} /> 
            <div className="name">{this.state.creature.name}</div>
      </div>
    </React.StrictMode>
    );
  }
}
export default Creature;