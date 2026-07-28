'use client';

import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollPercentage(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollPercentage}%`,
        height: '3.5px',
        background: 'linear-gradient(90deg, #6c63ff, #ff4b8b, #43cea2)',
        zIndex: 2000,
        boxShadow: '0 0 12px rgba(108, 99, 255, 0.8), 0 0 20px rgba(67, 206, 162, 0.6)',
        transition: 'width 0.1s ease-out',
        pointerEvents: 'none'
      }}
    />
  );
}
