import Navbar from '@/components/Navbar';
import ExperienceSection from '@/sections/ExperienceSection';
import FooterSection from '@/sections/FooterSection';
import ScrollToTop from '@/components/ScrollToTop';
import CustomCursor from '@/components/CustomCursor';

export const metadata = {
  title: 'Work Experience | Muhammad Bilal Ashiq',
  description: 'Professional work experience, internships, technical leadership roles, and company history of Muhammad Bilal Ashiq.'
};

export default function ExperiencePage() {
  return (
    <main className="main-content" style={{ paddingTop: '80px' }}>
      <CustomCursor />
      <Navbar />

      <ExperienceSection />

      <FooterSection />
      <ScrollToTop />
    </main>
  );
}
