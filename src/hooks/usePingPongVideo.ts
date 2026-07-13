import { useRef, useState, useEffect, useCallback } from 'react';

interface UsePingPongVideoOptions {
  src: string;
  fallbackSrc?: string;
  autoPlay?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

interface UsePingPongVideoReturn {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isMobile: boolean;
  shouldUseVideo: boolean;
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
}: UsePingPongVideoOptions): UsePingPongVideoReturn => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(shouldSkipVideo());
  const [shouldUseVideo, setShouldUseVideo] = useState<boolean>(!shouldSkipVideo());

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

    if (autoPlay) {
      video.play().catch(() => {
        console.log('Auto-play was prevented');
      });
    }
  }, [shouldUseVideo, autoPlay]);

  return {
    videoRef,
    isMobile,
    shouldUseVideo,
  };
};

export default usePingPongVideo;
