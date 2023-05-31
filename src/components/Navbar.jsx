import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss' 


function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink to='/'>
        <div className='Navbar_logo'>
          <img src='logo.png' alt='kasa, location git '/>
        </div>
      </NavLink>
      <NavLink to='/'>
        <div>Accueil</div>
      </NavLink>
      <NavLink to='/about'>
        <div>Apropo</div>
      </NavLink>
     
    </nav>
  );
}

export default Navbar