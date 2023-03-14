import SongCard from "./SongCard";
import exampleData from "../../spotify-songs-search-example.json";

export default function Results(props: { songData : object, image: string }) {
  const { songData, image } = props;

  let songData0;

  let songDataExists = Object.keys(songData).length !== 0; 
  let allTracks;

  if (songDataExists) {

    allTracks = songData.data[0].tracks.items;
    
    songData0 = {
      artist: allTracks[0].artists[0].name,
      song: allTracks[0].name,
      album: allTracks[0].album.name,
      preview_url: allTracks[0].preview_url,
      spotify_url: allTracks[0].external_urls.spotify
    }
  }

  const exampleThreeSongs = exampleData.data[0].tracks.items.slice(0, 3);

  console.log(exampleThreeSongs);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold pb-16">Results</h1>

        <div className="flex justify-between items-center gap-8">


          {/* <div className="card">
            <figure>{image && <img src={image} alt="test" className="h-96 rounded-lg outline outline-double outline-offset-4 outline-4 outline-primary hover:scale-110"/>}</figure>
          </div> */}

          <div className="card">
            <figure>{<img src="src/assets/capybara.jpg" alt="test" className="h-96 rounded-lg outline outline-double outline-offset-4 outline-4 outline-primary hover:scale-110"/>}</figure>
          </div>

          <div className="flex flex-col gap-4">

          {/* <SongCard />
          <SongCard />
          <SongCard />

          { songDataExists && 
            allTracks.map(track => <SongCard data={track} />)
          } */}
          {
            exampleThreeSongs.map(track => <SongCard data={track} />)
          }
          </div>
        </div>
      </div>
    </>
  )
}