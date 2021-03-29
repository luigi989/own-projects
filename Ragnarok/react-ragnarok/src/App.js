import React from 'react';
import Gods from './gods';
import Creatures from './creatures';
import Lore from './lore';
import Popup from './popup';

import './Ragnarok.css';
import './hover_effects.css';

import logo from './images/pattern.png';
import arrowRight from './images/arrowRight.png';

class SubTitle extends React.Component {
    render() {
      return (
        <div className="category_header">
          <h1><a href="gods.html">{this.props.name}</a></h1>
          <img id="arrowRight" src={arrowRight} alt="arrowRight" />
        </div>
      );
    }
  }
  
  class Header extends React.Component {
    render() {
      return (
        <header>   
          <div id="header_search">
            <a href="Ragnarok.html">
              <img id="logo" src={logo} alt="Logo" />
            </a>
            <form id="searchbar_form">
              <input type="text" placeholder="Search..." name="search"></input>
              <button type="submit">Submit</button> 
            </form>
          </div>
        </header>
      );
    }
  }
  
  class Footer extends React.Component {
    render() {
      return (
        <footer>
          <ul>
            <li>Contact Us</li>
            <li>Site Info</li>
            <li>References</li>
          </ul>
          <div>ey</div>
          <div>eey</div>
          <div>eeey</div>
        </footer>
      );
    }
  }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: '', name: '', description: '', showPopup: false};
        this.handleGodChange = this.handleGodChange.bind(this);
    } 

    handleGodChange(id, name, description) {
        this.setState({name: name});
        this.setState({id: id});
        this.setState({description: description});
        this.setState({showPopup: !this.state.showPopup});
    }

    render() {
        return (
            <React.StrictMode>
            <Header />
            <SubTitle name={"Gods"} />
            <Gods onGodChange={this.handleGodChange} />
            <SubTitle name={"Creatures"} />
            <Creatures onGodChange={this.handleGodChange} />
            <SubTitle name={"Lore"} />
            <Lore onGodChange={this.handleGodChange} />
            <Footer />

            {this.state.showPopup ?
            <Popup name={this.state.name} description={this.state.description} 
                closePopup={this.handleGodChange} /> 
            : null }  

            </React.StrictMode>
        );
    }
}
export default App;