import { useGSAP } from "@gsap/react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useAnimateItemsGreatPartners = () => {
  useGSAP(() => {
    const items = gsap.utils.toArray([
      "#card",
    ]);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#films-section",
        start: "top bottom",
        end: "bottom bottom",
        toggleActions: "play none none none",
        scrub: 1.5,
        once: true,
      },
    });

    timeline.fromTo(
      items,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: Power2.easeInOut,
        duration: 0.4,
        stagger: 0.15,
      },
      "-=0.5"
    );
  });
};
