// function filterSongData(songData) {

// }


export default function Results( props: { songData : object, image: string }) {
  const { songData, image } = props;

  // const filteredSongData = filterSongData(props.songData);
  console.log('image in results: ', image);
  


  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold pb-16">Results</h1>
        <div>
          {image && <img src={image} alt="test" className="h-96"/> }
        </div>
        <div>
        {Object.keys(songData).length !== 0 && JSON.stringify(songData, null, 4)}
        </div>
      </div>
    </>
  )
}