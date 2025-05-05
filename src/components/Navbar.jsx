"use client"

import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import styles from "../styles/navbar.module.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          BlogEvents
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : "")} onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/blog" className={({ isActive }) => (isActive ? styles.activeLink : "")} onClick={closeMenu}>
                Blog
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? styles.activeLink : "")}
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? styles.activeLink : "")}
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
