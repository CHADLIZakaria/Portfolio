import React, { useEffect } from 'react'
import './Competance.scss'
import { competances } from '../../data'



const Competance = () => {
    
    return (
        <section className="features" id="competance">
            <h2 className="main-title">Compétences</h2>
            <div className="container">
                {
                    competances.map((competance, index) => 
                        <div className={`box ${competance.domaine.className}`} key={index}>
                            <div className='img-holder'>
                                <h2>{competance.domaine.name}</h2>
                                <img src={competance.domaine.image} />
                            </div>
                            <ul>
                                {competance.values.map(
                                    (element, index) => 
                                    <li key={index}>
                                        <img src={element.image} />
                                        {element.title}
                                    </li>
                                )}
                            </ul>
                        </div>
                    )
                }

                {/* <div class="box quality">
                    <div class="img-holder">
                        <h2>Front end</h2>
                        <img src={frontEnd} alt="" />
                    </div>
                        <ul>
                            <li><img src={html5} />HTML5</li>
                            <li><img src={css3} />CSS3</li>
                            <li><img src={js} />Javascript</li>
                            <li><img src={bootstrap} />Bootstrap 4</li>
                            <li><img src={flutter} />Flutter</li>
                        </ul>   
                </div>
                <div class="box time">
                    <div class="img-holder">
                        <h2>Back End</h2>
                        <img src={backEnd} alt="" />
                    </div>
                    <ul>
                        <li><img src={java} />Java</li>
                        <li><img src={python}/>Python</li>
                        <li><img src={php} />PHP</li>
                    </ul>    
                </div>
                <div class="box passion">
                    <div class="img-holder">
                        <h2>Database</h2>
                        <img src={databaseBackground} alt="" />
                    </div>
                        <ul>
                            <li><img src={mysql}/>MySQL</li>
                            <li><img src={postgresql}/>PostgreSQL</li>
                            <li><img src={sqlServer}/>Sql Server</li>
                        </ul>   
                </div> */}
            </div>
        </section>
    )
}

export default Competance