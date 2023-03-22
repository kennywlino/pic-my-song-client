import { RefObject, useRef, useState } from "react";

export default function Audio(props : { audioRef: RefObject<HTMLAudioElement> }) {
  const { audioRef } = props;
  
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <audio ref={audioRef}>
      <source type="audio/mpeg" />
    </audio>
  )
}