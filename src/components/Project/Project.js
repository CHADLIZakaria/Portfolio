import React, { useEffect } from 'react'
import './Project.scss'
import { useState } from 'react'
import { projectsData } from '../../data'

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
            setProjects(projectsData.filter(project => project.category==category))
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
                        <div className="content">
                            <h3>{project.title}</h3>
                            <p>{project.subtitle}</p> 
                        </div>
                        <div className="info">
                            <a href="">Read More <i className="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Project