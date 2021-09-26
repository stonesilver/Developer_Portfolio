import { useState, useEffect } from 'react';
import Link from 'next/link';
import navbarStyles from './navbar.module.scss';

const NavBar = () => {
  const darkBackgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg fill-opacity='0.43'%3E%3Ccircle fill='%23000000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23060606' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%230c0c0c' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23111111' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23151515' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23181818' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E")`;
  const lightBackgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23FFFFFF' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23f8f8f8' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23f0f0f0' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23e9e9e9' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23e2e2e2' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23DBDBDB' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E")`;
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState(['black', 'white']);
  const [introFooterBackground, setIntroFooterBackground] = useState(
    darkBackgroundImage
  );
  const checkboxOnclick = () => {
    setChecked(!checked);
  };
  useEffect(() => {
    document.body.style.background = theme[0];
    document.body.style.color = theme[1];
    const intro = document.getElementById('intro');
    const footer = document.getElementById('footer');
    intro.style.backgroundImage = introFooterBackground;
    footer.style.backgroundImage = introFooterBackground;
  }, [theme]);
  const changeTheme = () => {
    theme[0] === 'white'
      ? setTheme(['black', 'white'])
      : setTheme(['white', 'black']);
    introFooterBackground === lightBackgroundImage
      ? setIntroFooterBackground(darkBackgroundImage)
      : setIntroFooterBackground(lightBackgroundImage);
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
        </ul>

        <div className={navbarStyles.theme}>
          <input
            type='checkbox'
            name='themeToggle'
            checked={checked}
            onChange={checkboxOnclick}
            id={navbarStyles.themeToggle}
            onClick={changeTheme}
          />
          <div className={navbarStyles.themeToggle}>
            <span className={navbarStyles.modeIcon}>🌞</span>
            <span className={navbarStyles.modeIcon}>🌜</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
