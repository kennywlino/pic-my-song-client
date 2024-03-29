import SongCard from "./SongCard";
import capybara from '../assets/capybara.jpg'
import exampleData from "../../spotify-songs-search-example.json";


interface songDataObject {
  data?: Array<any>;
}

export default function Results(props: { songData : songDataObject, image: string }) {
  const { songData, image } = props;


  let songDataExists = Object.keys(songData).length !== 0; 
  let allTracks;

  if (songDataExists && songData.data) {
    allTracks = songData.data[0].tracks.items.slice(0, 3);
  }
  // const exampleThreeSongs = exampleData.data[0].tracks.items.slice(0, 3);

  return (
    <>
      <div className="min-h-screen max-w-full bg-base-200 flex flex-col justify-center">
        <h1 className="text-5xl font-bold pb-16 self-center">Results</h1>

        <div className="flex flex-col gap-20 lg:flex-row lg:gap-0  justify-around items-center">


          <div className="card">
            <figure>{image && <img src={image} alt="test" className="h-96 rounded-lg hover:scale-110"/>}</figure>
          </div>

          {/* <div className="card">
            <figure>{<img src={capybara} alt="test" className="h-96 rounded-lg hover:scale-110"/>}</figure>
          </div> */}

          <div className="flex flex-col gap-6">

          { songDataExists && 
            allTracks.map((track: any) => <SongCard data={track} />)
          }

          {/* {
            exampleThreeSongs.map(track => <SongCard data={track} />)
          } */}
          
          </div>
        </div>
      </div>
    </>
  )
}