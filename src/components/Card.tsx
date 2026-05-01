import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ items }) => {

  const [isPlaying, setIsPlaying] = useState(null);
  
  const audioRef = useRef<Record<string, HTMLAudioElement | null>>({});

  const handlePlay = (id: string) => {
      // Pause previously playing audio
      if (isPlaying && isPlaying !== id) {
        const prevAudio = audioRef.current[isPlaying];
        if (prevAudio && !prevAudio.paused) {
          prevAudio.pause();
        }
      }
      setIsPlaying(id);
    };


  const handlePause = (id) => {
    if (isPlaying === id) {
      setIsPlaying(null);
    }
  };


  return (
    <div className="flex flex-wrap gap-2 p-4">
      {items.map((item, index) => (
        <Link to={`${item.id}`} key={item.id || index}>
          <div className={`group w-[15em] h-[18em] my-2 text-center bg-white/10 backdrop-blur-md rounded-br-2xl rounded-tl-2xl overflow-hidden hover:border-green-400 hover:border-2 shadow-lg hover:shadow-green-400/50 transition-all duration-300 hover:scale-[1.03] rotate-y-30 hover:rotate-y-0 border border-white/20 ${isPlaying === item.id ? "border-green-400 border-2 shadow-lg shadow-green-400/50 text-green-400 bg-green-400/10" : ""} `}>
            <div className="relative flex justify-center mt-4 group-hover:rotate-360 transition-all duration-1000 ease-in-out">
              <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-white/30 shadow-inner bg-white/5 backdrop-blur-sm group-hover:shadow-green-500/50">
                <img
                  src={`/${item.poster}`}
                  alt="poster"
                  className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${isPlaying === item.id ? "animate-[spin_2s_linear_infinite]" : ""}`}
                />
              </div>
              {/* Optional: add a center dot for realism */}
              <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xs border shadow-lg p-6 border-black" />
              <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white/20 border-2 border-white/30" />
            </div>
            <div className={`p-2 ${isPlaying === item.id ? "text-green-400" : ""}`}>
              <h3 className="  text-xl font-medium truncate group-hover:text-green-400">
                {item.title}
              </h3>
              <audio
                ref={audioRef}
                src={`/${item.audio}`}
                controls
                onPlay={() => handlePlay(item.id)}
                onPause={() => handlePause(item.id)}
                onEnded={() => handlePause(item.id)}
                className="mt-1 w-full"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
