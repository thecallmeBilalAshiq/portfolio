'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ExperienceSection from '@/sections/ExperienceSection';
import EducationSection from '@/sections/EducationSection';
import ProjectsSection from '@/sections/ProjectsSection';
import SkillsSection from '@/sections/SkillsSection';
import VolunteerSection from '@/sections/VolunteerSection';
import CertificatesSection from '@/sections/CertificatesSection';
import ContactSection from '@/sections/ContactSection';
import FooterSection from '@/sections/FooterSection';
import CustomCursor from '@/components/CustomCursor';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingChatbot from '@/components/FloatingChatbot';
import BackgroundCanvas from '@/components/BackgroundCanvas';
import ScrollProgress from '@/components/ScrollProgress';
import Lenis from 'lenis';

export default function Home() {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Initialize AOS Animation Library
    const initAOS = () => {
      if (typeof window !== 'undefined' && window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: true,
          offset: 100
        });
      }
    };

    if (window.AOS) {
      initAOS();
    } else {
      const interval = setInterval(() => {
        if (window.AOS) {
          initAOS();
          clearInterval(interval);
        }
      }, 200);
      return () => clearInterval(interval);
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="main-content">
      <ScrollProgress />
      <BackgroundCanvas />
      <CustomCursor />
      <Navbar />

      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <VolunteerSection />
      <CertificatesSection />
      <ContactSection />

      <FooterSection />

      <ScrollToTop />
      <FloatingChatbot />
    </main>
  );
}
