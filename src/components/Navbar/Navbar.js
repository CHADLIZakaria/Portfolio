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
                  <a href="#aboutMe" className="landing-section active" activeClassname="active">À propos de moi</a>
                </li>
                <li>
                  <a href="#projet" className="articles-section"  activeClassname="active">Projets</a>
                </li>
                <li>
                  <a href="#competance" className="features-section" activeClassname="active">Compétances</a>
                </li>
                <li>
                  <a href="#formation" className="testimonials-section" activeClassname="active">Formation</a>
                </li>  
            </ul>
        </div>
    </header>
  )
}

export default Navbar