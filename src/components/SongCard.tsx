export default function SongCard(props: { data : object }) {
  const { data } = props;

  const artist = data.artists[0].name;
  const song = data.name;
  const album = data.album.name;
  const albumArt = data.album.images[0].url;
  const previewUrl = data.preview_url;




  return (
    <div className="card card-side h-36 bg-base-100 shadow-xl">
      <figure className="basis-36"><img src={albumArt} alt="" className="h-40" /></figure>
      <div className="card-body w-64">
        <p>{artist}</p>
        <p>{song}</p>
        <p>{album}</p>
      </div>
      <div className="card-actions self-center pr-4">
        <button className="btn" onClick={() => window.open(previewUrl
          )}>Play</button>
      </div>
    </div>
    )
  }