'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SectionTitle from '@/components/SectionTitle';
import LightboxModal from '@/components/LightboxModal';
import FooterSection from '@/sections/FooterSection';
import ScrollToTop from '@/components/ScrollToTop';
import CustomCursor from '@/components/CustomCursor';
import { galleryCategories, galleryItems } from '@/data/gallery';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="main-content" style={{ paddingTop: '100px', minHeight: '100vh', background: '#f8fafc' }}>
      <CustomCursor />
      <Navbar />

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <SectionTitle
          icon="fas fa-camera-retro"
          subtitle="Bilal Gallery"
          title="Every Picture Tells a Story"
          description="A visual journey capturing moments, achievements, hackathons, university life, and tech conferences."
        />

        {/* Category Filters */}
        <div className="project-filters" style={{ flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '3rem' }}>
          {galleryCategories.map((cat) => (
            <button
              key={cat.key}
              className={`filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat.key);
                setLightboxIndex(null);
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              className="gallery-card-hover"
            >
              <div style={{ height: '240px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    background: 'rgba(15, 23, 42, 0.75)',
                    backdropFilter: 'blur(4px)',
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '12px',
                    fontWeight: 600
                  }}
                >
                  {item.date}
                </div>
              </div>

              <div style={{ padding: '1.25rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#6366f1', fontWeight: 500, marginBottom: '0.5rem' }}>
                  <i className="fas fa-location-dot" style={{ marginRight: '0.35rem' }}></i>
                  {item.location}
                </p>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <LightboxModal
          item={filteredItems[lightboxIndex]}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      <FooterSection />
      <ScrollToTop />
    </main>
  );
}
