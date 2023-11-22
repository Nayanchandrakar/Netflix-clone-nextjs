"use client";
import { FC, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { Movie } from "@/types/types";
import { getImageUrl } from "@/lib/image-url";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  movies: Movie[];
  className?: string;
  redirectCategory?: "movie" | "tv";
}

const MovieRenderer: FC<Props> = ({
  movies,
  label,
  className,
  redirectCategory = "movie",
}) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const [isMoved, setIsMoved] = useState(false);
  const [IsImageLoading, setImageLoading] = useState(true);

  const handleClick = (direction: string) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div
      className={cn("h-fit space-y-0.5 md:space-y-2 px-4 sm:px-8", className)}
    >
      <h2 className="w-fit cursor-pointer text-lg mb-3 font-semibold text-white  md:text-xl">
        {label}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={cn(
            "absolute top-0 bottom-0 left-2 z-30 m-auto h-7 w-7 cursor-pointer bg-white rounded-full transition-colors duration-200 group-hover:bg-white/50 tex-zinc-800",
            !isMoved ? "hidden" : null
          )}
          onClick={() => handleClick("left")}
        />

        <div
          ref={rowRef}
          className="flex items-center h-full space-x-0.5 overflow-x-scroll scrollbar_hidden md:space-x-2.5 md:p-2"
        >
          {movies?.map((movie, index) => (
            <Link
              href={`/details?${new URLSearchParams({
                category: redirectCategory,
                id: movie?.id.toString(),
              })}`}
              key={index}
              className="relative h-full min-w-[180px] cursor-pointer transition duration-200 ease-out md:min-w-[300px] md:hover:scale-105 flex flex-col justify-start gap-2"
            >
              <Image
                key={index}
                alt="image-not-available"
                src={getImageUrl(movie?.poster_path)}
                width={1000}
                height={1000}
                loading="lazy"
                onLoad={() => setImageLoading(false)}
                className={cn(
                  "rounded-sm w-full h-[11rem] object-cover transition-all duration-200 md:rounded ",
                  IsImageLoading ? "blur-sm " : null
                )}
              />
              <span className="text-zinc-100 font-medium  text-sm  sm:text-lg">
                {movie?.title?.substring(0, 10)}
              </span>
            </Link>
          ))}
        </div>

        <ChevronRightIcon
          className="absolute top-0 bottom-0 right-2  m-auto h-7 w-7 cursor-pointer bg-white rounded-full transition-colors duration-200 group-hover:bg-white/50 tex-zinc-800"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default MovieRenderer;
