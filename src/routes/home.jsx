import { useEffect, useContext } from "react";
import PodcastCard from "../components/PodcastCard";
import { useApiGet } from "../hooks/useGetApi";
import { PodcastContext } from "../context/podcastContext";
import Loader from "../components/Loader";

function Home() {
  // call to the hook
  const { data, loading } = useApiGet(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );

  const { podcasts, setPodcasts } = useContext(PodcastContext)


  useEffect(() => {
    if (!loading && data) setPodcasts(data?.feed?.entry);
  }, [data, loading, podcasts, setPodcasts]);

  return (
    <div>
      <div className="flex justify-end items-center ">
        {!podcasts.length > 0 ? <Loader /> : <h3 className="bg-teal-200 border-2 border-teal-200 rounded text-white font-bold">{podcasts.length}</h3>}
        <form action="">
          <input className="border-2 border-teal-200 rounded ml-4" placeholder="filter your podcasts" type="text" />
        </form>
      </div>
      <div className="grid grid-rows-flow grid-cols-5 gap-x-8  gap-y-32 pt-24">
        {podcasts?.map((pod) => <PodcastCard key={pod?.id?.label} podcast={pod} />)}
      </div>
    </div>
  );
}

export default Home;
