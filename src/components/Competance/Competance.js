import React, { useEffect } from 'react'
import './Competance.scss'
import { competances } from '../../data'

const Competance = () => {    
    return (
        <section className="competances" id="competance">
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
            </div>
        </section>
    )
}

export default Competance