"use client";
import Link from "next/link";
import Image from "next/image";
import { Info, Play } from "lucide-react";
import { FC, useCallback, useState } from "react";

import { Movie } from "@/types/types";
import { getImageUrl } from "@/lib/image-url";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePlayer } from "@/hooks/usePlayer";

interface bannerProps {
  bannerData: Movie;
}

const Banner: FC<bannerProps> = ({ bannerData }) => {
  const [IsImageLoading, setImageLoading] = useState(true);
  const bannerImage = getImageUrl(bannerData?.backdrop_path);
  const player = usePlayer();

  const handleToogle = useCallback(
    (id: string | number) => {
      if (id) {
        player?.onOpen();
        player?.setVideoId(id);
      }
      return "";
    },
    [player?.getVideoId]
  );

  return (
    <section className="">
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

        <div className={"absolute w-full h-full inset-0 movies_gradient"} />

        <div className="w-full h-full flex flex-col justify-center  items-start absolute inset-0 px-4 sm:px-8 space-y-4">
          <h4 className="text-white text-5xl sm:text-7xl font-semibold">
            {bannerData?.title}
          </h4>

          <p className="text-white lg:max-w-[42rem] text-lg sm:text-xl font-medium ">
            {bannerData?.overview}
          </p>

          <div className="flex gap-2 sm:gap-4  items-center justify-center">
            <Button
              onClick={() => handleToogle(344)}
              className="bg-white hover:bg-white/80 h-[3rem] text-lg font-semibold text-black "
              size="lg"
            >
              <Play className="w-6 h-6 mr-1 text-black fill-black" />
              Play
            </Button>

            <Button
              asChild
              className={cn(
                "bg-gray-500 hover:bg-gray-500/80 h-[3rem] text-lg font-semibold text-white border-[2px] border-zinc-100"
              )}
              size="lg"
            >
              <Link
                href={`/details?${new URLSearchParams({
                  category: "movie",
                  id: bannerData?.id?.toString(),
                })}`}
              >
                <Info className="w-6 h-6 mr-1 text-white " />
                More Info
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
