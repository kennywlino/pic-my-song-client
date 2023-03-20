import axios from 'axios';
import { type } from 'os';
import { ChangeEvent, useEffect, useState } from 'react';
import { ReactComponent as Photo } from '../assets/photo-1263856.svg';

const SERVER = import.meta.env.VITE_SERVER;

const fileHandler = (e: ChangeEvent<HTMLInputElement>, setSongData: Function, setImage: Function): void => {
  e.preventDefault();
  if (e.target.files == null) {
    throw new Error("No file found");
  }

  const image = e.target.files[0]

  const reader = new FileReader();
  reader.addEventListener(
    "load",
    () => {
      const imageDataUrl = reader.result;
      setImage(reader.result);
    }
  )

  if (image) {
    reader.readAsDataURL(image);
  }

  const formData = new FormData();
  formData.append('img', image);

  axios.post(`${SERVER}/get-songs`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(res => setSongData(res))
    .catch(error => console.error(error));
}

export default function FileUploadForm(props: { setSongData: Function, setImage: Function }) {
  const [isServerRunning, setIsServerRunning] = useState(false);

  useEffect(() => {
    axios.get(`${SERVER}`)
      .then(response => setIsServerRunning(true))
      .catch(error => console.error(error));
  }, []);


  return (
    <div className="min-h-screen flex justify-center items-center">
      <label htmlFor="image_upload" className="flex flex-col items-center justify-center h-96 w-4/5 px-4 border-2 border-dashed rounded-md border-gray-400 cursor-pointer bg-gray-700 hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center">
        <Photo className="h-20 w-20 fill-white" />
          <p className="my-2 text-xl"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-lg">JPG or PNG files</p>
          {isServerRunning ? 
            <div className="alert alert-success mt-4">Server online</div> 
            :
            <div className="alert alert-error mt-4">Server offline. Please wait about 10 seconds.</div>
          }
        </div>
        <input type="file" id="image_upload" className="hidden" onChange={(e) => fileHandler(e, props.setSongData, props.setImage)}/>
      </label>
    </div>
    
  )
}