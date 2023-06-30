import axios from "axios";
import { TPodcast } from "../types/podcast.types";
import { TGetPodcastResponse } from "../contracts/podcast.contract";
import { normalizePodcast } from "../mappers/podcast.mapper";

async function getPodcasts(): Promise<TPodcast[]> {
  const url =
    process.env.API_URL + "us/rss/toppodcasts/limit=100/genre=1310/json";

  console.log(url)

  const response = await axios.get<TGetPodcastResponse>(url);
  const data = response.data;
  return normalizePodcast(data);
}

export default getPodcasts;
