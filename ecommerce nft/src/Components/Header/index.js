import React from 'react';
import './style.scss';

const Header = () => {
  return (
    <div className="header">
      <nav className="header__navbar">
        <div className="header__logo"><span></span> Retro Funky Cats</div>
        <ul className="header__list">
          <li >Market</li>
          <li>Discover</li>
          <li>About</li>
          <li>Artist</li>
        </ul>
        
        <div className="header__search">
          <input
            className="header__input "
            type="text"
            placeholder="Search related to NFT " /> 
           <span> 0 </span> 
        </div>
      </nav>
    </div>
  )
}

export default Header