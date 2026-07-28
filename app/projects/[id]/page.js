import Navbar from '@/components/Navbar';
import FooterSection from '@/sections/FooterSection';
import ScrollToTop from '@/components/ScrollToTop';
import CustomCursor from '@/components/CustomCursor';
import Link from 'next/link';
import { projectsData } from '@/data/projects';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id
  }));
}

export default function ProjectDetailPage({ params }) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="main-content" style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <CustomCursor />
      <Navbar />

      <div style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
        <div className="container">
          <Link
            href="/projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#6366f1',
              fontWeight: 600,
              marginBottom: '2rem',
              textDecoration: 'none'
            }}
          >
            <i className="fas fa-arrow-left"></i> Back to All Projects
          </Link>

          {/* Hero Banner Card */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)',
              marginBottom: '3rem'
            }}
          >
            <div style={{ position: 'relative', maxHeight: '450px', overflow: 'hidden' }}>
              <img
                src={project.heroBanner}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ padding: '2.5rem' }}>
              <span
                style={{
                  background: '#eef2ff',
                  color: '#4f46e5',
                  padding: '0.35rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  display: 'inline-block',
                  marginBottom: '1rem'
                }}
              >
                {project.badge || 'Project Showcase'}
              </span>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                {project.title}
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                {project.subtitle}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: '#f1f5f9',
                      color: '#334155',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 500
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <i className="fas fa-external-link-alt" style={{ marginRight: '0.5rem' }}></i> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <i className="fab fa-github" style={{ marginRight: '0.5rem' }}></i> Source Code
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Details Content Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Problem & Solution Card */}
            <div
              style={{
                background: '#ffffff',
                padding: '2rem',
                borderRadius: '16px',
                border: '1px solid #e2e8f0'
              }}
            >
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
                <i className="fas fa-exclamation-triangle" style={{ color: '#ef4444', marginRight: '0.5rem' }}></i>
                Problem Statement
              </h3>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                {project.problemStatement}
              </p>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
                <i className="fas fa-lightbulb" style={{ color: '#10b981', marginRight: '0.5rem' }}></i>
                Proposed Solution
              </h3>
              <p style={{ color: '#475569', lineHeight: 1.7 }}>
                {project.solution}
              </p>
            </div>

            {/* Key Features Card */}
            <div
              style={{
                background: '#ffffff',
                padding: '2rem',
                borderRadius: '16px',
                border: '1px solid #e2e8f0'
              }}
            >
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem' }}>
                <i className="fas fa-star" style={{ color: '#f59e0b', marginRight: '0.5rem' }}></i>
                Key Features
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {project.features.map((feat, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      marginBottom: '1rem',
                      color: '#334155',
                      lineHeight: 1.6
                    }}
                  >
                    <i className="fas fa-check-circle" style={{ color: '#6366f1', marginTop: '0.25rem' }}></i>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Architecture & Challenges */}
          <div
            style={{
              background: '#ffffff',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              marginTop: '2rem'
            }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
              <i className="fas fa-sitemap" style={{ color: '#6366f1', marginRight: '0.5rem' }}></i>
              System Architecture Flow
            </h3>
            <div
              style={{
                background: '#f8fafc',
                padding: '1.25rem 1.5rem',
                borderRadius: '12px',
                fontFamily: 'monospace',
                color: '#334155',
                marginBottom: '2rem',
                borderLeft: '4px solid #6366f1'
              }}
            >
              {project.architectureDiagram}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  Engineering Challenges
                </h4>
                <p style={{ color: '#475569', lineHeight: 1.6 }}>{project.challenges}</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  Lessons Learned
                </h4>
                <p style={{ color: '#475569', lineHeight: 1.6 }}>{project.lessonsLearned}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
      <ScrollToTop />
    </main>
  );
}
