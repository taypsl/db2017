import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  return (
    <div className='Navbar'>
        <div className='Navbar-logo'>
        D-BRAD'S BEST SONGS OF 2017
        </div>

        <div className='Navbar-links'>
          
          <NavLink
            activeClassName='Navbar-link--active'
            className='Navbar-link'
            exact
            to='/'
          >
            Top
          </NavLink>
          <NavLink
            activeClassName='Navbar-link--active'
            className='Navbar-link'
            to='/50-21'
          >
            50-21 
          </NavLink>
          <NavLink
            activeClassName='Navbar-link--active'
            className='Navbar-link'
            to='/20-11'
          >
            20-11 
          </NavLink>
          <NavLink
            activeClassName='Navbar-link--active'
            className='Navbar-link'
            to='/10-1'
          >
            10-1 
          </NavLink>
        </div>

      </div>
  );
}

export default Navbar;
