import { cn } from "@/lib/utils";
import { FC } from "react";

interface HeadingProps {
  heading: string;
  description: string;
  className?: string;
}

const Heading: FC<HeadingProps> = ({ description, heading, className }) => {
  return (
    <div className={cn("text-white space-y-6 ", className)}>
      <h2 className=" text-3xl sm:text-5xl font-extrabold lg:text-start text-center">
        {heading}
      </h2>
      <p className="text-xl font-medium lg:text-start text-center">
        {description}
      </p>
    </div>
  );
};

export default Heading;
