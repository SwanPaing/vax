import { useParams } from "react-router-dom";
import { useContext } from "react";
import CardContext from "./CardContext";

const SongDetail = () => {
  const { id } = useParams();
  const { songs } = useContext(CardContext);

  const song = songs.find((s) => s.id === id);

  if (!song) {
    return <div className="p-4 text-red-500">Song not found.</div>;
  }

  return (
    <div className="p-6 text-white">
        <div className="flex my-4">
            <img src={`/${song.poster}`} alt="poster" className="w-64 rounded-xl shadow-lg" />
            <div className="mx-12 my-2">
                <h2 className="text-3xl font-bold mb-4 text-green-400">{song.title}</h2>
        
                <p className="mt-4 text-xl"><strong className="mr-4">Artist :</strong> {song.artist}</p>
                <p className="mt-4 text-xl"><strong className="mr-4">Album :</strong> {song.album || "N/A"}</p>
                <p className="mt-4 text-xl"><strong className="mr-4">Genre :</strong> {song.genre}</p>
                <p className="mt-4 text-xl"><strong className="mr-4">Year :</strong> {song.year}</p>
            </div>
        </div>
        
        
      <audio src={`/${song.audio}`} controls className="mt-8 w-lg" />
    </div>
  );
};

export default SongDetail;
