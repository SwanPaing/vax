import { useParams } from "react-router-dom";
import { useContext } from "react";
import CardContext from "./CardContext";
import Card from "./Card";
import Acards from "./Acards";

const ArtistDetail = () => {
  const { artistId } = useParams();

  const { songs } = useContext(CardContext);

  // Decode the URL and normalize
  const artistName = decodeURIComponent(artistId).toLowerCase();

  // Helper to split and normalize artist strings
  const extractArtists = (artistString = "") => {
    return artistString
      .split(/,|&|\/|feat\.|\+| and /i)
      .map((a) => a.trim().toLowerCase());
  };

  // Filter songs that include this artist
  const filterSongs = songs.filter((song) =>
    extractArtists(song.artist).includes(artistName)
  );

  // Filter albums that contain songs with this artist
  const albumMap = new Map();
  filterSongs.forEach((song) => {
    if (song.album) {
      const key = song.album.trim();
      if (!albumMap.has(key)) {
        albumMap.set(key, {
          album: key,
          albumPoster: song.albumPoster || song.poster,
          id: encodeURIComponent(key.toLowerCase()),
        });
      }
    }
  });
  const filterAlbums = Array.from(albumMap.values());

  const song = filterSongs[0];

  if (!song) {
    return <div className="p-4 text-red-500">Artist not found.</div>;
  }

  return (
    <div className="p-6 text-white">
      <div className="flex my-4 flex-wrap justify-center md:justify-start">
        <img
          src={`/${song.artistPic || song.poster}`}
          alt="poster"
          className="w-64 h-64 rounded-xl shadow-lg"
        />
        <div className="mx-12 my-2">
          <h2 className="text-3xl font-bold mb-4 text-green-400">
            {artistName
              .split(" ")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ")}
          </h2>
        </div>
      </div>

      <div className=" m-0 p-0 rounded-xl">
        <h1 className="text-2xl font-semibold mb-4 ml-2 mt-2">Albums</h1>
        <Acards items={filterAlbums} />
      </div>

      <div className="mt-6">
        <h1 className="text-2xl font-semibold mb-4">Songs</h1>
        <Card items={filterSongs} />
      </div>
    </div>
  );
};

export default ArtistDetail;
