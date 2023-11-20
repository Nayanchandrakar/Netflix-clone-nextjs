import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/">
      <Image
        src="/logo/logo.svg"
        alt="logo-image"
        width={140}
        height={140}
        sizes="100vw"
        priority
        className={cn("filter_red w-20  md:w-36", className)}
      />
    </Link>
  );
};

export default Logo;
