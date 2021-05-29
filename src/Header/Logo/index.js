import React from 'react';
import './Logo.scss';
import { Link } from 'react-router-dom';
import Technoquizlogo from '../../assets/images/Technoquizlogo.png';

const Logo = () => (
  <Link className="logo" to="/">
    <img src={Technoquizlogo} alt="Navigate to HomePage" />
  </Link>
);

export default Logo;
