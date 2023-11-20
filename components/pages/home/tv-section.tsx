import Image from "next/image";

import ContentSection from "@/components/shared/content-section";

const TvSection = () => {
  return (
    <ContentSection
      heading="Enjoy on your TV"
      description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
    >
      <video
        className="absolute inset-0 w-full h-full max-w-[80%] max-h-[60%] top-[21%] left-[13%] z-[-1]"
        src="/home/tv-video.m4v"
        playsInline
        muted
        loop
        autoPlay
      />
      <Image alt="content-image" src="/home/tv.png" width={550} height={550} />
    </ContentSection>
  );
};

export default TvSection;
