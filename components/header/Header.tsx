"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";

import Container from "@/components/shared/contianer";
import Logo from "@/components/header/logo";
import Navigation from "@/components/header/Navigation";
import { cn } from "@/lib/utils";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "bg-white w-full",
        pathname === "/sign-in"
          ? "hidden"
          : "inline-block absolute inset-0 z-40",
        pathname === "/movies" ? "h-[50px] sticky inset-0 top-0" : "h-[78px]"
      )}
    >
      <Container
        className={cn(
          " w-full h-full flex justify-between items-center flex-row",
          pathname === "/movies" ? "max-w-none  sm:px-8" : null
        )}
      >
        <Logo />
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
