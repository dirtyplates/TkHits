// Custom particles.js configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,  // Number of particles
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ff0000"  // Sparkle color set to red
        },
        shape: {
            type: "circle",  // Shape of particles
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5,
            random: true  // Random opacity for sparkles
        },
        size: {
            value: 3,
            random: true  // Random size for sparkles
        },
        line_linked: {
            enable: false,  // Disable lines between particles for a cleaner sparkle effect
        },
        move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});
