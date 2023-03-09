export default function Hero() {
  return (
  <div className="hero min-h-screen max-w-full bg-base-200">
    <div className="hero-content flex-col">
      <div className="flex justify-center items-center">
        <div>
          <h1 className="text-5xl font-bold">PicMySong</h1>
          <p className="text-xl py-6">Are you looking for the perfect song for your picture? Just upload an image and get some suggestions based on what's in your picture.</p>
          <div className="flex gap-3">
            <button className="btn btn-primary">Demo</button>
            <button className="btn btn-accent">Try It Now!</button>
          </div>
        </div>
        <div className="flex">
          <img src="https://img.icons8.com/clouds/400/null/image.png" className=""/>
          <img src="https://img.icons8.com/clouds/400/null/audio-wave--v1.png" className=""/>
        </div>
      </div>
    </div>
  </div>
  );
};