import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';
import Image from 'next/image';
import * as React from 'react';

interface Film {
  id: string;
  title: string;
  release_year: string;
  director: string;
}

const listFilms = gql`
query ListFilms {
  films {
    id
    title
    release_year
    director
    image
  }
}
`
export default async function Home() {
const client = getClient();

const { data } = await client.query({
  query: listFilms,
  },
);



console.log(data.films[0].image)
  return (
    <div>

      <h1>Star Wars Films</h1>
      <ul>
        {data.films.map((film: any) => (
          <li key={film.id}>
            <h2>{film.title}</h2>
            <p>Director: {film.director}</p>
            <p>Release Year: {film.release_year}</p>
            <Image src={film.image} alt='poster' width={631} height={420} />
          </li>
        ))}
      </ul>
    </div>
  );
}

