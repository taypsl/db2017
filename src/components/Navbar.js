import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  return (
    <div className='Menu'>
        <div className='Menu-logo'>
        </div>

        <div className='Menu-links'>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            exact
            to='/'
          >
            Top
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/50-21'
          >
            50-21 
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/20-11'
          >
            20-11 
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/10-1'
          >
            10-1 
          </NavLink>
        </div>

      </div>
  );
}

export default Navbar;
