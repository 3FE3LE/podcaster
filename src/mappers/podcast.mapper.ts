import { TGetPodcastResponse } from "../contracts/podcast.contract";
import { TPodcast } from "../types/podcast.types";

export const normalizePodcast  = (data: TGetPodcastResponse) : TPodcast[] =>{
  return data.feed.entry.map((item) => {
    return {
      author: item["im:artist"].label,
      description: item.summary.label,
      id: item.id.label,
      img: item["im:image"],
      name: item.title.label,
    }
  })
}