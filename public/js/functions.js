gsap.registerPlugin(ScrollTrigger);

gsap.to(".img1", {
  translateX: 50,
  duration: 4,
  scrollTrigger: {
    trigger: ".about-us",
    start: "top",
    end: "bottom",
    scrub: 3,
  },
});
gsap.to(".img2", {
  translateX: -50,
  duration: 4,
  scrollTrigger: {
    trigger: ".img1",
    start: "top",
    end: "bottom",
    scrub: 3,
  },
});
gsap.to(".img3", {
  translateX: 50,
  duration: 4,
  scrollTrigger: {
    trigger: ".img2",
    start: "top",
    end: "bottom",
    scrub: 3,
  },
});
gsap.to(".hero-text", {
  translateY: -100,
  duration: 4,
  scrollTrigger: {
    start: "top",
    end: "bottom",
    scrub: 3,
  },
});
