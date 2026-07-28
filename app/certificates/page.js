'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import CertificatesSection from '@/sections/CertificatesSection';
import LightboxModal from '@/components/LightboxModal';
import FooterSection from '@/sections/FooterSection';
import ScrollToTop from '@/components/ScrollToTop';
import CustomCursor from '@/components/CustomCursor';
import { certificatesData } from '@/data/certificates';

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <main className="main-content" style={{ paddingTop: '80px' }}>
      <CustomCursor />
      <Navbar />

      <CertificatesSection />

      {selectedCert && (
        <LightboxModal
          item={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}

      <FooterSection />
      <ScrollToTop />
    </main>
  );
}
