import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { animate, motion, useAnimation } from "framer-motion"
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Typewriter from 'typewriter-effect'
import myImage from '../../images/me.png'
import './Home.scss'

const Home = () => {
  const [t] = useTranslation("global");
  const controls = useAnimation();

    const startLoop = async () => {
       await animate('.cv a', {x: 0}, {duration: 1});  
       animate('.cv a', {scale: 1.1}, {repeat: Infinity, duration:  1.5});  
    };

  useEffect(() => {
    startLoop();
  }, [controls]);

    return (
        <section className="home" id="home">
            <div className="container-fluid">
                <div className='about-header'>
                    <motion.div 
                        animate={{x: 0}}
                        initial={{x: -100}} 
                        transition={{duration:1}}
                        className="image">
                        <motion.img src={myImage} alt="" loading='lazy'/>
                    </motion.div>
                    <div className="text">
                        <motion.h3
                            animate={{x: 0}}
                            initial={{x:-500}} 
                            transition={{duration:1}}>
                            CHADLI Zakaria                                         
                        </motion.h3>
                        <motion.div 
                            animate={{x: 0}}
                            initial={{x: -500}} 
                            transition={{duration:1}} 
                            className='role'>
                            <div>
                                {t("aboutMe.developper")}
                            </div>
                            {  <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.pauseFor(100)
                                    .typeString('Full Stack')
                                    .pauseFor(300)
                                    .deleteAll()
                                    .typeString('Java & Flutter')
                                    .pauseFor(1000)
                                    .start();
                                }}
                                options={{
                                    loop: true,
                                }}
                            /> }
                        </motion.div>
                        <div className='cv'>  
                            <motion.a
                                href="/Resume_CHADLI_Zakaria.pdf" download
                                animate={controls}
                                initial={{x:-100}}
                               >
                                RESUME
                                <FontAwesomeIcon icon={faFileArrowDown} />
                            </motion.a>
                        </div>
                    </div>
                </div>                          
            </div>
        </section>
    );
}

export default Home;