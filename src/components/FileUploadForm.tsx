import axios from 'axios';
import { type } from 'os';
import { ChangeEvent } from 'react';

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
  return (
    <div className="min-h-screen flex justify-center items-center">
      <label htmlFor="image_upload" className="flex flex-col items-center justify-center h-96 w-4/5 px-4 border-2 border-dashed rounded-md border-gray-400 cursor-pointer bg-gray-700 hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center">
        <svg className="h-12 w-12 mb-4 fill-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
          <p className="mb-2 text-lg"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-md">JPG or PNG files</p>
        </div>
        <input type="file" id="image_upload" className="hidden" onChange={(e) => fileHandler(e, props.setSongData, props.setImage)}/>
      </label>
    </div>
  )
}