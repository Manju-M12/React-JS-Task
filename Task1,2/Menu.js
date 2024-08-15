
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu'; 
import './style.css'
export function Menu() {
  return (
    <>
    <nav className="navbar">
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to ="/portfolio">Portfolio</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/pages">Pages</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    </>
  );
}
