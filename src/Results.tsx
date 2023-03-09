// function filterSongData(songData) {

// }


export default function Results( props: { songData : object, image: string }) {
  const { songData, image } = props;

  let songData0;

  if (Object.keys(songData).length !== 0) {

    const allTracks = songData.data[0].tracks.items;
    
    songData0 = {
      artist: allTracks[0].artists[0].name,
      song: allTracks[0].name,
      album: allTracks[0].album.name,
      preview_url: allTracks[0].preview_url,
      spotify_url: allTracks[0].external_urls.spotify
    }
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold pb-16">Results</h1>
        <div>
          {image && <img src={image} alt="test" className="h-96"/> }
        </div>
        <div>
        {Object.keys(songData).length !== 0 && JSON.stringify(songData0, null, 4)}
        </div>
      </div>
    </>
  )
}