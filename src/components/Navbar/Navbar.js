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
                  <a className="landing-section active" href="/" activeClassname="active">À propos de moi</a>
                </li>
                <li>
                  <a className="articles-section" to="/" activeClassname="active">Projets</a>
                </li>
                <li>
                  <a href="/" className="features-section" activeClassname="active">Compétences</a>
                </li>
                <li>
                  <a href="/" className="testimonials-section" activeClassname="active">Formation</a>
                </li>  
            </ul>
        </div>
    </header>
  )
}

export default Navbar