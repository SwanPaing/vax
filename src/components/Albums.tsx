import { useContext } from "react";
import CardContext from "./CardContext";
import { Link } from "react-router-dom";
import Acards from "./Acards";

const Albums = () => {
  const { songs } = useContext(CardContext);

  const albums = [
    ...new Map(
      songs
        .filter((s) => s.album && s.album.trim() !== "")
        .map((s) => [
          s.album.trim(),
          {
            album: s.album.trim(),
            albumPoster: s.albumPoster || s.poster,
            id: encodeURIComponent(s.album.trim().toLowerCase()), // Used for routing
          },
        ])
    ).values(),
  ];
 


  return (
    <div className=" text-white">
      <h2 className="text-3xl font-bold mb-6 p-4">Albums</h2>

      <div>
        <Acards items={albums} />
      </div>
    </div>
  );
};

export default Albums;
