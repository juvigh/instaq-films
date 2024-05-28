import { getClient } from '@/lib/client'
import { gql } from '@apollo/client'
import * as React from 'react'

import { FilmCard } from './components/film-card'
import { Title } from './components/title'

export type Film = {
  id: string
  title: string
  image: string
  release_year: string
  director: string
}

const listFilms = gql`
  query ListAllFilms {
    films {
      directorByDirector {
        name
        id
      }
      image
      id
      release_year
      title
    }
  }
`

export default async function Home() {
  const client = getClient()

  const { data } = await client.query({
    query: listFilms,
    fetchPolicy: 'no-cache',
  })

  return (
    <main className="bg-black text-white relative w-screen h-screen overflow-hidden">
      <div className="text-center absolute top-0 w-full">
        <Title />
      </div>

      <div className="relative w-screen h-screen overflow-hidden">
        <div
          className="absolute top-[100px] w-screen h-screen overflow-hidden slider"
          style={{ perspective: '350px', perspectiveOrigin: '50% 100%' }}
        >
          {data?.films?.map((film: any) => <FilmCard key={film.id} {...film} />)}
        </div>
      </div>
    </main>
  )
}
