import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className='header col-xs-12'>
      <div className='col-xs-6'>
        <Link to='/'>Homepage</Link>
      </div>
      <div className='col-xs-6 text-right'>LinkVOTE Challenge</div>
    </header>
  );
};

export default Header;
