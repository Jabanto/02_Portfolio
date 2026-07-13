import { useRef, useState, useEffect, useCallback } from 'react';

type PlaybackDirection = 'forward' | 'backward';

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

const REVERSE_STEP = 0.033;

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

  const animateReverse = useCallback((video: HTMLVideoElement): Promise<void> => {
    return new Promise((resolve) => {
      const startReverse = () => {
        video.currentTime = video.duration;
        
        const step = () => {
          if (video.currentTime > REVERSE_STEP) {
            video.currentTime -= REVERSE_STEP;
            requestAnimationFrame(step);
          } else {
            video.currentTime = 0;
            resolve();
          }
        };
        
        requestAnimationFrame(step);
      };

      if (video.readyState >= 1) {
        startReverse();
      } else {
        video.addEventListener('loadedmetadata', startReverse, { once: true });
      }
    });
  }, []);

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

    let direction: PlaybackDirection = 'forward';
    let animationFrameId: number;

    const handleEnded = async () => {
      if (direction === 'forward') {
        direction = 'backward';
        await animateReverse(video);
        direction = 'forward';
        video.play();
      }
    };

    video.addEventListener('ended', handleEnded);

    if (autoPlay) {
      video.play().catch(() => {
        console.log('Auto-play was prevented');
      });
    }

    return () => {
      video.removeEventListener('ended', handleEnded);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [shouldUseVideo, autoPlay, animateReverse]);

  return {
    videoRef,
    isMobile,
    shouldUseVideo,
  };
};

export default usePingPongVideo;
