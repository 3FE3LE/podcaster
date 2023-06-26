import { Link, useParams } from "react-router-dom"
import { useApiGet } from "../hooks/useGetApi";
import { useEffect, useState } from "react";


function Sidebar() {

  const {podcastId, episodeId} =useParams()
  // call to the hook
  const { data, loading } = useApiGet(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );

  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    if (!loading && data) setPodcasts(data?.feed?.entry);
  }, [data, loading, podcasts]);

  

  return (
    <div className="p-4 w-4/12 h-screen">
      <Link to={episodeId?`podcast/${podcastId}`: '/'}>
      <div className="rounded-lg shadow-sm shadow-slate-200 h-1/2 p-4">
        <img className="mb-4" src={data?.artworkUrl160} alt={data?.artworkUrl160} />
        <div className="pt-4 mt-4 border-t-cyan-800">
          {}
        </div>
        <div className="pt-4 mt-4 border-t-cyan-800">
          <h3>Description:</h3>
          <p>
            {data?.description}
          </p>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Sidebar