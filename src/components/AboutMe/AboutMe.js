import React from 'react'
import './AboutMe.scss' 
import {faAngleDoubleDown} from '@fortawesome/fontawesome-free-solid'
import myImage from '../../images/my_image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const AboutMe = () => {
    return (
        <section className="landing" id="aboutMe">
            <div className="container-fluid">
                <div className="text">
                    <h1>CHADLI Zakaria</h1>
                    <p>Developper Full Stack</p>
                </div>
                <div className="image">
                    <img src={myImage} alt="" />
                </div>
            </div>
            <a href="#project" className="go-down">
                <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" />
            </a>
        </section>
    )
}

export default AboutMe