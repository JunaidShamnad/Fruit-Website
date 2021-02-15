gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    duration: 5,
    pin: true,
  
    pinSpacing: false
  });
});

