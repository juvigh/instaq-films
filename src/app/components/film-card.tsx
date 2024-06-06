'use client'

import { Film } from '../page'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as React from 'react'

export const FilmCard = (film: Film) => {
  gsap.registerPlugin(useGSAP, ScrollTrigger)

  const filmCardRef = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    function animate() {
      const cards = Array.from(document.querySelectorAll('.film-card'))
      gsap.to(cards, {
        y: (i) => -15 + 15 * i + '%',
        z: (i) => 15 * i,
        duration: 1,
        ease: 'sine.inOut',
        stagger: -0.1,
      })

      let lastCard = cards.pop()
      let nextCard = cards[cards.length - 1]
      let slider = document.querySelector('.slider')

      if (lastCard instanceof Element) {
        gsap.to(lastCard, {
          y: '+=150%',
          duration: 0.5,
          ease: 'sine.inOut',
          scrollTrigger: {
            trigger: lastCard,
            start: '20%',
            end: '+=100%',
            scrub: true,
            markers: true,
          },
          onComplete: () => {
            slider?.prepend(lastCard)
            animate()
          },
        })
      }
    }

    animate()
  })

  return (
    <div
      key={film.id}
      className="absolute top-[50%] left-[50%] w-[50%] h-[500px] rounded-lg overflow-hidden bg-black film-card"
      style={{ transform: 'translate3d(-50%, -50%, 0)' }}
      ref={filmCardRef}
    >
      <div
        className="absolute top-[40%] left=[50%] w-full"
        style={{
          transform: 'translate(-50%, -50%)',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      >
        <h2 className="text-[32px] text-bold relative text-center text-stone-300">{film.title}</h2>
        <p>Director: {film.director}</p>
        <p>Release Year: {film.release_year}</p>
      </div>
      <img src={film.image} alt="poster" className="object-cover absolute opacity-75" />
    </div>
  )
}
