import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import CardContext from "./CardContext";
import Acards from "./Acards";

const Albums = () => {
  const context = useContext(CardContext);
  if (!context) {
    return <div>Loading...</div>;
  }
  const { albums } = context;
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const filteredAlbums = searchQuery
    ? albums.filter((album: any) =>
        album.album.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : albums;

  return (
    <div className=" text-white">
      <h2 className="text-3xl font-bold mb-6 p-4">Albums</h2>
      {searchQuery && (
        <h3 className="text-xl font-bold text-center my-4 text-green-400">
          Search results for "{searchQuery}" ({filteredAlbums.length} albums)
        </h3>
      )}

      <div>
        <Acards items={filteredAlbums} />
      </div>
    </div>
  );
};

export default Albums;
