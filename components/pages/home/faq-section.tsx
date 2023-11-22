"use client";
import MapFaqData from "@/components/pages/home/faq/map-faq";
import { faqData, faqDataInterface } from "@/constants/faq-data";
import Container from "@/components/shared/contianer";
import { useCallback, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ModInput from "@/components/shared/mod-input";

const FaqSection = () => {
  const [IsOpen, setIsOpen] = useState<number>(0);

  const handleToogle = useCallback((id: number) => {
    setIsOpen((prev) => (prev === id ? 0 : id));
  }, []);

  return (
    <section className="mt-12 mb-14">
      <Container className="text-white">
        <h4 className="text-[2rem] lg:text-[3rem] text-center py-3 font-extrabold">
          Frequently Asked Questions
        </h4>

        <div className="mt-4 space-y-1.5">
          {faqData?.map((questions: faqDataInterface) => (
            <MapFaqData
              IsOpen={IsOpen}
              key={questions?.id}
              handleToogle={handleToogle}
              {...questions}
            />
          ))}
        </div>

        <p className="font-normal text-base sm:text-xl md:text-xl text-center mt-16">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 items-center mt-6  justify-center px-10">
          <ModInput
            newClassName={{ parentClassName: "max-w-[26rem]" }}
            placeholder="Email address"
          />
          <Button className="bg-red-600 hover:bg-red-600/80 p-7 font-medium text-xl mt-2 sm:mt-0">
            Get Started
            <ChevronRight className="w-7 h-7 ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
