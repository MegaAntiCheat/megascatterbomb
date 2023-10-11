"use client";

import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

export async function YouTubeEmbed(props: YouTubeProps) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
    width: "100%",
  };

  return (
    <YouTube
      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
      {...props}
      opts={opts}
      onReady={onPlayerReady}
    />
  );
}
