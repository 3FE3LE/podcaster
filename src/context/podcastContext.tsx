import { createContext } from "react";
import { TPodcast } from "../types/podcast.types";
import { TEpisode } from "../contracts/episode.contract";

export type TPodcastContext = {
  podcasts: TPodcast[] | null;
  setPodcasts: (podcasts: TPodcast[]) => void;
  currentPodcast: TPodcast | null;
  setCurrentPodcast: (podcast: TPodcast) => void;
  currentEpisode: TEpisode | null;
  setCurrentEpisode: (episode: TEpisode) => void;
};
export const PodcastContext = createContext<TPodcastContext>({
  podcasts: [],
  setPodcasts: () => {},
  currentPodcast: null,
  setCurrentPodcast: () => {},
  currentEpisode: null,
  setCurrentEpisode: () => {},
});
