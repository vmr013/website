particlesJS("particles-js", {
  particles: {
    number: {
      value: 100 /* Adjust the number of particles */,
      density: {
        enable: true,
      },
    },
    color: {
      value: ["#FF00FF", "#00FFFF", "#f9f3e8"] /* Set your luxurious colors */,
    },
    opacity: {
      value: 1 /* Adjust particle opacity */,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.2,
        sync: false,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 3 /* Adjust particle size */,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#F5F5F5" /* Line color */,
      opacity: 1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      random: true,
      direction: "none",
      straight: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
      },
    },
    modes: {
      push: {
        particles_nb: 1,
      },
    },
  },
});
