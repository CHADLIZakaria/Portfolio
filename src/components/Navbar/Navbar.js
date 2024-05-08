import { faBars } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import en from '../../images/lang/en.png'
import fr from '../../images/lang/fr.png'
import './Navbar.scss'
import { useLanguage } from '../../contexts/LanguageContext'

const Navbar = () => {
  const [t, i18n] = useTranslation("global");
  const navRef = useRef()
  const { setLanguage } = useLanguage();

  const showNavbar=() => {
    navRef.current.classList.toggle("menu-show")
  }
  
  function changeLanguage(lang) {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', JSON.stringify(lang));
  }


  return (
    <header className="header" id="header">
        <div className="container">
          <NavLink to='/' className="logo">CHADLI</NavLink>
          <ul className="main-nav">
            <li>
              <NavLink to='/' activeclassname='active'>
                {t("navbar.home")}
              </NavLink>
            </li>
            <li>
              <NavLink to='/aboutMe' activeclassname='active'>
                {t("navbar.aboutMe")}
              </NavLink>
            </li>
            <li>
              <NavLink to='/projects' activeclassname='active'>
                {t("navbar.projects")}
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact'  activeclassname='active'>
                {t("navbar.contact")}
              </NavLink>
            </li>                
          </ul>
          <div className='lang'>
            <img className={i18n.language === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')} src={en} alt="en" />
            <img className={i18n.language === 'fr' ? 'active': ''} onClick={() => changeLanguage('fr')} src={fr} alt="fr" />
          </div>
        </div>
        <div className='menu'>
          <span className='menu-icon' onClick={showNavbar}>
            <FontAwesomeIcon icon={faBars} />
          </span>
          <ul className='menu-nav' ref={navRef}>
            <li>
              <NavLink to='/' activeclassname='active' onClick={showNavbar}>
                {t("navbar.home")}
              </NavLink>
            </li>
            <li>
              <NavLink to='/aboutMe' activeclassname='active' onClick={showNavbar}>
                {t("navbar.aboutMe")}
              </NavLink>
            </li>
            <li>
              <NavLink to='/projects' activeclassname='active' onClick={showNavbar}>
                {t("navbar.projects")}
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact'  activeclassname='active' onClick={showNavbar}>
                {t("navbar.contact")}
              </NavLink>
            </li>  
          </ul>
        </div>
    </header>
  )
}

export default Navbar