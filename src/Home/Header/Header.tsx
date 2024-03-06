import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const navbar = document.querySelector(`.${styles.navbar}`) as HTMLElement;

      if (navbar) {
        if (scrollTop > 100) {
          navbar.style.top = '0';
        } else {
          navbar.style.top = '100px';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>
            <img className={styles.logo} src='https://w7.pngwing.com/pngs/721/978/png-transparent-school-admission-open-thumbnail.png' alt='admission' />
            <div className={styles.search}>
              <input type="text" placeholder="    Search university ..." className={styles.searchInput} />
              <FontAwesomeIcon className={styles.iconSearch} icon={faSearch} />
            </div>
            <div className={styles.links}>
              <NavLink to='/' className={styles.link}>Help</NavLink>
              <NavLink to='/' className={styles.link}>About</NavLink>
              <NavLink to='/' className={styles.link}><FontAwesomeIcon icon={faBell} /></NavLink>
              <NavLink to='' className={`${styles.btn} ${styles.login}`}>Login</NavLink>
              <NavLink to='' className={`${styles.btn} ${styles.signup}`}>Sign Up</NavLink>
            </div>
          </div>
        </div>
      </div>

      <nav className={`${styles.navbar} navbar navbar-expand-sm navbar-dark bg-primary`}>
        <NavLink className="active" to="/">Home</NavLink>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse justify-content-left" id="collapsibleNavId">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className={`${styles.navLinkHome} nav-link`} to="/">Home</NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className={`${styles.navLinkItem} nav-link`} to="/highschool">University</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${styles.navLinkItem} nav-link`} to="major">Major</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${styles.navLinkItem} nav-link`} to="majorinplan">Major in plan</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${styles.navLinkItem} nav-link`} to="search">Search</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
