import { useContext } from "react";
import { Link } from "react-router-dom";
import CardContext from "./CardContext";


const Home = () => {

  const context = useContext(CardContext);
  if (!context) {
    return <div>Loading...</div>;
  }
  const { songs, albums, artists } = context;

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8 animate-[fadeIn_1s_ease-out]">Welcome to <span className="text-green-400">VAX Music</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <Link to="/songs" className="block">
          <div className="w-full h-48 bg-white/10 backdrop-blur-md rounded-br-2xl rounded-tl-2xl overflow-hidden hover:border-green-400 hover:border-2 shadow-lg hover:shadow-green-400/50 transition-all duration-300 hover:scale-105 flex flex-col justify-center items-center text-center p-4 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-2">Songs</h2>
            <p className="text-green-400 text-lg">{songs.length} songs</p>
          </div>
        </Link>
        <Link to="/albums" className="block">
          <div className="w-full h-48 bg-white/10 backdrop-blur-md rounded-br-2xl rounded-tl-2xl overflow-hidden hover:border-green-400 hover:border-2 shadow-lg hover:shadow-green-400/50 transition-all duration-300 hover:scale-105 flex flex-col justify-center items-center text-center p-4 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-2">Albums</h2>
            <p className="text-green-400 text-lg">{albums.length} albums</p>
          </div>
        </Link>
        <Link to="/artists" className="block">
          <div className="w-full h-48 bg-white/10 backdrop-blur-md rounded-br-2xl rounded-tl-2xl overflow-hidden hover:border-green-400 hover:border-2 shadow-lg hover:shadow-green-400/50 transition-all duration-300 hover:scale-105 flex flex-col justify-center items-center text-center p-4 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-2">Artists</h2>
            <p className="text-green-400 text-lg">{artists.length} artists</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home;