import { useState } from 'react';

import Header from "./Header";
import Hero from "./Hero";
import FileUploadForm from "./FileUploadForm";
import Results from "./Results";
import Footer from "./Footer";

export default function App() {
  const [songData, setSongData] = useState({});
  const [image, setImage] = useState('');

  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <FileUploadForm setSongData={setSongData} setImage={setImage} />
      <Results songData={songData} image={image} />
      <Footer />
    </div>
  );
};