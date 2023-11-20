import { FC } from "react";

import Container from "@/components/shared/contianer";
import Heading from "@/components/shared/heading";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
  reverse?: boolean;
  heading: string;
  className?: string;
  description: string;
  headingClassName?: string;
  children: React.ReactNode;
}

const ContentSection: FC<ContentSectionProps> = ({
  reverse,
  children,
  heading,
  description,
  headingClassName,
  className,
}) => {
  return (
    <section className="w-full h-fit py-[6rem]  ">
      <Container className="grid grid-cols-1 lg:grid-cols-2 items-center jusify-center lg:justify-start h-full ">
        <Heading
          heading={heading}
          description={description}
          className={headingClassName}
        />

        <div
          className={cn(
            "w-full relative inset-0 h-full flex justify-center items-center",
            reverse ? "lg:order-[-1] " : null,
            className
          )}
        >
          {children}
        </div>
      </Container>
    </section>
  );
};

export default ContentSection;
