import { ReactComponent as PlayIcon } from '../assets/noun-play-1713294.svg';
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
      <figure className="basis-36 hover:scale-110">
        <a href={previewUrl}>
        <div className="relative">
            <img src={albumArt} className="w-full h-full object-cover" alt="album" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <PlayIcon fill="white" className="col-span-1 h-40 w-40 opacity-0 hover:opacity-75" />
            </div>
          </div>
        </a>
      </figure>
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
        <button onClick={() => window.open(`https://www.youtube.com/results?search_query=${artist}+${song}`)}>
            <YouTubeIcon className="w-10 h-10" />
        </button>
        
      </div>
    </div>
    )
  }