
import { faCircle, faDotCircle } from '@fortawesome/fontawesome-free-regular'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons/faAngleDoubleDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './AboutMe.scss'
import AboutMeDescription from '../../components/AboutMeDescription/AboutMeDescription'
import Competance from '../../components/Skills/Skills'
import Certifications from '../../components/Certifications/Certifications'
import Formation from '../../components/Formations/Formations'


const AboutMe = () => {
    const [t] = useTranslation("global");
    const [page, setCurrentPage] = useState(0);
    const [hoverIconIndex, setHoverIconIndex] = useState(null);

    const handlePrevPageChange = () => {
        setCurrentPage(prev => Math.max(0, prev - 1));
    };

    const handleNextPageChange = () => {
        setCurrentPage(prev => Math.min(3, prev + 1));
    };

    const handlePageChange = (index) => {
        setCurrentPage(index);
    };

    const renderSwitch = (param) => {
        switch (param) {
            case 0: return <AboutMeDescription />;
            case 1: return <Competance />;
            case 2: return <Certifications />;
            case 3: return <Formation />;
            default: return 'Unknown section';
        }
    };

    const renderTitle = (param) => {
        switch (param) {
            case 0: return t("navbar.aboutMe");
            case 1: return t("navbar.skills");
            case 2: return t("navbar.certifications");
            case 3: return  t("navbar.formations");
            default: return 'Unknown title';
        }
    };

    const handleMouseEnter = (index) => () => {
        setHoverIconIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIconIndex(null);
    };

    return (
        <div className='aboutMe'>
            {page !== 0 &&
                <button className='go-up' onClick={handlePrevPageChange} aria-label="Go up">
                    <FontAwesomeIcon icon={faAngleDoubleUp} size="2x" />
                </button>
            }                
            <h3 className="main-title">
                {renderTitle(page)}
            </h3>
            <div className='aboutMe-section'>
                {renderSwitch(page)}
                <motion.ul 
                        animate={{y: 0}}
                        initial={{y:-100}} 
                        transition={{duration:1}}  className="scroll-menu">
                        {[t('navbar.aboutMe'),t('navbar.skills'), t('navbar.certifications'),  t('navbar.formations')].map((title, index) => (
                        <li key={title}
                            onMouseEnter={handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            onClick={()=> handlePageChange(index)}
                            className={page === index ? 'active' : undefined}>
                            <span className="title">{title}</span>
                            <span className='icon'>
                                <FontAwesomeIcon 
                                    icon={page === index ? faDotCircle : (hoverIconIndex === index ? faDotCircle : faCircle)}                                
                                />
                            </span>
                        </li>
                    ))}
                </motion.ul>
            </div>
            {page < 3 &&
                <button className='go-down' onClick={handleNextPageChange} aria-label="Go down">
                    <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" />
                </button>
            }
        </div>
    );
};

export default AboutMe;