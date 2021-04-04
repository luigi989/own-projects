import React from 'react';

class God extends React.Component {
    constructor(props) {
        super(props);
        this.state = { god: [], showPopup: false, imagePath: '' }
        this.sendData = this.sendData.bind(this);
    }

  componentDidMount() {
    this.setState({god: this.props.info});
    var path = require("../images/humans/" + this.props.info.name + ".png");
    this.setState({imagePath: path})
  }

  sendData() {
    this.props.sendData(this.state.god);
  }

  render() {
    return (
    <React.StrictMode>
        <div className="gods" onClick={this.sendData}>
            <img src={this.state.imagePath.default} alt={this.state.god.name} /> 
            <div className="name">{this.state.god.name}</div>
      </div>
    </React.StrictMode>
    );
  }
}
export default God;