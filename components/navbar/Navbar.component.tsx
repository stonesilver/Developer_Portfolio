import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dark, Light } from '../svgIcons/Icons';
import navbarStyles from './navbar.module.scss';

const NavBar = () => {
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState(['black', 'white']);
  const checkboxOnclick = () => {
    setChecked(!checked);
  };
  useEffect(() => {
    document.body.style.background = theme[0];
    document.body.style.color = theme[1];
  }, [theme]);
  const changeTheme = () => {
    theme[0] === 'white'
      ? setTheme(['black', 'white'])
      : setTheme(['white', 'black']);
  };
  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.navbarLogoContainer}>
        <Link href='/'>
          <span className={navbarStyles.name}>{'<ESC />'}</span>
        </Link>
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
            <a href='#skills'>Skills</a>
          </li>
          <li className={navbarStyles.link}>
            <a href='#projects'>Projects</a>
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
              onClick={changeTheme}
            />
            <div className={navbarStyles.themeToggle}>
              <Light /> <Dark />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
