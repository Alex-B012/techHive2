import { useEffect, useRef } from 'react';
import { VideoData } from '../../../../types/newsPanel';
import './newsArticleVideo.css';
import { changeIframeHeight } from '../../../../utils/newsUtils';

interface NewsArticleVideoProp {
   videoObj: VideoData;
}

function NewsArticleVideo({ videoObj }: NewsArticleVideoProp) {
   const iframeRef = useRef<HTMLIFrameElement>(null);

   useEffect(() => {
      const handleResize = () => {
         if (iframeRef.current) {
            changeIframeHeight(iframeRef.current);
         }
      };

      const waitForIframe = () => {
         if (iframeRef.current) {
            changeIframeHeight(iframeRef.current);
            window.addEventListener('resize', handleResize);
         } else {
            requestAnimationFrame(waitForIframe);
         }
      };

      waitForIframe();

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <div className='newsArticleVideo__container'>
         <iframe
            ref={iframeRef}
            className='.newsArticleVideo__iframe'
            src={videoObj.video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            id="video1"
         ></iframe>
      </div>
   );
}

export default NewsArticleVideo;
