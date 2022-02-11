import React from 'react'
import './Project.scss'

const Project = () => {
    return (
        <section class="articles" id="project">
            <h2 class="main-title">Projets</h2>
            <div class="container">
                <div class="box">
                    <img src="images/advantages-limitations-of-diary-studies-1024x600.png" alt="" />
                    <div class="content">
                        <h3>Website eCommerce</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fuga excepturi vel soluta explicabo perferendis incidunt! Porro ipsam enim facilis eveniet similique ea quidem eaque voluptates, commodi nihil, veniam obcaecati!</p>
                    </div>
                    <div class="info">
                        <a href="">Read More <i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
                <div class="box">
                    <img src="images/csm_5b69b61ebf81ab55c4cd1a50581513f372b83c50-fp-16-9-0-0_8dff26a57d.jpeg" alt="" />
                    <div class="content">
                        <h3>Test Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fuga excepturi vel soluta explicabo perferendis incidunt! Porro ipsam enim facilis eveniet similique ea quidem eaque voluptates, commodi nihil, veniam obcaecati!</p>
                    </div>
                    <div class="info">
                        <a href="">Read More <i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>    
            </div>
        </section>
    )
}

export default Project