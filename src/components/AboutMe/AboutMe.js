import React from 'react'
import './AboutMe.scss' 
const AboutMe = () => {
  return (
      <section className="landing" id="aboutMe">
        <div className="container-fluid">
            <div className="text">
                <h1>CHADLI Zakaria</h1>
                <p>Developper Full Stack</p>
            </div>
            <div className="image">
                <img src="../../images/my_image.png" alt="" />
            </div>
        </div>
        <a href="#articles-section" className="go-down">
            <i className="fas fa-angle-double-down fa-2x"></i>
        </a>
    </section>
  )
}

export default AboutMe