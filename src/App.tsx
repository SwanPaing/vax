import { RouterProvider } from "react-router-dom";
import CardContext from "./components/CardContext";
import router from "./Route";

const App = () => {

    const songs = [
        {
            id: "1",
            poster: "posters/a01.png",
            audio: "songs/a01.mp3",
            title: "Eastside",
            album: "Friends Keep Secrets",
            albumPoster: "alposters/aa02.png",
            artist: "Benny Blanco, Halsey, Khalid",
            artistPic: "",
            genre: "pop",
            year: "2018"
        },
        {
            id: "2",
            poster: "posters/a02.jpg",
            audio: "songs/a02.mp3",
            title: "When the Party's Over",
            album: "",
            albumPoster: "",
            artist: "Billie Eilish",
            artistPic: "artistspics/ara05.jpg",
            genre: "pop",
            year: "2018"
        },
        {
            id: "3",
            poster: "posters/a03.jpg",
            audio: "songs/a03.mp3",
            title: "Gangsta's Paradise",
            album: "Gangsta's Paradise",
            albumPoster: "alposters/aa03.jpg",
            artist: "Coolio",
            artistPic: "artistspics/ara08.webp",
            genre: "Electronic music, Hip-Hop/Rap, Dance/Electronic",
            year: "1995"
        },
        {
            id: "4",
            poster: "posters/a10.png",
            audio: "songs/a10.mp3",
            title: "Love Yourself",
            album: "Purpose",
            albumPoster: "alposters/aa08.png",
            artist: "Justin Bieber",
            artistPic: "artistspics/ara03.webp",
            genre: "Classical, Alternative/Indie, R&B/Soul, French Indie, pop, disco ",
            year: "2015"
        },
        
        {
            id: "5",
            poster: "posters/a05.jpg",
            audio: "songs/a05.mp3",
            title: "Happier",
            album: "Divide",
            albumPoster: "alposters/aa01.png",
            artist: "Ed Sheeran",
            artistPic: "artistspics/ara02.webp",
            genre: "pop",
            year: "2017"
        },
        {
            id: "6",
            poster: "posters/a06.jpg",
            audio: "songs/a06.mp3",
            title: "Perfect",
            album: "Divide",
            albumPoster: "alposters/aa01.png",
            artist: "Ed Sheeran",
            artistPic: "artistspics/ara02.webp",
            genre: "pop, soft rock",
            year: "2017"
        },
        {
            id: "7",
            poster: "posters/a07.png",
            audio: "songs/a07.mp3",
            title: "Photograph",
            album: "Multiply",
            albumPoster: "alposters/aa05.png",
            artist: "Ed Sheeran",
            artistPic: "artistspics/ara02.webp",
            genre: "Pop, German Pop, UK R&B",
            year: "2014"
        },
        {
            id: "8",
            poster: "posters/a08.jpg",
            audio: "songs/a08.mp3",
            title: "Always",
            album: "Yours",
            albumPoster: "alposters/aa06.jpg",
            artist: "Isak Danielson",
            artistPic: "artistspics/ara09.jpg",
            genre: "pop",
            year: "2018"
        },
        {
            id: "9",
            poster: "posters/a09.jpg",
            audio: "songs/a09.mp3",
            title: "Say You Won't Let Go",
            album: "Back from the Edge",
            albumPoster: "alposters/aa07.jpg",
            artist: "James Arthur",
            artistPic: "artistspics/ara10.jpg",
            genre: "pop",
            year: "2016"
        },
        {
            id: "10",
            poster: "posters/a04.png",
            audio: "songs/a04.mp3",
            title: "10,000 Hours",
            album: "Good Things",
            albumPoster: "alposters/aa04.png",
            artist: "Dan + Shay, Justin Bieber",
            artistPic: "",
            genre: "Country",
            year: "2019"
        },
        {
            id: "11",
            poster: "posters/a15.jpg",
            audio: "songs/a15.mp3",
            title: "Not Like Us",
            album: "The Pop Out: Ken & Friends",
            albumPoster: "alposters/aa12.webp",
            artist: "Kendrick Lamar",
            artistPic: "artistspics/ara01.jpg",
            genre: "West Coast hip-hop, Hip-Hop/Rap",
            year: "2024"
        },
        {
            id: "12",
            poster: "posters/a12.jpg",
            audio: "songs/a12.mp3",
            title: "Pointless",
            album: "Broken By Desire To Be Heavenly Sent",
            albumPoster: "alposters/aa10.jpg",
            artist: "Lewis Capaldi",
            artistPic: "artistspics/ara04.jpg",
            genre: "Alternative/Indie, Pop",
            year: "2023"
        },
        {
            id: "13",
            poster: "posters/a13.jpg",
            audio: "songs/a13.mp3",
            title: "Memories",
            album: "",
            albumPoster: "",
            artist: "Maroon 5",
            artistPic: "artistspics/ara06.jpg",
            genre: "pop",
            year: "2019"
        },
        {
            id: "14",
            poster: "posters/a14.jpg",
            audio: "songs/a14.mp3",
            title: "Payphone",
            album: "Overexposed",
            albumPoster: "alposters/aa11.png",
            artist: "Maroon 5, Wiz Khalifa",
            artistPic: "artistspics/ara06.jpg",
            genre: "pop",
            year: "2012"
        },
        {
            id: "15",
            poster: "posters/a11.jpg",
            audio: "songs/a11.mp3",
            title: "All the Stars",
            album: "Black Panther",
            albumPoster: "alposters/aa09.png",
            artist: "SZA, Kendrick Lamar",
            artistPic: "",
            genre: "Contemporary R&B, R&B/Soul, Hip-Hop/Rap",
            year: "2018"
        },
        
        {
            id: "16",
            poster: "posters/a16.jpg",
            audio: "songs/a16.mp3",
            title: "Night Changes",
            album: "Four",
            albumPoster: "alposters/aa13.png",
            artist: "One Direction",
            artistPic: "artistspics/ara07.jpg",
            genre: "Rock",
            year: "2014"
        },
        {
            id: "",
            poster: "posters/a.png",
            audio: "songs/a17.mp3",
            title: "",
            album: "",
            albumPoster: "",
            artist: "",
            artistPic: "",
            genre: "",
            year: ""
        },
    ];

    // Compute unique albums
    const albums = songs.reduce((acc: { album: string; albumPoster: string; artist: string; id: string }[], song) => {
      if (song.album && !acc.find(a => a.album === song.album)) {
        acc.push({ 
          album: song.album, 
          albumPoster: song.albumPoster, 
          artist: song.artist,
          id: encodeURIComponent(song.album.toLowerCase())
        });
      }
      return acc;
    }, []);

    // Compute unique artists
    const artists = songs.reduce((acc: { artist: string; artistPic: string; id: string }[], song) => {
      const artistNames = song.artist.split(/,|&|\/|feat\.|\+| and /i).map(a => a.trim()).filter(a => a);
      artistNames.forEach(artistName => {
        const normalizedName = artistName.toLowerCase();
        if (!acc.find(a => a.artist.toLowerCase() === normalizedName)) {
          acc.push({ 
            artist: artistName, 
            artistPic: song.artistPic || "", // Use the pic if available, otherwise empty
            id: encodeURIComponent(normalizedName)
          });
        }
      });
      return acc;
    }, []);

  return (
    <div className="relative min-h-screen">
        {/* Animated Music Notes Background */}
        <div className="fixed inset-0 pointer-events-none z-[-1]">
            <div className="music-note note-1">♪</div>
            <div className="music-note note-2">♫</div>
            <div className="music-note note-3">♬</div>
            <div className="music-note note-4">♩</div>
            <div className="music-note note-5">♪</div>
            <div className="music-note note-6">♫</div>
            <div className="music-note note-7">♬</div>
            <div className="music-note note-8">♩</div>
            <div className="music-note note-9">♪</div>
            <div className="music-note note-10">♫</div>
            <div className="music-note note-11">♬</div>
            <div className="music-note note-12">♩</div>
            <div className="music-note note-13">♪</div>
            <div className="music-note note-14">♫</div>
            <div className="music-note note-15">♬</div>
            <div className="music-note note-16">♩</div>
        </div>
        
        <CardContext.Provider value={{songs, albums, artists}}>
            <RouterProvider router={router}/>
        </CardContext.Provider>
    </div>
  )
}

export default App;