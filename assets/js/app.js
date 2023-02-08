// Typing Text
var typed = new Typed("#typed", {
  strings: ["Mudah, cepat dan terpercaya"],
  typeSpeed: 150,
  startDelay: 100,
  loop: true,
});

// GreenSock Script
gsap.registerPlugin(TextPlugin);
gsap.from(".navbar", { duration: 1.5, y: "-100%", opacity: 0, ease: "bounce" });
gsap.from(".text-green", { duration: 2.5, x: -50, opacity: 0, delay: 0.5 });

// 3d animate Tilt
VanillaTilt.init(document.querySelectorAll(".image-box"), {
  max: 25,
  speed: 1000,
  glare: true,
});
