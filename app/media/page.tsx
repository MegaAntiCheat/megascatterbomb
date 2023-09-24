import React from "react";

import { H1 } from "@/components/ui/header";
import { YouTubeEmbed } from "@/components/youtube-embed";

const YOUTUBE_IDS = {
  botCrisis1: "EPsWjdkyoPo",
  anOfferForTheCheaters: "ARN5PtTKbtg",
  pissOffCheaters: "LVgk5t64cRs",
};

const embeds = [
  YOUTUBE_IDS.botCrisis1,
  YOUTUBE_IDS.anOfferForTheCheaters,
  YOUTUBE_IDS.pissOffCheaters,
];

export default async function Media() {
  return (
    <>
      <H1>Media</H1>
      {embeds.map((id) => (
        <YouTubeEmbed key={id} videoId={id} />
      ))}
    </>
  );
}
