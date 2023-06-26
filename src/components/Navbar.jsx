import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="text-3xl font-bold text-cyan-800 h-12 border-b-2 border-teal-200 items-center justify-between flex p-4" >
      <Link to='/'>
      <h1>Podcaster</h1>
      </Link>
      </div>
  )
}

export default Navbar