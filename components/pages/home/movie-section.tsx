import { FC } from "react";
import Image from "next/image";

import ContentSection from "@/components/shared/content-section";

interface MovieSectionProps {}

const MovieSection: FC<MovieSectionProps> = ({}) => {
  return (
    <ContentSection
      heading="Watch everywhere"
      description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
      className=""
    >
      <video
        className="absolute inset-0 w-full h-full max-w-[63%] max-h-[47%] top-[11%] left-[18%]  z-[-1] "
        src="/home/device-apple-mac-video.m4v"
        playsInline
        muted
        loop
        autoPlay
      />
      <Image
        alt="content-image"
        src="/home/device-apple-mac.png"
        width={550}
        height={550}
      />
    </ContentSection>
  );
};

export default MovieSection;
