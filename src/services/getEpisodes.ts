import axios from "axios";
import { TEpisode, TGetEpisodesResponse } from "../contracts/episode.contract";
import { normalizeEpisodes } from "../mappers/episode.mappers";

async function getEpisodes(id: string): Promise<TEpisode[]> {
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
    process.env.API_URL +
      "/lookup?id=" +
      id +
      "&media=podcast&entity=podcastEpisode&limit=20"
  )}`;

  const response = await axios.get<TGetEpisodesResponse>(url);
  const data = response.data;
  return normalizeEpisodes(data);
}

export default getEpisodes;
