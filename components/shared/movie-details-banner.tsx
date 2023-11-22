"use client";
import { FC, useState } from "react";
import Image from "next/image";

import { getImageUrl } from "@/lib/image-url";
import { cn } from "@/lib/utils";
import { Movie } from "@/types/types";
import Container from "@/components/shared/contianer";

interface MovieDetailsbanner {
  bannerData: Movie;
}

const MovieDetailsbanner: FC<MovieDetailsbanner> = ({ bannerData }) => {
  const [IsImageLoading, setImageLoading] = useState(true);
  const bannerImage = getImageUrl(bannerData?.backdrop_path);

  const toHoursAndMinutes = (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <section>
      <div className=" relative inset-0 w-full h-full">
        <Image
          alt="banner-image"
          src={bannerImage}
          width={1000}
          height={1000}
          sizes="100vw"
          loading="lazy"
          onLoad={() => setImageLoading(false)}
          className="w-full h-[38rem] sm:h-[43rem] object-cover"
        />

        <div
          className={cn(
            "absolute inset-0 bg-black/50  transition-all duration-200",
            IsImageLoading ? "backdrop-blur-md" : null
          )}
        />

        <div
          className={"absolute w-full h-full inset-0 detail_movie_gradient"}
        />

        <Container className="absolute inset-0 flex items-start justify-center space-y-4 flex-col max-w-[1380px] sm:px-4 px-4">
          <h5 className=" text-2xl text-white md:text-5xl font-semibold">
            {bannerData?.original_title ||
              bannerData?.last_episode_to_air?.name}
          </h5>
          <div className="flex flex-row gap-3 text-zinc-400 text-lg">
            {bannerData?.release_date?.split("-")?.[0] ||
              bannerData?.first_air_date?.split("-")?.[0]}{" "}
            <span className="border-r-2 border-zinc-400" />
            {bannerData?.adult && "A+"}
            {toHoursAndMinutes(
              bannerData?.runtime! || bannerData?.episode_run_time?.[0]!
            )}
            <span className="border-r-2 border-zinc-400" />
            {/* @ts-ignore  */}
            {bannerData?.genres?.[0]?.name && bannerData?.genres[0]?.name}
          </div>

          <p className="text-white  text-base md:text-lg max-w-[32rem]">
            {bannerData?.overview}
          </p>
          <div className="flex text-zinc-400  flex-row gap-1 items-center text-base md:text-lg">
            starting: {/* @ts-ignore  */}
            {bannerData?.production_companies?.map((companies) => (
              <span key={companies?.name} className="text-white">
                {companies?.name},
              </span>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default MovieDetailsbanner;
