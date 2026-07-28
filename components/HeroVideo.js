'use client';

import { useRef, useState } from 'react';

export default function HeroVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="hero-image-container">
      <div className="hero-image-wrapper">
        <div className="hero-image-bg"></div>
        <video
          ref={videoRef}
          id="heroVideo"
          src="/Avator_video.mp4"
          className="hero-image"
          playsInline
          onEnded={handleVideoEnded}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        ></video>
      </div>

      <button
        id="introVideoBtn"
        className={`intro-video-btn ${isPlaying ? 'is-playing' : ''}`}
        type="button"
        aria-label="Play Introduction Video"
        onClick={togglePlay}
      >
        <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
        <span>{isPlaying ? 'Pause Introduction' : 'click here for Introduction'}</span>
      </button>
    </div>
  );
}
