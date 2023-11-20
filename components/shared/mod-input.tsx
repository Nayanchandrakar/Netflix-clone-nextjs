"use client";
import { FC } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ModInputProps extends React.HTMLAttributes<HTMLInputElement> {
  className: string;
}

const ModInput: FC<ModInputProps> = ({ className, ...props }) => {
  return (
    <div className={cn("relative inset-0 w-full h-fit", className)}>
      <Input
        {...props}
        className="peer w-full outline-none ring-0 bg-black/60 border-zinc-500 py-7 placeholder:text-base placeholder:text-gray-300  placeholder:text-bold 
          placeholder:absolute placeholder:inset-0 placeholder:top-[1rem]
          placeholder:left-3 placeholder:origin-[0] placeholder:placeholder-shown:scale-100 placeholder:focus:scale-75 placeholder:transition placeholder:duration-200
          placeholder:focus:-translate-y-[1.1rem]
        "
      />
    </div>
  );
};

export default ModInput;
