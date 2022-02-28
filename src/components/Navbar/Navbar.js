import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.scss'

const Navbar = () => {

  

  return (
    <header className="header" id="header">
        <div className="container">
            <Link to="aboutMe"  offset={0} spy={true} className="logo">CHADLI</Link>
            <ul className="main-nav">
                <li>
                    <Link to='aboutMe' offset={-72} spy={true} >
                      À propos de moi
                    </Link>
                </li>
                <li>
                  <Link to='project'  offset={-72} spy={true}>
                      Projets
                  </Link>
                </li>
                <li>
                  <Link to='competance'  offset={-72} spy={true}>
                    Compétance
                  </Link>
                </li>
                <li>
                  <Link to='formation'  offset={-72} spy={true}>
                    Formation
                  </Link>
                </li>  
            </ul>
        </div>
    </header>
  )
}

export default Navbar