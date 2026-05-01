import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import CardContext from "./CardContext";
import { Link } from "react-router-dom";

const Artists = () => {
  const context = useContext(CardContext);
  if (!context) {
    return <div>Loading...</div>;
  }
  const { artists } = context;
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const filteredArtists = searchQuery
    ? artists.filter((artist: any) =>
        artist.artist.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : artists;

  return (
    <div className=" text-white">
      <h2 className="text-3xl font-bold mb-6 p-4">Artists</h2>
      {searchQuery && (
        <h3 className="text-xl font-bold text-center my-4 text-green-400">
          Search results for "{searchQuery}" ({filteredArtists.length} artists)
        </h3>
      )}

      <div className="flex flex-wrap gap-6 p-4  min-h-screen">
        {filteredArtists.map((artist, index) => (
          <Link to={`${artist.id}`} key={index}>
            <div className="bg-white/10 backdrop-blur-md w-[14em] h-[18em] rounded-xl overflow-hidden shadow-lg hover:shadow-green-400/50 hover:scale-105 transition-all duration-300 text-center p-4 border border-white/20">
              <div >
                <img
                  src={`/${artist.artistPic}`}
                  alt={artist.artist}
                  className="w-full h-full min-w-28 min-h-48 max-h-48 mx-auto rounded-2xl object-cover mb-3 border-4 border-white/30"
                />
              </div>
              
              <h3 className="text-lg font-semibold group-hover:text-green-400 truncate">
                {artist.artist}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Artists;
