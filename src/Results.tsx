export default function Results( props: { songData : object }) {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl">Results</h1>
      </div>
      <div>
      {
        JSON.stringify(props.songData, null, 4)
      }
      </div>
    </>
  )
}