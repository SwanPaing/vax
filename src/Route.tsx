import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Songs from "./components/Songs";
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import SongDetail from "./components/SongDetail";
import AlbumDetail from "./components/AlbumDetail";
import ArtistDetail from "./components/ArtistDetail";
import SearchResults from "./components/SearchResults";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // Home Page
      { index: true, element: <Home /> },

      // Search Results
      { path: "search", element: <SearchResults /> },
      { path: "search/:id", element: <SongDetail /> },

      // Songs & Song Detail
      { path: "songs", element: <Songs /> },
      { path: "songs/:id", element: <SongDetail /> },

      // Albums & Album Detail
      { path: "albums", element: <Albums /> },
      { path: "albums/:albumId", element: <AlbumDetail /> },
      { path: "albums/:albumId/:id", element: <SongDetail /> },

      // Artists & Artist Detail
      { path: "artists", element: <Artists /> },
      { path: "artists/:artistId", element: <ArtistDetail /> },
      { path: "artists/:artistId/:id", element: <SongDetail /> },
      { path: "artists/:artistId/:albumId", element: <AlbumDetail /> },
      { path: "artists/:artistId/:albumId/:id", element: <SongDetail /> },

      // Optional: fallback route or direct access to songs by id
      { path: ":id", element: <SongDetail /> },
    ],
  },
]);


export default router;