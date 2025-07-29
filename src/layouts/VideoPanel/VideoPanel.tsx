import "./videoPanel.css";
import { useState, useEffect } from "react";
import { VideoInterface } from "../../types/videoPanel";

interface VideoPanelProps {
   data: VideoInterface[],
}

function VideoPanel({ data }: VideoPanelProps) {
   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
   const [videoError, setVideoError] = useState(false);

   const handleVideoEnd = () => {
      if (currentVideoIndex < data.length - 1) {
         setCurrentVideoIndex(currentVideoIndex + 1);
      } else {
         setCurrentVideoIndex(0);
      }
   };

   const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
      const videoElement = e.target as HTMLVideoElement;
      console.error("Error loading video:", videoElement?.src);
      console.error("Error event:", e.nativeEvent);
      setVideoError(true);
      handleVideoEnd()
   };

   useEffect(() => {
      const videoElement = document.getElementById("video_id") as HTMLVideoElement;
      if (videoElement) {
         videoElement.load();
      }
   }, [currentVideoIndex]);

   return (
      <section className="video__section">
         <div className="bgvideo">

            <video
               key={data[currentVideoIndex].id}
               id="video_id"
               src={data[currentVideoIndex].src}
               autoPlay
               muted
               loop={false}
               className="video-background"
               preload="auto"
               onEnded={handleVideoEnd}
               onError={handleVideoError}
            >
               Your browser does not support the video tag.
            </video>
            <div className="effect"></div>

            {!videoError && (
               <div className="video__text video-text">
                  <h1 className="text-capitalize">Pioneering <span className="video__nowrap">the future</span></h1>
               </div>)}
         </div>

         {videoError && (
            <div className="error-message">
               <p>Sorry, there was an error loading the video. <span className="video__nowrap">Please try again.</span></p>
            </div>
         )}
      </section>
   );
}

export default VideoPanel;
