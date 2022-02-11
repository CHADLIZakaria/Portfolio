import React from 'react'
import './ContactMe.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGoogle, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faMapMarkerAlt } from "@fortawesome/fontawesome-free-solid"

const ContactMe = () => {
    return (
        <div class="footer"> 
            <div class="container">
                <div class="box">
                    <h3>CHADLI Zakaria</h3>
                    <ul class="social">
                        <li>
                            <a href="https://www.facebook.com/zakaria.chadli.927/" target="_blank" class="facebook">
                                <FontAwesomeIcon icon={faFacebookSquare} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/CHADLIZakaria" target="_blank" class="github">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/zakaria-chadli/" target="_blank" class="linkedin">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:zakaria.chadli05@gmail.com" class="gmail" >
                                <FontAwesomeIcon icon={faGoogle} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="box">
                    <div class="line">
                        <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} />
                        <div class="info">Kenitra, Morocco</div>
                    </div>
                    <div class="line">
                        <FontAwesomeIcon className='icon' icon={faPhone} />
                        <div class="info">+212766131555</div>
                    </div>
                </div>
            </div>
            <p class="copyright">Made with &lt;3 CHADLI</p>
        </div>
    )
}

export default ContactMe