import { faCamera } from '@fortawesome/fontawesome-free-solid'
import { faGithub, faInternetExplorer } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { projectsData } from '../../data'
import Carousel from '../Carousel/Carousel'
import './Project.scss'


const Project = () => {
    const [projects, setProjects] = useState([])
    //const [classActive, setClassActive] = useState("all")
    const [currentCarousel, setCurrentCarousel] = useState({showCarousel: false, currentIndexCarousel: 0})

    
    useEffect(() => {
        setProjects(projectsData)
    }, [])
    

    // const filterProject = (category) => {
    //     setClassActive(category.toLowerCase())
    //     if(category==='all') 
    //         setProjects(projectsData)
    //     else
    //         setProjects(projectsData.filter(project => project.category===category))
    // }
    return (
        <section className="projects" id="project">
            <h2 className="main-title">Projets</h2>
            {/* <div className='categories'>
                <button className={`${classActive==='all' && 'active'}`} onClick={() => filterProject("all")}>
                    All
                </button>
                <button className={`${classActive==='web' && 'active'}`} onClick={() => filterProject("web")}>
                    Web
                </button>
                <button className={`${classActive==='mobile' && 'active'}`} onClick={() => filterProject("mobile")}>
                    Mobile
                </button>
            </div> */}
            <div className="container">
                {projects.map((project, index) => (
                    <div className='box' key={index}>
                        <h3 className='project-title'>{project.title}</h3>
                        <div className="image-project" style={{backgroundImage: `url(${project.image})`}}>
                            <div className='project-description'>
                                <p>{project.description}</p>
                                <ul className='technologies'>
                                    {project.technologies.map((technology,index) => (
                                        <li key={index}>
                                            <img src={technology.image} />
                                            {technology.title}
                                        </li>    
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="info">
                            {project.github!=='' && 
                                <a target='_blank' href={`${project.github}`}>
                                    Github
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            }
                            <a target='_blank' onClick={() => {
                                setCurrentCarousel({currentIndexCarousel: index, showCarousel: true})}
                            }>
                                Screenshoot
                                <FontAwesomeIcon icon={faCamera} />
                            </a>
                            <a target='_blank' href={`${project.website}`}>
                                Website
                                <FontAwesomeIcon icon={faInternetExplorer} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
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