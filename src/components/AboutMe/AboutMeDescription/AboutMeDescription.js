import { faFacebookSquare, faGithub, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"
import React from 'react'
import { useTranslation } from 'react-i18next'
import myImage from '../../../images/CHADLIZakaria.png'
import './AboutMeDescription.scss'

const AboutMeDescription = () => {
  const [ t ] = useTranslation("global");
    return (
        <section className='aboutMe-description'>
            <div className='aboutMe-container'>
                <motion.div  animate={{y: 0}}
                    initial={{y:-100}} 
                    transition={{duration:1}}  
                    className="me">
                    <motion.div className="box" 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}>
                        <div   
                            className='header-image'>
                            <img src={myImage} alt="" />
                            <h3>CHADLI Zakaria</h3>
                        </div>
                        <ul className="social">
                            <li>
                                <motion.a 
                                    whileHover={{
                                        borderRadius: '6px',
                                        scale:1.1, 
                                        backgroundColor: "#1877f2",
                                        transition: { duration: .5 },
                                    }} 
                                    href="https://www.facebook.com/zakaria.chadli.927/" target="_blank" className="facebook">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </motion.a>
                            </li>
                            <li>
                            <motion.a 
                                whileHover={{
                                    borderRadius: '6px',
                                    scale:1.1, 
                                    backgroundColor: "#24292e",
                                    transition: { duration: .5 },
                                }} 
                                href="https://github.com/CHADLIZakaria" target="_blank" className="github">
                                    <FontAwesomeIcon icon={faGithub} />
                                </motion.a>
                            </li>
                            <li>
                                <motion.a 
                                    whileHover={{
                                        borderRadius: '6px',
                                        scale:1.1, 
                                        backgroundColor: "#0077b5",
                                        transition: { duration: .5 },
                                    }}  
                                    href="https://www.linkedin.com/in/zakaria-chadli/"
                                    target="_blank" 
                                    className="linkedin">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </motion.a>
                            </li>
                            <li>
                                <motion.a 
                                    whileHover={{
                                        borderRadius: '6px',
                                        scale:1.1, 
                                        backgroundColor: "#ea4335",
                                        transition: { duration: .5 },
                                    }}  
                                    href="mailto:zakaria.chadli05@gmail.com"
                                    className="gmail" >
                                    <FontAwesomeIcon icon={faGoogle} />
                                </motion.a>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div  
                        animate={{x: 0}}
                        initial={{x:-500}} 
                        transition={{duration:1}} 
                        className="box form">
                            {t('aboutMe.description')}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutMeDescription