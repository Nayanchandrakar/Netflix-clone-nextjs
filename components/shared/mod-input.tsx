"use client";
import { FC } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface ModInputProps {
  className: string;
  label: string;
}

const ModInput: FC<ModInputProps> = ({ className, label, ...props }) => {
  return (
    <div className={cn("relative inset-0 w-full h-fit", className)}>
      <Input
        {...props}
        className="peer w-full outline-none ring-0 bg-black/60 border-zinc-500 py-7"
      />
      <Label className="absolute w-fit h-fit transition duration-300 inset-0 transform -translate-y-3 top-[1.8rem] origin-[0] peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-[1.8rem] text-gray-400 left-4 text-base">
        {label}
      </Label>
    </div>
  );
};

export default ModInput;
