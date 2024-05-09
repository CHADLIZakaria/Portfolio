import { motion } from "framer-motion";
import React from 'react';
import { certifications } from '../../data';
import './Certifications.scss';

const Certifications = () => {
    return (
        <section className="certifications" id="certifications">
            <div className="certifications-container">
                <div className="row">
                    {
                        certifications.map((certification, index) =>
                            <motion.div
                                animate={{x: 0}}
                                initial={{x: index % 2 === 0 ? -100 : 100,}} 
                                transition={{duration: .3,  delay: 0.1 * index}} 
                                className='certification'
                                key={index}>
                                <div className="image">
                                    <img src={certification.societyLogo} alt={certification.name} />
                                </div>
                                <div className="info">
                                    <h3 className="title">{certification.name}</h3>
                                    <p className="society">{certification.societyName}</p>
                                    <p className="date">Date de délivrance: {certification.date}</p>
                                    <a target="_blank" href={certification.url} rel="noreferrer">Afficher l'identifiant</a>
                                </div>
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Certifications