import { useContext } from "react"
import { PodcastContext } from "../context/podcastContext"

function Episode() {

  const {currentEpisode} = useContext(PodcastContext)
  return (
    <div>
      <div className="shadow shadow-slate-200 h-1/2 rounded-lg p-4 flex justify-start flex-col items-center">
        <div >
          <h3 className="text-xl font-bold py-4">{currentEpisode.trackName}</h3>
          <p>{currentEpisode.description}</p>
        </div>
        <div className="w-full pt-4 rounded" >
          <audio className="w-full rounded" controls autoPlay >
            <source src={currentEpisode.episodeUrl} type="audio/mpeg"/>
          </audio>
        </div>
      </div>
      
    </div>
  )
}

export default Episode