'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data/personal';

export default function PhotoCarousel() {
  const photos = personalInfo.carouselPhotos;
  const trackRef = useRef(null);

  // Scroll handler for navigation arrows
  const scroll = (direction) => {
    if (trackRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="about-photo-carousel">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', padding: '0 0.5rem' }}>
        <h4 className="about-carousel-title" style={{ margin: 0, textAlign: 'left' }}>
          <Link href="/gallery" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
            <span>Gallery & Highlights</span>
            <i className="fas fa-arrow-right" style={{ fontSize: '0.85em', color: 'var(--primary)' }}></i>
          </Link>
        </h4>

        {/* Carousel Arrow Controls */}
        <div style={{ display: 'flex', gap: '0.6rem', zIndex: 5 }}>
          <button
            onClick={() => scroll('left')}
            className="carousel-nav-btn"
            aria-label="Scroll left"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={() => scroll('right')}
            className="carousel-nav-btn"
            aria-label="Scroll right"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="about-carousel-track-wrapper">
        <div className="about-carousel-track scrollable" ref={trackRef} id="aboutCarouselTrack">
          {photos.map((photo, index) => {
            const isLandscape = photo.aspect === 'landscape';
            return (
              <Link key={index} href="/gallery" className={`about-carousel-item ${isLandscape ? 'landscape' : 'portrait'}`}>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <div className="about-carousel-caption">
                  <span>{photo.alt}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
