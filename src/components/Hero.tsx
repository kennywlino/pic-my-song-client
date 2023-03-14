import { ReactComponent as Music } from '../assets/music-5560692.svg';
import { ReactComponent as Photo } from '../assets/photo-1263856.svg';

export default function Hero() {
  return (
  <div className="hero min-h-screen max-w-full bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="basis-1/2">
          <h1 className="text-5xl font-bold">PicMySong</h1>
          <p className="text-xl py-6">Are you looking for the perfect song for your picture? Just upload an image and get some suggestions based on what's in your picture.</p>
          <div className="flex gap-3">
            <div className="tooltip tooltip-bottom" data-tip="No pics on hand? Click me!">
              <button className="btn btn-primary">Demo</button>
            </div>
            <button className="btn btn-accent">Try It Now!</button>
          </div>
        </div>
        <div className="relative">
          <Music fill="white" className="absolute top-0 left-0 -translate-y-1/2 h-80 w-80" />
          <Photo fill="white" className="absolute top-0 left-0 h-80 w-80 -translate-y-1/2 bg-base-200 hover:opacity-0 transition-opacity" />
        </div>
      </div>
  </div>
  );
};