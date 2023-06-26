import { useEffect, useState } from "react";
import PodcastCard from "../components/PodcastCard";
import { useApiGet } from "../hooks/useGetApi";

function Home() {
  // call to the hook
  const { data, loading } = useApiGet(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );

  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    if (!loading && data) setPodcasts(data?.feed?.entry);
  }, [data, loading, podcasts]);

  return (
    <div>
      <div className="flex justify-end items-center">
        <h3>{podcasts.length}</h3>
        <form action="">
          <input placeholder="filter your podcasts" type="text" />
        </form>
      </div>
      <div className="grid grid-rows-flow grid-cols-5 gap-x-8  gap-y-32 pt-24">
        {podcasts &&
          podcasts.map((pod, i) => <PodcastCard key={i} podcast={pod} />)}
      </div>
    </div>
  );
}

export default Home;
