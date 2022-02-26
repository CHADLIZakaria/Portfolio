import React, { useEffect } from 'react'
import './Project.scss'
import { useState } from 'react'
import { projectsData } from '../../data'
import { Link } from 'react-router-dom'

const Project = () => {
    const [projects, setProjects] = useState([])
    const [classActive, setClassActive] = useState("all")
    useEffect(() => {
        setProjects(projectsData)
    }, [])
    

    const filterProject = (category) => {
        setClassActive(category.toLowerCase())
        if(category==='all') 
            setProjects(projectsData)
        else
            setProjects(projectsData.filter(project => project.category===category))
    }
    return (
        <section className="projects" id="project">
            <h2 className="main-title">Projets</h2>
            <div className='categories'>
                <button className={`${classActive==='all' && 'active'}`} onClick={() => filterProject("all")}>
                    All
                </button>
                <button className={`${classActive==='web' && 'active'}`} onClick={() => filterProject("web")}>
                    Web
                </button>
                <button className={`${classActive==='mobile' && 'active'}`} onClick={() => filterProject("mobile")}>
                    Mobile
                </button>
                <button className={`${classActive==='open-source' && 'active'}`} onClick={() => filterProject("open-source")}>Open source</button>
            </div>
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
                            <a target='_blank' href={`${project.github}`}>Github</a>
                            <a target='_blank' href={`${project.website}`}>View demo</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Project