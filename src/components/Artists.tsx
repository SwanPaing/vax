import { useContext } from "react";
import CardContext from "./CardContext";
import { Link } from "react-router-dom";

const Artists = () => {
  const { songs } = useContext(CardContext);

  const artistMap = new Map();

  songs.forEach((song) => {
    // Split by comma AND other separators
    const rawArtists = song.artist?.split(/,|&|\/|feat\.|\+| and /i) || [];

    rawArtists.forEach((artistRaw) => {
      const artist = artistRaw.trim();
      if (artist && !artistMap.has(artist)) {
        artistMap.set(artist, {
          artist,
          artistPic: song.artistPic || song.poster,
          id: encodeURIComponent(artist.toLowerCase()),
        });
      }
    });
  });

  const artists = Array.from(artistMap.values());

  return (
    <div className=" text-white">
      <h2 className="text-3xl font-bold mb-6 p-4">Artists</h2>

      <div className="flex flex-wrap gap-6 p-4  min-h-screen">
        {artists.map((artist, index) => (
          <Link to={`${artist.id}`} key={index}>
            <div className="bg-zinc-800 w-[14em] h-[18em] rounded-xl overflow-hidden shadow-md hover:shadow-green-400 hover:scale-105 transition-all duration-300 text-center p-4">
              <div >
                <img
                  src={`/${artist.artistPic}`}
                  alt={artist.artist}
                  className="w-full h-full min-w-28 min-h-48 max-h-48 mx-auto rounded-2xl object-cover mb-3 border-4 border-zinc-700"
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
