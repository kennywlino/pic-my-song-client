export default function SongCard() {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src="src/assets/patrick-tomasso-KGcLJwIYiac-unsplash.jpeg" alt="" className="h-40"/></figure>
      <div className="card-body w-80">
        <p>Artist</p>
        <p>Song Name</p>
        <p>Album</p>
      </div>
      <div className="card-actions self-center pr-4">
        <button className="btn">Play</button>
      </div>
    </div>
    )
  }