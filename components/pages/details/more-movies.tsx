"use client";
import Container from "@/components/shared/contianer";
import { getImageUrl } from "@/lib/image-url";
import { cn } from "@/lib/utils";
import { Movie } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import ImageNotFound from "@/public/image/not.jpg";

interface MoreMoviesProps {
  moreMovies: Movie[];
  searchParams: { [key: string]: string | undefined };
}

const MoreMovies: FC<MoreMoviesProps> = ({ moreMovies, searchParams }) => {
  const [ImageLoading, setImageLoading] = useState(true);
  const selectedCategory = searchParams?.category || "movie";
  const selectedId = searchParams?.id?.toString() || "45116";

  return (
    <Container className="w-full text-white max-w-[1380px] mt-24 sm:px-4 px-4 h-fit">
      <span className="font-semibold text-3xl">More Like This</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full h-fit gap-4 mt-8">
        {moreMovies?.map((movie) => (
          <Link
            href={`/details?${new URLSearchParams({
              category: selectedCategory,
              id: selectedId,
            })}`}
            key={movie?.id}
            className={cn(
              "rounded-lg overflow-hidden transition-all duration-300 h-[13rem]",
              ImageLoading ? "blur-sm" : null
            )}
          >
            <Image
              src={getImageUrl(movie?.poster_path) || ImageNotFound}
              alt="similar-movies"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
              loading="lazy"
              sizes="100vw"
              onLoad={() => setImageLoading(false)}
            />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default MoreMovies;
