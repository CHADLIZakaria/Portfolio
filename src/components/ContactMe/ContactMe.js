import React from 'react'
import './ContactMe.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGoogle, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faMapMarkerAlt } from "@fortawesome/fontawesome-free-solid"

const ContactMe = () => {
    return (
        <div className="footer"> 
            <div className="container">
                <div className="box">
                    <h3>CHADLI Zakaria</h3>
                    <ul className="social">
                        <li>
                            <a href="https://www.facebook.com/zakaria.chadli.927/" target="_blank" className="facebook">
                                <FontAwesomeIcon icon={faFacebookSquare} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/CHADLIZakaria" target="_blank" className="github">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/zakaria-chadli/" target="_blank" className="linkedin">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:zakaria.chadli05@gmail.com" className="gmail" >
                                <FontAwesomeIcon icon={faGoogle} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="box">
                    <div className="line">
                        <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} />
                        <div className="info">Kenitra, Morocco</div>
                    </div>
                    <div className="line">
                        <FontAwesomeIcon className='icon' icon={faPhone} />
                        <div className="info">+212766131555</div>
                    </div>
                </div>
            </div>
            <p className="copyright">Made with &lt;3 CHADLI</p>
        </div>
    )
}

export default ContactMe