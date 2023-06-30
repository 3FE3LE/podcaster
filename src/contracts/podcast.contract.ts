export type TGetPodcastResponse = {
  feed: Feed;
};

export type Feed = {
  entry: Entry[];
};

export type Entry = {
  "im:image": TLabel[];
  title: TLabel;
  summary: TLabel;
  id: TLabel;
  "im:artist": TLabel;
  "im:releaseDate": TLabel;
};

export type TLabel = {
  label: string;
};
