import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './Ragnarok.css';
import './hover_effects.css';
import Gods from './gods';
import Creatures from './creatures';
import Lore from './lore';

import logo from './images/pattern.png';
import arrowRight from './images/arrowRight.png';

class SubTitle extends React.Component {
  render() {
    return (
      <div class="category_header">
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

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <SubTitle name={"Gods"} />
    <Gods />
    <SubTitle name={"Creatures"} />
    <Creatures />
    <SubTitle name={"Lore"} />
    <Lore />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
