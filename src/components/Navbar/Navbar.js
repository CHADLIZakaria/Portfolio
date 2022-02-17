import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {


  return (
    <header className="header" id="header">
        <div className="container">
            <a href="/" className="logo">CHADLI</a>
            <ul className="main-nav">
                <li>
                  <a href="#aboutMe" className="landing-section active">À propos de moi</a>
                </li>
                <li>
                  <a href="#project" className="articles-section">Projets</a>
                </li>
                <li>
                  <a href="#competance" className="features-section">Compétances</a>
                </li>
                <li>
                  <a href="#formation" className="testimonials-section">Formation</a>
                </li>  
            </ul>
        </div>
    </header>
  )
}

export default Navbar