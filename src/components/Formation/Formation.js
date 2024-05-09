import { motion } from "framer-motion";
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { formations } from '../../data';
import './Formation.scss';

const Formation = () => {
    const { language } = useLanguage();
    return (
        <section className="formations" id="formation">
            <motion.div 
                animate={{x: 0}}
                initial={{x: -200}} 
                transition={{duration: 1}} 
                className="container">
                {formations[language].map((formation, index) =>
                    <motion.div
                        animate={{y: 0}}
                        initial={{y: index%2===0 ? 100: -100}}
                        transition={{duration: .3,  delay: 0.1 * index}} 
                        className='box' key={index}>
                        <img src={formation.formationImage} alt={formation.formationName} />
                        <h3>{formation.formationName}</h3>
                        <span className='title'>{formation.formationDescription}</span>
                    </motion.div>
                )}
            </motion.div>
        </section>
    )
}

export default Formation