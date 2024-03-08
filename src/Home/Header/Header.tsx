import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Search from '../../Pages/Search/Search'; // Corrected import path for Search component

class Header extends Component {
  handleSearchResultClick = (name: string) => {
    console.log('Clicked on result:', name);
    // Handle click on search result here
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.header}>
              <img className={styles.logo} src={require('../../asset/admision.png')} alt='logo' />
              <Search onResultClick={this.handleSearchResultClick} /> {/* Use Search component here */}
              <div className={styles.links}>
                <NavLink to='' className={`${styles.link} ${styles.help}`}>Hỗ Trợ</NavLink>
                <NavLink to='' className={`${styles.link} ${styles.feedback}`}>Góp ý</NavLink>
                <NavLink to='' className={`${styles.link} ${styles.bell}`}><FontAwesomeIcon icon={faBell} /></NavLink>
                <NavLink to='' className={`${styles.btn} ${styles.login}`}>Đăng Nhập</NavLink>
                <NavLink to='' className={`${styles.btn} ${styles.signup}`}>Đăng Ký</NavLink>
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
                <NavLink className={`${styles.navLinkHome} nav-link`} to="/home">TRANG CHỦ</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className={`${styles.navLinkItem} nav-link`} to="/highschool">ĐẠI HỌC</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`${styles.navLinkItem} nav-link`} to="major">DANH MỤC NGÀNH NGHỀ</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`${styles.navLinkItem} nav-link`} to="majorinplan">KẾ HOẠCH NGÀNH NGHỀ</NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className={`${styles.navLinkItem} nav-link`} to="search">Search</NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className={`${styles.navLinkItem} nav-link`} to="score">TÌM KIẾM THEO TỔ HỢP MÔN</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
