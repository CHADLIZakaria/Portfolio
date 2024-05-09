import { faAt, faEnvelopeOpen, faPaperPlane, faUser } from "@fortawesome/fontawesome-free-solid"
import { faGoogle, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faLocation, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"
import React from 'react'
import './ContactMe.scss'
import { useTranslation } from "react-i18next"

const ContactMe = () => {
    const [t] = useTranslation("global");
    return (
        <div className="footer wrapper-body">
            <h3 className="main-title">{t('contact.title')}</h3>
            <div className="container">
                <motion.div 
                    initial= {{x: -100}}
                    animate= {{x: 0}}
                    className="box contact-me">
                    <p>{t('contact.title')}</p>
                    <ul className="my-social">
                        <li>
                            <a href="mailto:zakaria.chadli05@gmail.com"  className="link">
                                <FontAwesomeIcon icon={faGoogle} />
                            </a>
                            <span>zakaria.chadli05@gmail.com</span>
                        </li>
                        <li>
                            <a href="tel:+212766131555" className="link">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                            <span>+212766131555</span>
                        </li>
                        <li>
                            <span className="link">
                                <FontAwesomeIcon  icon={faLocation} />
                            </span>
                            <span>{t('contact.address')}</span>
                        </li>
                    </ul>
                </motion.div>
                <motion.div  
                    initial= {{x: 100}}
                    animate= {{x: 0}}
                    className="box form">
                    <div className='form-control'>
                        <label htmlFor="name">{t('contact.name')}</label>
                        <div className='input'>
                            <FontAwesomeIcon icon={faUser}/>
                            <input type="text" id="name" placeholder={t('contact.namePlaceholder')} />
                        </div>
                    </div>
                    <div className='form-control'>
                        <label htmlFor="email">{t('contact.email')}</label>
                        <div className='input'>
                            <FontAwesomeIcon icon={faAt} />
                            <input type="text" id="email" placeholder={t('contact.emailPlaceholder')} />
                        </div>
                    </div>
                    <div className='form-control'>
                        <label htmlFor="subject">{t('contact.subject')}</label>
                        <div className='input'>
                            <FontAwesomeIcon icon={faEnvelopeOpen}/>
                            <input type="text" id="subject" placeholder={t('contact.subjectPlaceholder')}  />
                        </div>
                    </div>
                    <div className='form-control'>
                        <label htmlFor="message">{t('contact.message')}</label>
                        <div className='input'>     
                            <FontAwesomeIcon icon={faMessage}/>
                            <textarea id="message" rows={3} placeholder={t('contact.messagePlaceholder')} ></textarea>
                        </div>
                    </div>
                    <button className='link-button'>
                        Send
                        <FontAwesomeIcon icon={faPaperPlane}/>
                    </button>


                </motion.div>
            </div>
        </div>
    )
}

export default ContactMe