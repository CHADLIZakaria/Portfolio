import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import './Particles.scss';
import BackgroundImage from "../BackgroundImage/BackgroundImage";

import backgroundImage from '../../images/background/home-background.jpg';

const ParticlesComponent = () => {

    const [ init, setInit ] = useState(false);
    
    useEffect(() => {
        initParticlesEngine(async (engine) => {        
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
         init && 
         <>
            <BackgroundImage src={backgroundImage} />
            <div className="particles-container"><Particles
                id="tsparticles"
                options={{
                    fpsLimit: 120,
                    interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "bubble",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        bubble: {
                            color: "#0077b6",
                            distance: 100,
                            duration: 2,
                            opacity: 1,
                            size: 10,
                            speed: 3
                        }
                    },
                    },
                    particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#0077b6",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 20,
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: true
                        }
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000"
                        },
                        polygon: {
                            nb_sides: 3
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                    },
                    detectRetina: true,
                }}
            /></div>
         </>
         
    );
};

export default ParticlesComponent;