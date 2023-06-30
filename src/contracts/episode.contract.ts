export type TGetEpisodesResponse = {
  contents: string;
};
export type TEpisode = {
  episodeUrl: string;
  trackTimeMillis: number;
  description: string;
  trackId: number;
  trackName: string;
  releaseDate: Date;
};
