"use client";
import { FC, useCallback, useState } from "react";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

import Container from "@/components/shared/contianer";
import { cn } from "@/lib/utils";
import { VideoInfo } from "@/types/types";
import ImageNotFound from "@/public/image/not.jpg";
import { usePlayer } from "@/hooks/usePlayer";

interface VideoSectionProps {
  videoData: VideoInfo[];
}

const VideoSection: FC<VideoSectionProps> = ({ videoData }) => {
  const [ImageLoading, setImageLoading] = useState(true);
  const player = usePlayer();

  const handleToogle = useCallback(
    (id: string | number) => {
      if (id) {
        player?.onOpen();
        player?.setVideoId(id);
      }
      return "";
    },
    [player]
  );

  return (
    <Container className="w-full text-white max-w-[1380px] mt-24 sm:px-4 px-4 h-fit">
      <span className="font-semibold text-3xl">Official Videos</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full h-fit gap-4 mt-8">
        {videoData?.map((video) => (
          <div
            key={video?.id}
            onClick={() => handleToogle(video?.key)}
            className={cn(
              "rounded-lg overflow-hidden relative inset-0 transition-all duration-300 h-[13rem] flex justify-center items-center cursor-pointer group",
              ImageLoading ? "blur-sm" : null
            )}
          >
            <Image
              src={
                `https://img.youtube.com/vi/${video?.key}/mqdefault.jpg` ||
                ImageNotFound
              }
              alt="similar-movies"
              className="w-full h-full object-cover absolute inset-0"
              width={1000}
              height={1000}
              loading="lazy"
              sizes="100vw"
              onLoad={() => setImageLoading(false)}
            />
            <div className="bg-black/10 transition-colors duration-300 group-hover:bg-black/40 absolute inset-0" />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="text-white w-14 transition-colors duration-300 group-hover:text-red-600 h-14 " />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default VideoSection;
