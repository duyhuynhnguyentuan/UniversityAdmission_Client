import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Search from '../../Pages/Search/Search'; // Import the Search component
import axios from 'axios';

export default function Header() {
  // State to store the searched university
  const [searchedUniversity, setSearchedUniversity] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle the click on search result
  const handleSearchResultClick = (name: string) => {
    console.log('Clicked on result:', name);
    setSearchedUniversity(name);
    // You can perform any other action here based on the clicked result
  };

  const handleLogout =  () => {
 
      localStorage.removeItem('token');
      window.location.href = '/home';
    
  };

  // Effect to handle the scroll event
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // If token exists, set login status to true
    }
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const navbar = document.querySelector(`.${styles.navbar}`) as HTMLElement;

      if (navbar) {
        if (scrollTop > 1) {
          navbar.style.top = '0';
        } else {
          navbar.style.top = '100px';
        }
      }
    }
    ;

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img className={styles.logo} src={require('../../asset/admision.png')} alt='logo' />
          <Search onResultClick={handleSearchResultClick} /> {/* Use the Search component */}
          <div className={styles.links}>
            <NavLink to='' className={`${styles.link} ${styles.help}`}>Hỗ Trợ</NavLink>
            <NavLink to='' className={`${styles.link} ${styles.feedback}`}>Góp ý</NavLink>
            <NavLink to='' className={`${styles.link} ${styles.bell}`}><FontAwesomeIcon icon={faBell} /></NavLink>
            {isLoggedIn ? (
              <NavLink to='' className={`${styles.btn} ${styles.logout}`} onClick={handleLogout}>Đăng Xuất</NavLink>
            ) : (
              <>
                <NavLink to='/login' className={`${styles.btn} ${styles.login}`}>Đăng Nhập</NavLink>
                <NavLink to='/register' className={`${styles.btn} ${styles.signup}`}>Đăng Ký</NavLink>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Popup box to display searched university */}
      {searchedUniversity && (
        <div className={styles.searchedUniversity}>
          <p>{searchedUniversity}</p>
        </div>
      )}

      {/* Navigation bar */}
      <nav className={`${styles.navbar} navbar navbar-expand-sm navbar-dark bg-primary`}>
        <NavLink className="active" to="/">Home</NavLink>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse justify-content-left" id="collapsibleNavId">
          <ul className="navbar-nav">
<li className="nav-item active">
              <NavLink className={`${styles.navLinkHome} nav-link`} to="/home">TRANG CHỦ</NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className={`${styles.navLinkItem} nav-link`} to="/university">ĐẠI HỌC</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${styles.navLinkItem} nav-link`} to="major">DANH MỤC NGÀNH NGHỀ</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${styles.navLinkItem} nav-link`} to="admissionPage">KẾ HOẠCH NGÀNH NGHỀ</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${styles.navLinkItem} nav-link`} to="highschool">THPT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${styles.navLinkItem} nav-link`} to="score">TÌM KIẾM</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}