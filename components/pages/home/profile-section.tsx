import Image from "next/image";

import ContentSection from "@/components/shared/content-section";

const ProfileSection = () => {
  return (
    <ContentSection
      reverse
      heading="Download your shows to watch offline"
      description="Save your favourites easily and always have something to watch."
      className=""
    >
      <Image
        alt="content-image"
        src="/home/childs-profile.png"
        width={550}
        height={550}
      />
    </ContentSection>
  );
};

export default ProfileSection;
