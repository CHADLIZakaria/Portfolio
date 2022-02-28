import React from 'react'
import './Formation.scss'
import { formations } from '../../data'

const Formation = () => {
    return (
        <section className="formations" id="formation">
        <h2 className="main-title">Formation</h2>
        <div className="container">
            {formations.map((formation, index) => 
                <div className='box' key={index}>
                    <img src={formation.formationImage} />
                    <h3>{formation.formationName}</h3>
                    <span className='title'>{formation.formationDescription}</span>
                </div>    
            )}
            {/* <div class="box">
                <img src={alpha} alt="" />
                <h3>Baccaleaurat</h3>
                <span class="title">Baccaleaurat option Physics Groupe pédagogique alpha</span>
            </div>
            <div class="box">
                <img src={fsts} alt="" />
                <h3>DEUST MIP</h3>
                <span class="title">Diplôme d'Etudes Universitaires Scientifiques et Techniques en Math Informatique Physiques</span>
            </div>
            <div class="box">
                <img src={fsts} alt="" />
                <h3>LST GI</h3>
                <span class="title">Licences Sciences et Techniques en Génie informatique</span>
            </div>
            <div class="box">
                <img src={fsts} alt="" />
                <h3>Master IMSC</h3>
                <span class="title">Master en Informtique et Modélisation des Sytèmes Complexes</span>
            </div> */}
        </div>
        </section>
    )
}

export default Formation