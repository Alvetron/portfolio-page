gsap.registerPlugin(ScrollTrigger);

gsap.from('.about-me__text', {
    scrollTrigger: '.about-me__text',
    scale: 0.5,
    duration: 0.5,
});

gsap.from('.about-me__pictures', {
    scrollTrigger: '.about-me__pictures',
    opacity: 0,
    scale: 0.7,
    delay: 0.3,
    duration: 0.5,
});

gsap.from('.skills__item', {
    scrollTrigger: '.skills__list',
    opacity: 0,
    y: -100,
    duration: 0.3,
    stagger: 0.2
});

gsap.from('.portfolio__item', {
    scrollTrigger: '.portfolio__item',
    opacity: 0,
    x: -100,
    delay: 0.3,
    duration: 0.3,
    stagger: 0.5,
});
