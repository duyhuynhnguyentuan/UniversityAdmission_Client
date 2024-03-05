import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'



export default function Header() {
  return (
    <div>
      <div className={styles.topnav}>
        <NavLink className="active" to="/">Home</NavLink>
        <NavLink to="/highschool">University</NavLink>
        <NavLink to="major">Major</NavLink>
        <NavLink to="majorinplan">Major in plan</NavLink>
        <NavLink to="search">Search</NavLink>
      </div>
    </div>
  )
}

