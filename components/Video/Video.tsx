import React, { useRef, useState } from "react";
import Dialog from "../Dialog/Dialog";
import { MainHeader } from "../Typo/MainHeader";
import { Cursor, Loop, Showreel, StyledVideo } from "./Styles/StyledVideo";
import Vimeo from "@u-wave/react-vimeo";
import { Caption } from "../Typo/Caption";

interface VideoProps {
  src: string;
}

const Video = ({ src }: VideoProps) => {
  const [ratio, setRatio] = useState(0);
  const [dialog, toggleDialog] = useState(0);
  const [cursor, setCursor] = useState({ coords: [0, 0], show: false });
  const videoRef = useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    setRatio(videoRef.current.videoHeight / videoRef.current.videoWidth);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const boundingBox = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - boundingBox.x;
    const y = e.clientY - boundingBox.y;
    const padding = 40;

    setCursor((prev) => ({
      show:
        x >= padding &&
        boundingBox.width - padding >= x &&
        y >= padding &&
        boundingBox.height - padding >= y,
      coords: [x, y],
    }));
  };

  return (
    <>
      <StyledVideo
        ratio={ratio}
        onMouseMove={handleMouseMove}
        // onMouseLeave={() => setCursor((prev) => ({ ...prev, show: false }))}
        // onMouseEnter={() => setCursor((prev) => ({ ...prev, show: true }))}>
      >
        <Cursor
          animate={cursor.show ? "show" : "hide"}
          variants={{
            show: { scale: 1, opacity: 1 },
            hide: { scale: 0, opacity: 0 },
          }}
          src='/icons/play-cursor.svg'
          style={{
            left: `${cursor.coords[0]}px`,
            top: `${cursor.coords[1]}px`,
          }}>
          {/* <Caption className='fill'
            style={{
              width: 200,
              fontSize: 21,
            }}>
            Play reel
          </Caption> */}
        </Cursor>
        <Dialog
          content={
            <Showreel>
              <video
                src={src}
                autoPlay={true}
                controls
                playsInline={true}
                muted={true}
                loop={true}
              />
            </Showreel>
          }
          trigger={
            <Loop
              ref={videoRef}
              src={src}
              autoPlay={true}
              playsInline={true}
              muted={true}
              loop={true}
            />
          }
        />
      </StyledVideo>
    </>
  );
};

export default Video;
