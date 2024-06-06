"use client";
import { useGSAP } from "@gsap/react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#container",
      {
        opacity: 0,
        x: -200,
      },
      {
        x: 0,
        opacity: 1,
        ease: Power2.easeInOut,
        duration: 0.4,
        scrollTrigger: {
          trigger: "#container",
          start: "top 10%",
          end: "bottom bottom",
          toggleActions: "play none none none",
          scrub: 1.5,
          markers: true,
        },
      }
    );
  });
  return (
    <div className="bg-white py-[500px]">
      <div
        id="container"
        className="bg-gray-500 rounded-r-3xl inline-block mt-[250px] px-[32px] py-[48px] max-w-[30%]"
      >
        <h2>About Us</h2>
        <div className="pt-[32px]"></div>
        <p className="max-w-[100%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam,
          aliquam neque, dolorem recusandae perferendis inventore at ipsam
          facilis quod, aut earum obcaecati repudiandae nesciunt perspiciatis
          libero delectus quibusdam dolore non!
        </p>
        <div className="pt-[24px]"></div>
        <button className="bg-red-500 p-4 rounded-xl">Click</button>
      </div>
    </div>
  );
};

export default About;
