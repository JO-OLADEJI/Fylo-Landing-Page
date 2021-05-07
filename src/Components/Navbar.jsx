import React from 'react';
import logo from '../Assets/Images/logo.svg';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt=""/>
      </div>
      <ul className="links">
        <li><a href="#">Features</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">SignIn</a></li>
      </ul>
    </div>
  );
}
 
export default Navbar;