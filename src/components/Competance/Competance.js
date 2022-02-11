import React from 'react'
import './Competance.scss'
import html5 from '../../images/html5.png'
import css3 from '../../images/css3.png'
import js from '../../images/js.png'
import bootstrap from '../../images/bootstrap.png'
import flutter from '../../images/flutter.png'

import java from '../../images/java.png'
import python from '../../images/python.png'
import php from '../../images/php.png'

import mysql from '../../images/mysql.png'
import sqlServer from '../../images/sql-server.png'
import postgresql from '../../images/postgresql.png'

const Competance = () => {
    return (
        <section class="features" id="features-section">
            <h2 class="main-title">Compétences</h2>
            <div class="container">
                <div class="box quality">
                    <div class="img-holder">
                        <h2>Front end</h2>
                        <img src="images/gestion_etat_command.png" alt="" />
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
                        <img src="images/backend-background.jpg" alt="" />
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
                        <img src="images/database.jpeg" alt="" />
                    </div>
                        <ul>
                            <li><img src={mysql}/>MySQL</li>
                            <li><img src={postgresql}/>PostgreSQL</li>
                            <li><img src={sqlServer}/>Sql Server</li>
                        </ul>   
                </div>
            </div>
        </section>
    )
}

export default Competance