import React from 'react'
import './Formation.scss'
import alpha from '../../images/alpha.png'
import fsts from '../../images/fsts.png'

const Formation = () => {
    return (
        <section class="testimonials" id="testimonials-section">
        <h2 class="main-title">Formation</h2>
        <div class="container">
            <div class="box">
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
            </div>
        </div>
        </section>
    )
}

export default Formation