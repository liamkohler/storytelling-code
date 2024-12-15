//horizontal scroll

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, Draggable);

//scroll trigger
gsap.registerPlugin(ScrollTrigger);

gsap.to(".horizontal-scroll", {
  x: () =>
    -(
      document.querySelector(".horizontal-scroll").scrollWidth -
      window.innerWidth
    ) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-scroll-container",
    start: "top top",
    end: () =>
      "+=" +
      (document.querySelector(".horizontal-scroll").scrollWidth -
        window.innerWidth),
    scrub: true,
    pin: true,
    anticipatePin: 1,
  },
});

//parallax

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".dialogue-parallax-container",
      start: "center center",
      scrub: 0.1,
      pin: true,
    },
  })
  .to(
    ".dialogue-parallax-devant",
    {
      y: "-129vh",
    },
    0
  )
  .to(
    ".dialogue-parallax-milieu",
    {
      y: "-200vh",
    },
    0
  )
  .to(
    ".dialogue-parallax-background",
    {
      y: "-50vh",
    },
    0
  );
