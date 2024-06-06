"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power2 } from "gsap";
import { useGSAP } from "@gsap/react";
import { Card } from "@/components/card/card.component";

gsap.registerPlugin(ScrollTrigger);

const filmes = [
  {
    id: "1",
    title: "Film 1",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbUHbAPGUGCvh8d__x89Q37eZfxcU0lFmUZvzjxQaCNMRXbJfWargDWj4d7n3AmfVoiH-C-GzSe2CDBneLtRmFjraqTI8jHDbw6DtjFYp3zQkuNnSMCJ0kM_qX75w1c1wfsDhr-PTVTmQ/s1920/ash-pokemon-jornadas.jpg",
    releaseYear: "2020",
    director: "Director 1",
  },
  {
    id: "2",
    title: "Film 2",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbUHbAPGUGCvh8d__x89Q37eZfxcU0lFmUZvzjxQaCNMRXbJfWargDWj4d7n3AmfVoiH-C-GzSe2CDBneLtRmFjraqTI8jHDbw6DtjFYp3zQkuNnSMCJ0kM_qX75w1c1wfsDhr-PTVTmQ/s1920/ash-pokemon-jornadas.jpg",
    releaseYear: "2019",
    director: "Director 2",
  },
  {
    id: "3",
    title: "Film 3",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbUHbAPGUGCvh8d__x89Q37eZfxcU0lFmUZvzjxQaCNMRXbJfWargDWj4d7n3AmfVoiH-C-GzSe2CDBneLtRmFjraqTI8jHDbw6DtjFYp3zQkuNnSMCJ0kM_qX75w1c1wfsDhr-PTVTmQ/s1920/ash-pokemon-jornadas.jpg",
    releaseYear: "2019",
    director: "Director 2",
  },
  {
    id: "4",
    title: "Film 4",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbUHbAPGUGCvh8d__x89Q37eZfxcU0lFmUZvzjxQaCNMRXbJfWargDWj4d7n3AmfVoiH-C-GzSe2CDBneLtRmFjraqTI8jHDbw6DtjFYp3zQkuNnSMCJ0kM_qX75w1c1wfsDhr-PTVTmQ/s1920/ash-pokemon-jornadas.jpg",
    releaseYear: "2019",
    director: "Director 2",
  },
  {
    id: "5",
    title: "Film 5",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbUHbAPGUGCvh8d__x89Q37eZfxcU0lFmUZvzjxQaCNMRXbJfWargDWj4d7n3AmfVoiH-C-GzSe2CDBneLtRmFjraqTI8jHDbw6DtjFYp3zQkuNnSMCJ0kM_qX75w1c1wfsDhr-PTVTmQ/s1920/ash-pokemon-jornadas.jpg",
    releaseYear: "2019",
    director: "Director 2",
  },
  {
    id: "6",
    title: "Film 6",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbUHbAPGUGCvh8d__x89Q37eZfxcU0lFmUZvzjxQaCNMRXbJfWargDWj4d7n3AmfVoiH-C-GzSe2CDBneLtRmFjraqTI8jHDbw6DtjFYp3zQkuNnSMCJ0kM_qX75w1c1wfsDhr-PTVTmQ/s1920/ash-pokemon-jornadas.jpg",
    releaseYear: "2019",
    director: "Director 2",
  },
];

const Home = () => {
  useEffect(() => {
    const cards = filmes
      .map((film) => document.querySelector(`#card-${film.id}`))
      .filter(Boolean);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#films-section",
        start: "top 10%",
        end: "bottom bottom",
        toggleActions: "play none none none",
        // scrub: 1.5,
        markers: true,
      },
    });

    timeline.fromTo(
      cards,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: Power2.easeInOut,
        duration: 0.4,
        stagger: 0.15,
      }
    );
  }, []);

  return (
    <div className="bg-white min-h-screen px-[300px] pt-[100px] pb-[200px]">
      <div className="pb-[200x]"></div>
      <div id="films-section" className="flex flex-wrap justify-center">
        {filmes.map((film) => (
          <Card
            key={film.id}
            id={film.id}
            title={film.title}
            image={film.image}
            releaseYear={film.releaseYear}
            director={film.director}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
