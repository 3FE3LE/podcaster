import { Outlet, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Root() {
  const { podcastId } = useParams();
  return (
    <div>
      <Navbar />
      <main className="flex w-full h-screen p-0 m-0">
        {podcastId && <Sidebar />}
          
        <div className="w-full p-4" id="detail">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Root;
