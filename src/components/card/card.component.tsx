import Image from "next/image";
import * as React from "react";

type CardProps = {
  id: string;
  title: string;
  image: string;
  releaseYear: string;
  director: string;
};

export const Card = (props: CardProps) => {
  const { id, title, image, releaseYear, director } = props;
  return (
    <div
      id={`card-${id}`}
      className="bg-gray-500 rounded-lg shadow-md p-4 m-2 flex flex-col items-center card"
    >
      <Image
        width={200}
        height={200}
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-white text-lg font-semibold mt-4">{title}</h3>
      <p className="text-white mt-2">Ano: {releaseYear}</p>
      <p className="text-white">Diretor: {director}</p>
    </div>
  );
};
