'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <section id="home" className="hero">
      <div id="particles-js" className="hero-particles"></div>
      <div className="hero-glow-orb"></div>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content" data-aos="fade-up" data-aos-duration="1000">
            <div className="status-pill">
              <span className="status-dot"></span>
              <span>Open to Work: AI / ML Engineer & Software Developer</span>
            </div>
            <p className="hero-greeting">Hi, my name is</p>
            <h1 className="hero-title">
              Muhammad <span className="text-gradient">Bilal Ashiq</span>
            </h1>
            <h2 className="hero-subtitle">AI, ML & Software Engineer</h2>
            <div className="hero-description">
              <img
                src="https://readme-typing-svg.herokuapp.com?color=%23FF4B8B&size=30&center=true&vCenter=true&width=650&lines=Hello!+I'm+Muhammad+Bilal+Ashiq;+AI+%26+Machine+Learning+Engineer;💻+Software+Developer;🎯+Tech+Innovator+%26+Educator;💡+Building+Intelligent+Systems"
                alt="Muhammad Bilal Ashiq - Typing Intro"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">
                Get In Touch
              </Link>
              <Link href="/projects" className="btn btn-outline">
                View Projects
              </Link>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/thecallmeBilalAshiq"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/bilal-ashiq/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:methebilalashiq@gmail.com" className="social-link" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="tel:+923088660209" className="social-link" aria-label="Phone">
                <i className="fas fa-phone"></i>
              </a>
            </div>
          </div>

          <div className="hero-image-container" data-aos="zoom-in" data-aos-duration="1000">
            <div className="hero-image-wrapper">
              <div className="hero-image-bg"></div>
              <video
                ref={videoRef}
                id="heroVideo"
                src="/Avator_video.mp4"
                className="hero-image"
                playsInline
              ></video>
            </div>

            <button
              id="introVideoBtn"
              className="intro-video-btn"
              type="button"
              aria-label="Play Introduction Video"
              onClick={toggleVideo}
            >
              <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
              <span>{isPlaying ? 'Pause Introduction' : 'click here for Introduction'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
