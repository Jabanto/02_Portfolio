import { useRef, useState, useEffect } from 'react';

interface UsePingPongVideoOptions {
  src: string;
  fallbackSrc?: string;
  autoPlay?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  pauseDuration?: number;
}

interface UsePingPongVideoReturn {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isMobile: boolean;
  shouldUseVideo: boolean;
  isPaused: boolean;
}

const shouldSkipVideo = (): boolean => {
  if (typeof window === 'undefined') return true;
  
  const isMobile = window.innerWidth < 768;
  
  const connection = (navigator as any).connection;
  const isSlowConnection = connection && (
    connection.saveData || 
    connection.effectiveType === 'slow-2g' || 
    connection.effectiveType === '2g'
  );
  
  return isMobile || isSlowConnection;
};

export const usePingPongVideo = ({
  src,
  autoPlay = true,
  muted = true,
  playsInline = true,
  pauseDuration = 7000,
}: UsePingPongVideoOptions): UsePingPongVideoReturn => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(shouldSkipVideo());
  const [shouldUseVideo, setShouldUseVideo] = useState<boolean>(!shouldSkipVideo());
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = shouldSkipVideo();
      setIsMobile(mobile);
      setShouldUseVideo(!mobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldUseVideo) return;

    let pauseTimeout: ReturnType<typeof setTimeout>;

    const handleEnded = () => {
      video.pause();
      setIsPaused(true);

      pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        video.currentTime = 0;
        video.play().catch(() => {
          console.log('Auto-play was prevented');
        });
      }, pauseDuration);
    };

    video.addEventListener('ended', handleEnded);

    if (autoPlay) {
      video.play().catch(() => {
        console.log('Auto-play was prevented');
      });
    }

    return () => {
      video.removeEventListener('ended', handleEnded);
      clearTimeout(pauseTimeout);
    };
  }, [shouldUseVideo, autoPlay, pauseDuration]);

  return {
    videoRef,
    isMobile,
    shouldUseVideo,
    isPaused,
  };
};

export default usePingPongVideo;
