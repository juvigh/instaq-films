"use client"

import Image from "next/image";
import { useRequest } from '@/hooks/use-request';
import { gql } from 'graphql-request';
import { useEffect, useState } from "react";

interface Film {
  id: string;
  title: string;
  release_year: string;
  director: string;
}

export default function Home() {
  const document = gql`
  query GetFilms {
    films {
      id
      title
      release_year
      director
    }
}
`

const { data } = useRequest<Film[]>(document)



  return (
    <div>
      <h1>Star Wars Films</h1>
      <ul>
        {data?.map((film: any) => (
          <li key={film.id}>
            <h2>{film.title}</h2>
            <p>Director: {film.director}</p>
            <p>Release Year: {film.release_year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
