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
        <div className="particles-container">
            {
                init && 
                <Particles
                    id="tsparticles"
                    options={{
                    fpsLimit: 30,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        onClick: {
                            enable: false,
                        },
                        resize: true,
                        },
                    },
                    particles: {
                        number: {
                        value: 100, 
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
                        },
                        opacity: {
                        value: 0.5,
                        random: false,
                        animation: {
                            enable: false,  
                        },
                        },
                        size: {
                        value: 2,
                        random: true,
                        animation: {
                            enable: false,  
                        },
                        },
                        move: {
                        enable: true,
                        speed: 0.05,  
                        random: true,
                        straight: false,
                        outMode: "out",
                        },
                    },
                    detectRetina: false,
                    }}
                />
            }
        </div>
    );
};

export default ParticlesComponent;