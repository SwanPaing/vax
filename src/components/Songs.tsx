import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "./Card";
import CardContext from "./CardContext";

interface Song {
  id: string;
  poster: string;
  audio: string;
  title: string;
  album: string;
  albumPoster: string;
  artist: string;
  artistPic: string;
  genre: string;
  year: string;
}

const Songs = () => {

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const context = useContext(CardContext);
  if (!context) {
    return <div>Loading...</div>;
  }
  const { songs } = context;

  const filteredSongs = searchQuery
    ? songs.filter((song: Song) =>
        song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.album.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.genre.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : songs;

  return (
    <div>
      {searchQuery && (
        <h2 className="text-xl font-bold text-center my-4 text-green-400">
          Search results for "{searchQuery}" ({filteredSongs.length} songs)
        </h2>
      )}
      <Card items={filteredSongs}/>
    </div>
  )
}

export default Songs;