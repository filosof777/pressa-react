import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/images/pressa-logo.svg';
import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <div className="container">
        <div className='row'>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <ul className='list'>
            <li className='item'>
              <Link className='text' to="/about">Loyiha haqida</Link>
            </li>
            <li className='item'>
              <Link className='text' to="/faq">Faq</Link>
            </li>
          </ul>
          <Link className='add-btn btn' to="/post">E'lon berish</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
