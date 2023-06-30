import React,{ useContext } from "react";
import { Link, useParams } from "react-router-dom"
import { PodcastContext } from "../context/podcastContext";


function Sidebar():React.JSX.Element {

  const { podcastId, episodeId } = useParams()

  const { currentPodcast } = useContext(PodcastContext);

  const { name, img, author, description } = currentPodcast;


  return (
    <div className="p-4 w-4/12 h-screen">
      <Link to={episodeId ? `podcast/${podcastId}` : '/'}>
        <div className="rounded-lg shadow shadow-slate-200 p-4">
          <img className="rounded-full  w-full mb-4" src={img[2].label} alt={img[2].label} />
          <div className="pt-4 mt-4 border-t-2 border-t-teal-200">
            <h1 className="text-xl font-bold">{name}</h1>
            <h3 className="text-sm text-slate-500 ">by {author}</h3>
          </div>
          <div className="pt-4 mt-4 border-t-cyan-800">
            <h3>Description:</h3>
            <p className="text-sm text-slate-500 ">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar