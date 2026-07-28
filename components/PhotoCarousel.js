import Image from 'next/image';
import { personalInfo } from '@/data/personal';

export default function PhotoCarousel() {
  const photos = personalInfo.carouselPhotos;
  // Duplicate for seamless infinite loop
  const duplicatedPhotos = [...photos, ...photos];

  return (
    <div className="about-photo-carousel">
      <h4 className="about-carousel-title">Moments & Memories</h4>
      <div className="about-carousel-track-wrapper">
        <div className="about-carousel-track" id="aboutCarouselTrack">
          {duplicatedPhotos.map((photo, index) => (
            <div className="about-carousel-item" key={index}>
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
