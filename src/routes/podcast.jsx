import { Link, useParams } from "react-router-dom";
import { useApiGet } from "../hooks/useGetApi";
import { useContext, useEffect, useState } from "react";
import { PodcastContext } from "../context/podcastContext";

import utils from "../utils";
import Loader from "../components/Loader";

function Podcast() {

  const { podcastId } = useParams();
  const { data, loading } = useApiGet(
    `https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/lookup?id='
      + podcastId + '&media=podcast&entity=podcastEpisode&limit=20')}`
  );

  const [episodes, setEpisodes] = useState([]);

  const { setCurrentEpisode } = useContext(PodcastContext)



  useEffect(() => {
    if (!loading && data && episodes.length === 0) {
      const caps = JSON.parse(data?.contents)
      let eps = caps.results
      eps.shift()
      setEpisodes(eps);
    }

  }, [data, loading, episodes.length]);

  const tiers = ["Title", "Date", "Duration"];
  return (
    <div>
      <div className="shadow shadow-slate-200 h-12 rounded-lg p-4 flex justify-start items-center">
        <h1 className="text-xl font-bold">
          Episodes: {episodes?.length}
        </h1>
      </div>
      <section className="shadow flex justify-center shadow-slate-200 mt-4 h-fit rounded-lg p-4">
        {!episodes.length > 0 ? <Loader /> : <table className="table-auto w-full">
          <thead>
            <tr>
              {tiers.map((t) => (
                <th className="text-left text-lg" key={t}>{t}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {episodes && !loading && episodes.map(ep => (
              <tr className="text-slate-800" onClick={() => setCurrentEpisode(ep)} key={ep.trackId}>
                <td  >
                  <Link to='episode/1'>
                    {ep.trackName}
                  </Link>
                </td>
                <td >{utils.formatDate(ep.releaseDate)}</td>
                <td >{utils.millsFormatter(ep.trackTimeMillis)}</td>
              </tr>

            ))}
          </tbody>
        </table>}
      </section>
    </div>
  );
}

export default Podcast;
