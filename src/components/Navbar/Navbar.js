import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {


  return (
    <header className="header" id="header">
        <div className="container">
            <Link to="/" className="logo">CHADLI</Link>
            <ul className="main-nav">
                <li>
                  <NavLink className="landing-section active" to="/" activeClassname="active">À propos de moi</NavLink>
                </li>
                <li>
                  <NavLink className="articles-section" to="/" activeClassname="active">Projets</NavLink>
                </li>
                <li>
                  <NavLink to="/" className="features-section" activeClassname="active">Compétences</NavLink>
                </li>
                <li>
                  <NavLink to="/" className="testimonials-section" activeClassname="active">Formation</NavLink>
                </li>  
            </ul>
        </div>
    </header>
  )
}

export default Navbar