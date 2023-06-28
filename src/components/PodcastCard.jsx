import { Link } from "react-router-dom";
import utils from "../utils";
import { PodcastContext } from "../context/podcastContext";
import { useContext } from "react";

function PodcastCard({podcast}) {

  const {setCurrentPodcast} = useContext(PodcastContext)
  
  const {id, img, name, author} = podcast
  

  return (
    <Link onClick={()=> setCurrentPodcast(podcast)} to={`podcast/${id}`}>
      <div className="rounded-lg shadow-slate-200 shadow h-32 flex flex-col items-center ">
        <img
          className="rounded-full w-32 h-32 -mt-16"
          src={img[2].label}
          alt={img[2].label}
        />
        <h1 className="text-xl font-bold"> {utils.trimText(name)}</h1>
        <h3 className="text-sm text-slate-500 ">Author: {author}</h3>
      </div>
    </Link>
  );
}

export default PodcastCard;
