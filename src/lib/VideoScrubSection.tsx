import { useLayoutEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VideoScrubSectionProps {
  id?: string;
  src: string;
  scrollLengthVh?: number;
  children?: ReactNode;
  className?: string;
  overlayClassName?: string;
  scrim?: boolean;
}

export function VideoScrubSection({
  id,
  src,
  scrollLengthVh = 300,
  children,
  className = '',
  overlayClassName = '',
  scrim = true,
}: VideoScrubSectionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const video = videoRef.current;
    if (!wrapper || !video) return;

    let st: ScrollTrigger | undefined;

    const setup = () => {
      st = ScrollTrigger.create({
        trigger: wrapper,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.4,
        onUpdate: (self) => {
          const duration = video.duration || 0;
          if (duration) {
            video.currentTime = self.progress * duration * 0.999;
          }
          overlayRef.current?.style.setProperty('--progress', String(self.progress));
        },
      });
    };

    // Safari/iOS only allow programmatic seeking after a play() has been kicked off once.
    video.muted = true;
    video.playsInline = true;
    const kick = video.play();
    if (kick && typeof kick.then === 'function') {
      kick.then(() => video.pause()).catch(() => {});
    } else {
      video.pause();
    }

    if (video.readyState >= 1) {
      setup();
    } else {
      video.addEventListener('loadedmetadata', setup, { once: true });
    }

    return () => {
      st?.kill();
      video.removeEventListener('loadedmetadata', setup);
    };
  }, []);

  return (
    <div id={id} ref={wrapperRef} className={`video-scrub ${className}`} style={{ height: `${scrollLengthVh}vh` }}>
      <div className="video-scrub__sticky">
        <video ref={videoRef} className="video-scrub__video" src={src} muted playsInline preload="auto" />
        {scrim && <div className="video-scrub__scrim" />}
        <div ref={overlayRef} className={`video-scrub__overlay ${overlayClassName}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
