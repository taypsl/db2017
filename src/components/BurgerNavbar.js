import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../css/App.css';

class BurgerNavbar extends React.Component {


  render () {
    return (
      <Menu className="Burger-navbar">
        <a id="home" className="menu-item" href="/">Top</a>
        <a id="50-21" className="menu-item" href="/50-21">50-21</a>
        <a id="20-11" className="menu-item" href="/20-11">20-11</a>
        <a id="10-1" className="menu-item" href="/10-1">10-1</a>
      </Menu>
    );
  }
}

export default BurgerNavbar