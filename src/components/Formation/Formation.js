import React from 'react'
import './Formation.scss'
import { formations } from '../../data'

const Formation = () => {
    return (
        <section className="formations" id="formation">
            <h2 className="main-title">Formations</h2>
            <div className="container">
                {formations.map((formation, index) =>
                    <div className='box' key={index}>
                        <img src={formation.formationImage} />
                        <h3>{formation.formationName}</h3>
                        <span className='title'>{formation.formationDescription}</span>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Formation