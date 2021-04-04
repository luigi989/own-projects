import React from 'react';

class LoreEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lore: [], showPopup: false, imagePath: '' }
        this.sendData = this.sendData.bind(this);
    }

  componentDidMount() {
    this.setState({lore: this.props.info});
    var path = require("../images/lore/" + this.props.info.name + ".png");
    this.setState({imagePath: path})
  }

  sendData() {
    this.props.sendData(this.state.lore);
  }

  render() {
    return (
    <React.StrictMode>
        <div className="lore" onClick={this.sendData}>
            <img src={this.state.imagePath.default} alt={this.state.lore.name} /> 
            <div className="name">{this.state.lore.name}</div>
      </div>
    </React.StrictMode>
    );
  }
}
export default LoreEntry;