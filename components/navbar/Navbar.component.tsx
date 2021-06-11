import navbarStyles from './navbar.module.scss';
const NavBar = () => {
  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.navbarLogoContainer}>
        <div className={navbarStyles.navbarLogo}>
          <span className={navbarStyles.code}>&#60;</span>
          <span className={navbarStyles.code}>&#8725;</span>
          <span className={navbarStyles.code}>&#62;</span>
        </div>
      </div>
      <div className={navbarStyles.navbarLinksContainer}>
        <ul className={navbarStyles.navLinks}>
          <li className={navbarStyles.link}><a href="#about">About</a></li>
          <li className={navbarStyles.link}><a href="#works">Works</a></li>
          <li className={navbarStyles.link}><a href="#services">Services</a></li>
          <li className={navbarStyles.link}><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
