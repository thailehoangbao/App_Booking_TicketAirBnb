import React from 'react';
import './Header.css';
import HeaderTop from './HeaderTop/HeaderTop';

export default function Header() {
  return (
    <header>
      <div className='header-top'>
        <HeaderTop  />
      </div>
    </header>
  )
}
