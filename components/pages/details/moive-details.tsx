import Container from "@/components/shared/contianer";
import { Movie, Person } from "@/types/types";
import { FC } from "react";

interface MovieDetailsProps {
  movieData: Movie;
  creditsData: {
    cast: Person[];
  };
}

const MovieDetails: FC<MovieDetailsProps> = ({ movieData, creditsData }) => {
  return (
    <Container className="w-full text-white max-w-[1380px] mt-24 sm:px-4 px-4 h-fit ">
      <span className="font-semibold text-3xl">More Details</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 tv:grid-cols-4 bigTv:grid-cols-5 gap-3">
        {/* watch offline  */}
        <div className="flex font-medium text-base flex-col mt-4 items-start">
          <span className="text-zinc-400">watch offline</span>
          <p className="">Download and watch</p>
          <p className="">Every where you go.</p>
        </div>

        {/* Genres */}
        <div className="flex font-medium text-base flex-col mt-4 items-start">
          <span className="text-zinc-400">Genres</span>
          <p className="flex fle-row gap-1">
            {movieData?.genres?.map((value) => (
              <text>{value?.name},</text>
            ))}
          </p>
          <p className="">{movieData?.production_companies?.[0]?.iso_3166_1}</p>
        </div>

        {/* movie data */}
        <div className="flex font-medium text-base flex-col mt-4 items-start">
          <span className="text-zinc-400">This movie is...</span>
          <p className="flex fle-row gap-1">
            {/* @ts-ignore */}
            {movieData?.genres?.[0]?.name}
          </p>
        </div>

        {/* audio data */}
        <div className="flex font-medium text-base flex-col mt-4 items-start h-fit">
          <span className="text-zinc-400">Audio</span>
          <p className="grid grid-cols-3 gap-1">
            {movieData?.spoken_languages?.map((language) => (
              <text>{language?.name},</text>
            ))}
          </p>
        </div>

        {/* watch offline  */}
        <div className="flex font-medium text-base flex-col mt-4 items-start">
          <span className="text-zinc-400">Subtitles</span>
          <p className="">English,Hindi</p>
        </div>
      </div>

      {/* casts div  */}

      <div className="mt-4">
        <span className="text-zinc-400">Cast</span>
        <div className="grid grid-cols-2 sm:grid-cols-5">
          {creditsData?.cast?.map((cast) => (
            <text>{cast?.name}</text>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MovieDetails;
