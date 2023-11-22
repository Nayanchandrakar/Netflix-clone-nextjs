"use client";
import { FC } from "react";

import Container from "@/components/shared/contianer";
import { Button } from "@/components/ui/button";

interface AlertModalProps {}

const AlertModal: FC<AlertModalProps> = ({}) => {
  return (
    <Container className="w-full max-w-[1380px] sm:px-4 px-4 h-fit ">
      <div className="bg-zinc-800 p-2 px-2 sm:px-6 flex items-center justify-center">
        <svg
          className="w-9  h-9 mr-2"
          focusable="false"
          viewBox="225 0 552 1000"
          aria-hidden="true"
          data-uia="n-logo"
        >
          <defs>
            <radialGradient
              id="3f120aba-90a3-4f6d-a791-30f44da20438-a"
              r="75%"
              gradientTransform="matrix(.38 0 .5785 1 .02 0)"
            >
              <stop offset="60%" stop-opacity=".3"></stop>
              <stop offset="90%" stop-opacity=".05"></stop>
              <stop offset="100%" stop-opacity="0"></stop>
            </radialGradient>
          </defs>
          <path d="M225 0v1000c60-8 138-14 198-17V0H225" fill="#b1060e"></path>
          <path d="M579 0v983c71 3 131 9 198 17V0H579" fill="#b1060e"></path>
          <path
            d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225"
            fill="url(#3f120aba-90a3-4f6d-a791-30f44da20438-a)"
          ></path>
          <path
            d="M225 0l349 983c76 3 136 9 203 17L423 0H225"
            fill="#e50914"
          ></path>
        </svg>

        <div className="flex flex-row justify-between w-full h-full items-center">
          <span className="text-white font-semibold">Watch all you want.</span>
          <Button className="bg-red-600 hover:bg-red-600/80">Join Now</Button>
        </div>
      </div>
    </Container>
  );
};

export default AlertModal;
