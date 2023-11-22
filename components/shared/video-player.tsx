"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Loader } from "lucide-react";

import { usePlayer } from "@/hooks/usePlayer";
import { cn } from "@/lib/utils";

const VideoPlayer = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  const player = usePlayer();
  const ReactVideoPlayer = dynamic(() => import("react-player/youtube"), {
    loading: () => <Loader className="animate-spin w-12 h-12 text-white" />,
  });

  if (!mount) {
    return "";
  }

  return (
    <div
      key={346234562}
      className={cn(
        "fixed inset-0  top-0 z-[100]  items-center justify-center backdrop-blur-sm flex-col text-white",
        player?.IsOpen ? "flex " : "hidden"
      )}
    >
      <div
        onClick={player?.onClose}
        className={cn(
          "w-full bg-black/10 transition-colors duration-300 h-full fixed z-[-1] inset-0 ",
          player?.IsOpen ? "bg-black/60" : null
        )}
      />

      <div className="w-[70%] h-[70%] flex items-center justify-center flex-col">
        <span
          onClick={player?.onClose}
          className="w-full h-fit text-xl font-semibold mb-4 text-right cursor-pointer
      "
        >
          close
        </span>
        <ReactVideoPlayer
          url={`https://www.youtube.com/watch?v=${player?.getVideoId}`}
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
