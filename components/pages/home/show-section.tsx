import ContentSection from "@/components/shared/content-section";
import { Download } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface ShowSectionProps {}

const ShowSection: FC<ShowSectionProps> = ({}) => {
  return (
    <ContentSection
      reverse
      heading="Download your shows to watch offline"
      description="Save your favourites easily and always have something to watch."
      className=""
    >
      <Image
        alt="content-image"
        src="/home/mobile.jpg"
        width={550}
        height={550}
      />

      <div className="w-full rounded-lg h-fit p-3 bg-black  border-[2px] border-zinc-500 flex flex-row gap-4 items-center absolute max-w-[16rem] sm:max-w-[18rem] bottom-6">
        <Image
          alt="content-image"
          src="/home/mobile-1.png"
          width={50}
          height={50}
        />

        <div className="flex flex-col gap-1 items-start justify-center">
          <span className="text-white font-medium text-base">
            Stranger Things
          </span>
          <p className="text-blue-700 text-sm">Downloading...</p>
        </div>
        <Download className=" text-white ml-6" />
      </div>
    </ContentSection>
  );
};

export default ShowSection;
