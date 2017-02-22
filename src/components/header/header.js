import React from 'react';
import { IndexLink, Link } from 'react-router';

import logo from '../../resources/img/trackr-logo.png'

import './header.scss';

export const Header = () => (
  <nav className="header nav nav-md nav-fixed nav-end nav-center-v nav-primary">
    <Link to='/' className="nav-logo">
      <img src={logo} alt=""/>
    </Link>

    <ul className="fs-14">
      <li><Link to='/' activeClassName='active'>Home</Link></li>
      <li><Link to='/trips' activeClassName='active'>Trips</Link></li>
      <li><Link to='/login' activeClassName='active'>Sign in</Link></li>
    </ul>
  </nav>
);

export default Header