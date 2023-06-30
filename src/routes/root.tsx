import React, { useMemo, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { PodcastContext } from "../context/podcastContext";
import { TPodcast } from "../types/podcast.types";
import { TEpisode } from "../contracts/episode.contract";

function Root() {
  const { podcastId } = useParams();

  const [podcasts, setPodcasts] = useState<TPodcast[] | null>(null);
  const [currentPodcast, setCurrentPodcast] = useState<TPodcast | null>(null);
  const [currentEpisode, setCurrentEpisode] = useState<TEpisode | null>(null);

  const context = useMemo(
    () => ({
      podcasts,
      setPodcasts,
      currentPodcast,
      setCurrentPodcast,
      currentEpisode,
      setCurrentEpisode,
    }),
    [podcasts, currentPodcast, currentEpisode]
  );
  return (
    <PodcastContext.Provider value={context}>
      <Navbar />
      <main className="flex w-full h-screen p-0 m-0">
        {podcastId && <Sidebar />}

        <div className="w-full p-4" id="detail">
          <Outlet />
        </div>
      </main>
    </PodcastContext.Provider>
  );
}

export default Root;
