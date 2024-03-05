import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'



export default function Header() {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-sm navbar-dark bg-primary`}>
  <NavLink className="active" to="/">Home</NavLink>
  <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavId">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/highschool">University</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="major">Major</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="majorinplan">Major in plan</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="search">Search</NavLink>
      </li>
      
    </ul>
  </div>
</nav>



  )
}

