'use client';

import { useEffect } from 'react';

export default function LightboxModal({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.92)',
        backdropFilter: 'blur(12px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '900px',
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid #e2e8f0'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            color: '#ffffff',
            border: 'none',
            fontSize: '1.2rem',
            cursor: 'pointer',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          aria-label="Close Lightbox"
        >
          <i className="fas fa-times"></i>
        </button>

        <div style={{ position: 'relative', backgroundColor: '#f8fafc', textAlign: 'center' }}>
          <img
            src={item.image || item.certImage}
            alt={item.title}
            style={{
              maxHeight: '65vh',
              width: 'auto',
              maxWidth: '100%',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto'
            }}
          />

          {onPrev && (
            <button
              onClick={onPrev}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                color: '#1e293b',
                border: '1px solid #cbd5e1',
                cursor: 'pointer',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              aria-label="Previous image"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          )}

          {onNext && (
            <button
              onClick={onNext}
              style={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                color: '#1e293b',
                border: '1px solid #cbd5e1',
                cursor: 'pointer',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              aria-label="Next image"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          )}
        </div>

        <div style={{ padding: '1.5rem 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
              {item.title}
            </h3>
            {item.date && (
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#6366f1', background: '#e0e7ff', padding: '0.25rem 0.75rem', borderRadius: '20px' }}>
                {item.date}
              </span>
            )}
          </div>

          {item.location && (
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.75rem' }}>
              <i className="fas fa-location-dot" style={{ marginRight: '0.35rem', color: '#6366f1' }}></i>
              {item.location}
            </p>
          )}

          {item.issuer && (
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.75rem' }}>
              <i className="fas fa-award" style={{ marginRight: '0.35rem', color: '#6366f1' }}></i>
              Issued by: <strong>{item.issuer}</strong>
            </p>
          )}

          {item.description && (
            <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.6, margin: 0 }}>
              {item.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
