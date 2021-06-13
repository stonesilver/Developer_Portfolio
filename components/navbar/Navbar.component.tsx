import React, { useState } from 'react';
import { Dark, Light } from '../svgIcons/Icons';
import navbarStyles from './navbar.module.scss';

const NavBar = () => {
  const [checked, setChecked] = useState(false);
  const checkboxOnclick = () => {
    setChecked(!checked);
  };
  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.navbarLogoContainer}>
        <div className={navbarStyles.navbarLogo}>
          <span className={navbarStyles.code}>&#60;</span>
          <span className={navbarStyles.code}>&#8725;</span>
          <span className={navbarStyles.code}>&#62;</span>
        </div>
        <span className={navbarStyles.name}>ESC</span>
      </div>
      <div className={navbarStyles.navbarLinksContainer}>
        <input
          type='checkbox'
          name='mobileToggle'
          id={navbarStyles.mobileToggle}
        />
        <div className={navbarStyles.mobileToggle}>
          <div className={navbarStyles.hamburgerContainer}>
            <span className={navbarStyles.hambuger}></span>
            <span className={navbarStyles.hambuger}></span>
            <span className={navbarStyles.hambuger}></span>
          </div>
        </div>
        <ul className={navbarStyles.navLinks}>
          <li className={navbarStyles.link}>
            <a href='#about'>About</a>
          </li>
          <li className={navbarStyles.link}>
            <a href='#works'>Works</a>
          </li>
          <li className={navbarStyles.link}>
            <a href='#services'>Services</a>
          </li>
          <li className={navbarStyles.link}>
            <a href='#contact'>Contact</a>
          </li>
          <li className={navbarStyles.theme}>
            <input
              type='checkbox'
              name='themeToggle'
              checked={checked}
              onChange={checkboxOnclick}
              id={navbarStyles.themeToggle}
            />
            <div className={navbarStyles.themeToggle}>
              <Dark /> <Light />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
