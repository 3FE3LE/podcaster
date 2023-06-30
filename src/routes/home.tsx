import React, { useEffect, useContext, useState } from "react";
import PodcastCard from "../components/PodcastCard";
import { PodcastContext } from "../context/podcastContext";
import Loader from "../components/Loader";
import utils from "../utils";
import getPodcasts from "../services/getPodcasts";

function Home() {
  const { podcasts, setPodcasts } = useContext(PodcastContext);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getPodcasts();
      console.log(data);
    };
    getData();
    // .then((response) => {
    //   setLoading(true);
    //   console.log("i'm here");
    //   setPodcasts(response);
    // })
    // .catch((error) => {
    //   setErrors(error);
    // })
    // .finally(() => setLoading(false));
  }, []);
  console.log(podcasts);
  return (
    <div>
      <div className="flex justify-end items-center ">
        {podcasts && podcasts.length === 0 ? (
          <Loader />
        ) : (
          <h3 className="bg-teal-200 border-2 border-teal-200 rounded text-white font-bold">
            {podcasts?.length}
          </h3>
        )}
        <form action="">
          <input
            className="border-2 border-teal-200 rounded ml-4"
            placeholder="filter your podcasts"
            type="text"
          />
        </form>
      </div>
      <div className="grid grid-rows-flow grid-cols-5 gap-x-8  gap-y-32 pt-24">
        {podcasts?.map((pod) => (
          <PodcastCard
            key={pod?.id?.label}
            podcast={utils.transformPodcastWithNoiseToPodcast(pod)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
