import Image from "next/image";
import { ChevronRight } from "lucide-react";

import Container from "@/components/shared/contianer";
import ModInput from "@/components/shared/mod-input";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full h-full ">
      <div className="relative inset-0 w-full h-full ">
        <Image
          src="/home/hero/hero.jpg"
          width={1000}
          height={1000}
          sizes="100vw"
          priority
          className="w-full h-[33rem] md:h-[37rem] lg:h-[44rem] object-cover"
          alt="hero-image"
        />

        <div className="hero_gradient absolute inset-0" />
        <div className="bg-black/30 absolute inset-0" />

        <Container className="text-white flex-col absolute inset-0 flex justify-center items-center w-full h-full space-y-5 mt-8 sm:mt-0 ">
          <h2 className=" text-[1.8rem] sm:text-[5vw] md:text-5xl text-center font-bold leading-tight">
            Laughter. Tears. Thrills. Find it all on{""}
            <br className="md:inline-block hidden" />
            Netflix.
          </h2>
          <p className="font-medium text-base sm:text-xl md:text-2xl text-center">
            Endless entertainment starts at just ₹ 149. Cancel anytime.
          </p>

          <p className="font-normal text-base sm:text-xl md:text-xl text-center ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div className="flex gap-2 w-full sm:w-[60%]  h-fit items-center flex-col sm:flex-row">
            <ModInput className="" placeholder="Email address" />
            <Button className="bg-red-600 hover:bg-red-600/80 p-6 mt-2 sm:mt-0 sm:p-7 font-medium text-xl ">
              Get Started
              <ChevronRight className="w-7 h-7 ml-2" />
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
