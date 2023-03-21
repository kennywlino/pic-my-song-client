import SongCard from "./SongCard";
import capybara from '../assets/capybara.jpg'
import exampleData from "../../spotify-songs-search-example.json";


interface songDataObject {
  data?: Array<any>;
}

export default function Results() {
  const exampleThreeSongs = exampleData.data[0].tracks.items.slice(0, 3);

  return (
    <>
      <div className="min-h-screen max-w-full bg-base-200 flex flex-col justify-center p-12">
        <h1 className="text-5xl font-bold pb-16 self-center">Results</h1>
        <div className="flex flex-col gap-20 lg:flex-row justify-around items-center">
          <div className="card basis-1/2">
            <figure>{<img src={capybara} alt="test" className="h-[30rem] rounded-lg hover:scale-110"/>}</figure>
          </div>
          <div className="basis-1/2 flex flex-col gap-6">
          {
            exampleThreeSongs.map(track => <SongCard data={track} />)
          }
          </div>
        </div>      
      </div>
    </>
  )
}