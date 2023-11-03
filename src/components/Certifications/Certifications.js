import React, { useEffect } from 'react'
import './Certifications.scss'
import { certifications } from '../../data'

const Certifications = () => {
    return (
        <section className="certifications" id="certifications">
            <h2 className="main-title">Certifications</h2>
            <div class="container">
                <div class="row">
                    {
                        certifications.map((certification, index) =>
                            <div className='certification' key={index}>
                                <div class="image">
                                    <img src={certification.societyLogo} />
                                </div>
                                <div class="info">
                                    <h3 class="title">{certification.name}</h3>
                                    <p class="society">{certification.societyName}</p>
                                    <p class="date">Date de délivrance: {certification.date} </p>
                                    <a target="_blank" href={certification.url} >Afficher l'identifiant</a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Certifications