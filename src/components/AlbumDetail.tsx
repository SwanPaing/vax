import { useParams } from "react-router-dom";
import { useContext } from "react";
import CardContext from "./CardContext";
import Card from "./Card";

const AlbumDetail = () => {
  const { albumId } = useParams<{ albumId: string }>();

  const { songs } = useContext(CardContext);

  const albumName = decodeURIComponent(albumId).toLowerCase();

  const filterSongs = songs.filter(
    (i) => i.album?.toLowerCase() === albumName
  );

  const song = filterSongs[0];

  if (!song) {
    return <div className="p-4 text-red-500">Album not found.</div>;
  }

  return (
    <div className="p-6 text-white">
      <div className="flex my-4 flex-wrap justify-center md:justify-start">
        <img
          src={`/${song.albumPoster}`}
          alt="poster"
          className="w-64 rounded-xl shadow-lg"
        />
        <div className="mx-12 my-2">
          <h2 className="text-3xl font-bold mb-4 text-green-400">
            {song.album}
          </h2>

          <p className="mt-4 text-xl">
            <strong className="mr-4">Artist :</strong> {song.artist}
          </p>

          <p className="mt-4 text-xl">
            <strong className="mr-4">Year :</strong> {song.year}
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-semibold mb-4">Songs</h1>
        <Card items={filterSongs} />
      </div>
    </div>
  );
};

export default AlbumDetail;
