import React from "react";

import { H1 } from "@/components/ui/header";
import { YouTubeEmbed } from "@/components/youtube-embed";

const YOUTUBE_IDS = {
  anOfferForTheCheaters: "ARN5PtTKbtg",
  botCrisis1: "EPsWjdkyoPo",
  pissOffCheaters: "LVgk5t64cRs",
};

const embeds = [
  YOUTUBE_IDS.botCrisis1,
  YOUTUBE_IDS.anOfferForTheCheaters,
  YOUTUBE_IDS.pissOffCheaters,
];

export default async function Media() {
  return (
    <section className="grid content-center items-center gap-6">
      <H1>Media</H1>
      <div className="grid gap-6">
        {embeds.map((id) => (
          <div className="max-w-2xl" key={id}>
            <YouTubeEmbed videoId={id} id={id} />
          </div>
        ))}
      </div>
    </section>
  );
}
