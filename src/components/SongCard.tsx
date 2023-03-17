import { ReactComponent as SpotifyIcon } from '../assets/spotify.svg';
import { ReactComponent as YouTubeIcon } from '../assets/youtube.svg';

export default function SongCard(props: { data : any }) {
  const { data } = props;

  const artist = data.artists[0].name;
  const song = data.name;
  const album = data.album.name;
  const albumArt = data.album.images[0].url;
  const previewUrl = data.preview_url;
  const spotifyUrl = data.external_urls.spotify;

  return (
    <div className="card card-side h-36 bg-base-100 shadow-xl">
      <figure className="basis-36"><img src={albumArt} alt="" className="h-40" /></figure>
      <div className="card-body w-32 lg:w-80">
        <div>
          <p className="font-bold">{artist}</p>
          <p>{song}</p>
          <p>{album}</p>
        </div>
      </div>
      <div className="card-actions flex-col p-4 self-center gap-4">
        <button onClick={() => window.open(spotifyUrl
          )}>
            <SpotifyIcon className="w-10 h-10" />
        </button>
        <button>
            <YouTubeIcon className="w-10 h-10" />
        </button>
        
      </div>
    </div>
    )
  }