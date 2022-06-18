import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div><nav className="flex flex-row items-center justify-between p-2">
        <h1 className="text-2xl font-bold px-2">Tech Blogs</h1>
        <ul className="flex flex-row">
        <Link to="/"><li className="px-2">Home</li></Link>
        <Link to="/about"><li className="px-2">About</li></Link>
        <Link to="/blogs"><li className="px-2">Blogs</li></Link>
        </ul>
        </nav></div>
  )
}

export default Navbar