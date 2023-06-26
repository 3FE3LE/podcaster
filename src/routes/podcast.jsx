import { Link, useParams } from "react-router-dom";
import { useApiGet } from "../hooks/useGetApi";
import { useContext, useEffect, useState } from "react";
import { PodcastContext } from "../context/podcastContext";
import utils from "../utils";

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

  }, [data, loading]);

  const tiers = ["Title", "Date", "Duration"];
  return (
    <div>
      <div className="shadow shadow-slate-200 h-12 rounded-lg p-4 flex justify-start items-center">
        <h1 className="text-xl font-bold">
          Episodes: {episodes?.length}
        </h1>
      </div>
      <section className="shadow shadow-slate-200 mt-4 h-fit rounded-lg p-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              {tiers.map((t, i) => (
                <th className="text-left text-lg" key={i}>{t}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {episodes && !loading && episodes.length > 0 && episodes.map(ep => (
              <tr className="text-slate-800" onClick={() => setCurrentEpisode(ep)} key={ep.trackId}>
                <td  >
                  <Link to='episode/1'>
                    {ep.trackName}
                  </Link>
                </td>
                <td >{ep.releaseDate}</td>
                <td >{utils.millsFormatter(ep.trackTimeMillis)}</td>
              </tr>

            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Podcast;
