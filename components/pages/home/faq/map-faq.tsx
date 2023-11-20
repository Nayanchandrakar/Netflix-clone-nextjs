"use client";
import { FC } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface mapFaqInterface {
  question: string;
  answer: string;
  IsOpen: number;
  handleToogle: (id: number) => void;
  id: number;
}

const MapFaqData: FC<mapFaqInterface> = ({
  answer,
  question,
  IsOpen,
  handleToogle,
  id,
}) => {
  return (
    <>
      <div
        onClick={() => handleToogle(id)}
        className="w-full h-fit p-6 bg-zinc-800 hover:bg-zinc-900 transition-colors duration-200 cursor-pointer "
      >
        <div className="flex flex-row justify-between items-center w-full h-fit">
          {question}
          <Plus
            className={cn(
              "w-8 h-8 text-white transition-all duration-200 ",
              IsOpen === id ? "rotate-45" : null
            )}
          />
        </div>
      </div>

      <div
        className={cn(
          "w-full p-0 bg-zinc-800 overflow-hidden collapsible_transition relative px-6",
          IsOpen === id ? "visible py-6 max-h-[25rem] " : "collapse max-h-0"
        )}
      >
        <p
          className={cn(
            "collapsible_transition overflow-hidden text-left",
            IsOpen === id
              ? "visible  max-h-[25rem] overflow-hidden"
              : "collapse max-h-0"
          )}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </>
  );
};

export default MapFaqData;
