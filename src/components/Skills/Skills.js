import { motion } from "framer-motion";
import React from 'react';
import { competances } from '../../data';
import './Skills.scss';

const Skills = () => {
    return (
        <section className="competances" id="competance">
            <div className="container">
                {
                    competances.map((competance, index) => 
                        <motion.div 
                            whileHover={{
                                y: 10,
                                transition: {
                                    duration: .5
                                }
                            }}
                            animate={{y: 0}}
                            initial={{y: -100}} 
                            transition={{duration: .3,  delay: 0.1 * index}}                              
                            className={`box ${competance.domaine.className}`} 
                            key={index}>
                            <div className='img-holder'>
                                <h2>{competance.domaine.name}</h2>
                                <img src={competance.domaine.image} alt={competance.domaine.name} />
                            </div>
                            <ul>
                                {competance.values.map(
                                    (element, index) => 
                                        <li key={index}>
                                            <img src={element.image} alt={element.title} />
                                            {element.title}
                                        </li>
                                )}
                            </ul>
                        </motion.div>
                    )
                }
            </div>
        </section>
    )
}

export default Skills