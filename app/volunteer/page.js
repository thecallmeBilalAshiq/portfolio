import Navbar from '@/components/Navbar';
import VolunteerSection from '@/sections/VolunteerSection';
import FooterSection from '@/sections/FooterSection';
import ScrollToTop from '@/components/ScrollToTop';
import CustomCursor from '@/components/CustomCursor';

export const metadata = {
  title: 'Volunteer Experience | Muhammad Bilal Ashiq',
  description: 'Community outreach, student society leadership, and volunteer achievements of Muhammad Bilal Ashiq.'
};

export default function VolunteerPage() {
  return (
    <main className="main-content" style={{ paddingTop: '80px' }}>
      <CustomCursor />
      <Navbar />

      <VolunteerSection />

      <FooterSection />
      <ScrollToTop />
    </main>
  );
}
