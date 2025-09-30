import { useEffect } from "react";

const usePreloadVideos = (videoList) => {
  useEffect(() => {
    videoList.forEach((src) => {
      const video = document.createElement("video");
      video.src = src;
      video.preload = "metadata"; // gets Data from cache
    });
  }, [videoList]);
};

export default usePreloadVideos;
