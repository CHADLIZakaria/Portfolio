import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import './Particles.scss';

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
            <div className="particles-container">
                <Particles
                    id="tsparticles"
                    options={{
                        interactivity: {
                        detectsOn: "canvas",
                        events: {
                            onHover: {
                                enable: true,
                                mode: "bubble",
                            },
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1,
                            },
                            },
                            bubble: {
                                distance: 83.91608391608392,
                                size: 1,
                                duration: 3,
                                opacity: 1,
                                speed: 3,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                            push: {
                                quantity: 4,
                            },
                            remove: {
                                quantity: 2,
                            },
                        },
                        },
                        particles: {
                            number: {
                                value: 300,
                                density: {
                                    enable: true,
                                    area: 1000,
                                },
                            },
                            color: {
                                value: "#ffffff",
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                width: 0,
                                color: "#000000",
                                },
                                polygon: {
                                nb_sides: 5,
                                },
                            },
                            opacity: {
                                value: 0.48927153781200905,
                                random: false,
                                animation: {
                                    enable: false,
                                    speed: 0.2,
                                    minimumValue: 0,
                                    sync: false,
                                },
                            },
                            size: {
                                value: 2,
                                random: true,
                                animation: {
                                    enable: true,
                                    speed: 2,
                                    minimumValue: 0,
                                    sync: false,
                                },
                            },
                            links: {
                                enable: false,
                                distance: 150,
                                color: "#ffffff",
                                opacity: 0.4,
                                width: 1,
                            },
                            move: {
                                enable: true,
                                speed: 0.2,
                                direction: "none",
                                random: true,
                                straight: false,
                                outMode: "out",
                                bounce: false,
                                attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                                },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
        </>
    );
};

export default ParticlesComponent;