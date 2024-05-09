import { faCircle } from '@fortawesome/fontawesome-free-regular'
import { faChevronCircleLeft, faChevronCircleRight, faLink } from '@fortawesome/fontawesome-free-solid'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faCircle as faCirlceActive } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"
import React, { useCallback, useEffect, useState } from 'react'
import { projectsData } from '../../data'
import Carousel from '../../components/Carousel/Carousel'
import './Project.scss'
import { useLanguage } from '../../contexts/LanguageContext'


const Project = () => {
    const [projects, setProjects] = useState([])
    const [classActive, setClassActive] = useState("all")
    const [currentCarousel, setCurrentCarousel] = useState({showCarousel: false, currentIndexCarousel: 0})
    const [indexProject, setIndexProject] = useState(0)
    const { language } = useLanguage();
        
    const filterProject = useCallback((category) => {
        setClassActive(category.toLowerCase());
        if(category === 'all') 
            setProjects(projectsData[language]);
        else
            setProjects(projectsData[language].filter(project => project.category === category));
        setIndexProject(0);
    }, [language]);

    useEffect(() => {
        setProjects(projectsData[language])
        filterProject('all')
    }, [language,filterProject])
    
    const setNextProject =  (index)  => {
        if(index >= projects.length-1) {
            index=0
        }
        else {
            index += 1;
        } 
        setIndexProject(index);
    }
     
    const setPrevProject =  (index)  => {
        if(index === 0) {
            index = projects.length-1
        }
        else {
            index -= 1;
        } 
        setIndexProject(index);
    }

  
    return (
        <section className="wrapper-body projects" id="project">
            <div className='main-title'>Projects</div>
            <motion.div 
                animate={{x: 0}}
                initial={{x: -100}} 
                transition={{duration:1}}
                className='categories'>
                <button className={`${classActive==='all' && 'active'}`} onClick={() => filterProject("all")}>
                    All
                </button>
                <button className={`${classActive==='web' && 'active'}`} onClick={() => filterProject("web")}>
                    Web
                </button>
                <button className={`${classActive==='mobile' && 'active'}`} onClick={() => filterProject("mobile")}>
                    Mobile
                </button>
            </motion.div> 
            <motion.div 
                animate={{x: 0}}
                initial={{x: -100}} 
                transition={{duration:1}}
                className="container">
                <button className='prev-button'>
                    <FontAwesomeIcon icon={faChevronCircleLeft} onClick={()=> setPrevProject(indexProject)} />
                </button>
                {
                    projects.map((project, index) => (
                        <div 
                            key={index}
                            style={{
                                zIndex: `${indexProject === index ? projects.length : projects.length-1 - index}`,
                                transform: `translate3d(0px, ${index===indexProject ? 0: index <= indexProject ? (index+1)*10: (index)*10}px, 0px) rotateZ(${index===indexProject ? 0:index <= indexProject ? -1*(index+1):-1*index}deg) scale(1)`}}
                            className='project'>
                            <div className='project-description'>
                                <div className='description'>
                                    <h4 className='title'>{project.title}</h4>
                                    <p className='description'>{project.description}</p>                                
                                </div>                                
                                <div className='technologies'>
                                    <h5 className='technologies-title'>Technologies</h5>
                                    <ul className='technologies-data'>
                                        {project.technologies.map((technology,index) => (
                                            <li className='technologie' key={index}>
                                                <img src={technology.image} alt={technology.title} />
                                                <span>{technology.title}</span>
                                            </li>    
                                            )
                                        )}
                                    </ul>
                                    <div  className='link-project'>
                                        <a href={project.github} target='_blank' className='link-button' rel="noreferrer">
                                            GITHUB
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                        <a href={project.website} target='_blank' className='link-button' rel="noreferrer">
                                            DEMO
                                            <FontAwesomeIcon icon={faLink} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                        </div>
                    ))
               } 
               {
                <ul className='bullet'>
                    {
                    [...Array(projects.length).keys()].map((index) => 
                        <li key={index} onClick={()=> setIndexProject(index)} > <FontAwesomeIcon icon={index===indexProject ? faCirlceActive : faCircle} /> </li>
                    )

                    }
                </ul>
               }           
                <button className='next-button'>
                    <FontAwesomeIcon icon={faChevronCircleRight} onClick={()=> setNextProject(indexProject)} />
                </button>
                
            </motion.div>
            {currentCarousel.showCarousel &&
                <Carousel imageData={projectsData[currentCarousel.currentIndexCarousel].screenshoot} 
                    onClose={() => 
                        setCurrentCarousel({...currentCarousel, showCarousel: false})} 
                />
            }
        </section>
    )
}

export default Project