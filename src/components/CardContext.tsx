import { createContext } from "react";

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

interface Album {
  album: string;
  albumPoster: string;
  artist: string;
  id: string;
}

interface Artist {
  artist: string;
  artistPic: string;
  id: string;
}

interface CardContextType {
  songs: Song[];
  albums: Album[];
  artists: Artist[];
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export default CardContext;
