import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import CardContext from "./CardContext";

const SongDetail = () => {
  const { id } = useParams();
  const { songs } = useContext(CardContext);

  const song = songs.find((s) => s.id === id);

  if (!song) {
    return <div className="p-4 text-red-500">Song not found.</div>;
  }

  // Helper to split artist string and create links
  const renderArtists = (artistString: string) => {
    const artists = artistString.split(/,|&|\/|feat\.|\+| and /i).map(a => a.trim()).filter(a => a);
    return artists.map((artist, index) => (
      <span key={artist}>
        {index > 0 && ", "}
        <Link 
          to={`/artists/${encodeURIComponent(artist.toLowerCase())}`}
          className="text-green-400 hover:text-green-300 underline"
        >
          {artist}
        </Link>
      </span>
    ));
  };

  return (
    <div className="p-6 text-white">
        <div className="flex my-4">
            <img src={`/${song.poster}`} alt="poster" className="w-64 rounded-xl shadow-lg" />
            <div className="mx-12 my-2">
                <h2 className="text-3xl font-bold mb-4 text-green-400">{song.title}</h2>
        
                <p className="mt-4 text-xl"><strong className="mr-4">Artist :</strong> {renderArtists(song.artist)}</p>
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
