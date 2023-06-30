import { TEpisode, TGetEpisodesResponse } from "../contracts/episode.contract";

export const normalizeEpisodes = (data: TGetEpisodesResponse): TEpisode[] => {
  const Episodes: TEpisode[] = JSON.parse(data.contents);
  Episodes.shift();
  return Episodes;
};
