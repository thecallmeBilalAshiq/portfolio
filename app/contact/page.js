'use client';

import Navbar from '@/components/Navbar';
import ContactSection from '@/sections/ContactSection';
import FooterSection from '@/sections/FooterSection';
import ScrollToTop from '@/components/ScrollToTop';
import CustomCursor from '@/components/CustomCursor';
import SectionTitle from '@/components/SectionTitle';
import { personalInfo } from '@/data/personal';

export default function ContactPage() {
  return (
    <main className="main-content" style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <CustomCursor />
      <Navbar />

      <ContactSection />

      {/* Resume Download & Map Placeholder */}
      <section className="section" style={{ background: '#f8fafc', padding: '4rem 0' }}>
        <div className="container">
          <SectionTitle
            icon="fas fa-file-download"
            subtitle="Resume & Connect"
            title="Download CV & Location"
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Resume Card */}
            <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: '1.25rem' }}>
                <i className="fas fa-file-pdf"></i>
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                Official Resume / CV
              </h3>
              <p style={{ color: '#64748b', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Download a PDF copy of my latest software engineering resume detailing AI projects, technical skills, and research background.
              </p>
              <a
                href={`mailto:${personalInfo.email}?subject=Resume Request`}
                className="btn btn-primary"
                style={{ alignSelf: 'flex-start' }}
              >
                <i className="fas fa-download" style={{ marginRight: '0.5rem' }}></i> Request Latest CV
              </a>
            </div>

            {/* Google Map Frame Placeholder */}
            <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435514.48202573215!2d74.05419812678604!3d31.48322087593685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="260"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
      <ScrollToTop />
    </main>
  );
}
