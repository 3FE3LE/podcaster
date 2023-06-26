import { Link, useParams } from "react-router-dom";
import { useApiGet } from "../hooks/useGetApi";
import { useEffect, useState } from "react";

function Podcast() {
  
  const { podcastId } = useParams();
  const { data, loading } = useApiGet(
    `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
  );

  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    if (!loading && data) setEpisodes(data?.feed?.entry);
  }, [data, loading, episodes]);

  const tiers = ["Title", "Date", "Duration"];
  return (
    <div>
      <div className="shadow-sm shadow-slate-200 h-12 rounded-lg p-4 flex justify-start items-center">
        Episodes: {}
      </div>
      <section className="shadow-sm shadow-slate-200 mt-4 h-fit rounded-lg p-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              {tiers.map((t, i) => (
                <th key={i}>{t}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to='episode/1'>The Sliding Mr. Bones (Next Stop, Pottersville)</Link></td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Podcast;
