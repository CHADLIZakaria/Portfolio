import { faAt, faEnvelopeOpen, faPaperPlane, faUser } from "@fortawesome/fontawesome-free-solid"
import { faGoogle, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faLocation, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"
import React, { useState } from 'react'
import './ContactMe.scss'
import { useTranslation } from "react-i18next"
import emailjs from 'emailjs-com'

const ContactMe = () => {
    const [t] = useTranslation("global");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const validate = () => {
        const newErrors = {}
        if(!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }
        if(!formData.email.trim()) {
            newErrors.email = 'Email is required'
        }
        else if(!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is not valid'
        }
        if(!formData.message.trim()) {
            newErrors.message = 'Message is required'
        }
        return newErrors;
    }

    const sendEmail = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors)
        if(Object.keys(validationErrors).length === 0) {
            emailjs.send(
                'service_zhl64eq',
                'template_i94v7sd',
                formData,
                'pKUG27b18vjNFW0Gl'
            ).then(
                (result) => {
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    });
                },
                (error) => {
                    console.log(error)
                }
            )
        }
    }

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
                <motion.form
                    onSubmit={sendEmail}  
                    initial= {{x: 100}}
                    animate= {{x: 0}}
                    className="box form">
                    <div className='form-control'>
                        <label htmlFor="name" className="required">
                            {t('contact.name')}                          
                        </label>
                        <div className='input'>
                            <FontAwesomeIcon icon={faUser}/>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder={t('contact.namePlaceholder')} />
                        </div>
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>
                    <div className='form-control'>
                        <label htmlFor="email" className="required">
                            {t('contact.email')}
                        </label>
                        <div className='input'>
                            <FontAwesomeIcon icon={faAt} />
                            <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} placeholder={t('contact.emailPlaceholder')} />
                        </div>
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    <div className='form-control'>
                        <label htmlFor="subject">{t('contact.subject')}</label>
                        <div className='input'>
                            <FontAwesomeIcon icon={faEnvelopeOpen}/>
                            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder={t('contact.subjectPlaceholder')}  />
                        </div>
                    </div>
                    <div className='form-control'>
                        <label htmlFor="message" className="required">
                            {t('contact.message')}
                        </label>
                        <div className='input'>     
                            <FontAwesomeIcon icon={faMessage}/>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={3} placeholder={t('contact.messagePlaceholder')} ></textarea>
                        </div>
                        {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>
                    <button
                        type="submit" 
                        className='link-button'>
                        Send
                        <FontAwesomeIcon icon={faPaperPlane}/>
                    </button>
                </motion.form>
            </div>
        </div>
    )
}

export default ContactMe