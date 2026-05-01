import { useContext } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Card from "./Card";
import Acards from "./Acards";
import CardContext from "./CardContext";

const SearchResults = () => {
  const context = useContext(CardContext);
  if (!context) {
    return <div>Loading...</div>;
  }
  const { songs, albums, artists } = context;
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  if (!searchQuery) {
    return (
      <div className="text-white p-4">
        <h1 className="text-3xl font-bold mb-6">Search</h1>
        <p>Enter a search term to find songs, albums, and artists.</p>
      </div>
    );
  }

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.album.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredAlbums = albums.filter((album: { album: string; albumPoster: string; artist: string; id: string }) =>
    album.album.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredArtists = artists.filter((artist: { artist: string; artistPic: string }) =>
    artist.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasResults = filteredSongs.length > 0 || filteredAlbums.length > 0 || filteredArtists.length > 0;

  return (
    <div className="text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Search results for "{searchQuery}"</h1>

      {!hasResults ? (
        <p className="text-gray-400">No results found for "{searchQuery}". Try a different search term.</p>
      ) : (
        <div className="space-y-8">
          {/* Songs Section */}
          {filteredSongs.length > 0 && (
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-green-400">Songs</h2>
                {filteredSongs.length > 6 && (
                  <Link to={`/songs?search=${encodeURIComponent(searchQuery)}`} className="text-green-400 hover:underline">
                    See all {filteredSongs.length} songs
                  </Link>
                )}
              </div>
              <Card items={filteredSongs.slice(0, 6)} />
            </section>
          )}

          {/* Albums Section */}
          {filteredAlbums.length > 0 && (
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-green-400">Albums</h2>
                {filteredAlbums.length > 6 && (
                  <Link to={`/albums?search=${encodeURIComponent(searchQuery)}`} className="text-green-400 hover:underline">
                    See all {filteredAlbums.length} albums
                  </Link>
                )}
              </div>
              <Acards items={filteredAlbums.slice(0, 6)} />
            </section>
          )}

          {/* Artists Section */}
          {filteredArtists.length > 0 && (
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-green-400">Artists</h2>
                {filteredArtists.length > 6 && (
                  <Link to={`/artists?search=${encodeURIComponent(searchQuery)}`} className="text-green-400 hover:underline">
                    See all {filteredArtists.length} artists
                  </Link>
                )}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {filteredArtists.slice(0, 6).map((artist: { artist: string; artistPic: string; id: string }) => (
                  <Link to={`/artists/${artist.id}`} key={artist.id}>
                    <div className="bg-white/10 backdrop-blur-md w-[12em] h-[16em] rounded-xl overflow-hidden shadow-lg hover:shadow-green-400/50 hover:scale-105 transition-all duration-300 text-center p-4 border border-white/20">
                      <img
                        src={`/${artist.artistPic || 'posters/a01.png'}`}
                        alt={artist.artist}
                        className="w-32 h-32 rounded-full mx-auto mb-2 object-cover border-2 border-white/30"
                      />
                      <h3 className="text-base font-semibold truncate">{artist.artist}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;