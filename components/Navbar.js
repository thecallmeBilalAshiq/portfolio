'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { playClickSound } from '@/utils/sound';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Toggle scrolled state
      if (currentScrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide / Show on scroll down / up
      if (currentScrollY > 150 && currentScrollY > lastScrollY.current + 5) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY.current - 5) {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pagesNav = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleLinkClick = () => {
    playClickSound();
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    playClickSound();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`header-sticky ${scrolled ? 'header-scrolled' : ''} ${hidden ? 'header-hidden' : ''}`}
      id="header"
      role="banner"
    >
      <div className="container">
        <nav className="navbar-container" aria-label="Main Navigation">
          <Link href="/" className="navbar-brand-serif" onClick={handleLinkClick}>
            Bilal<span className="brand-accent">Ashiq</span>
          </Link>

          <ul className="nav-menu-serif" role="menubar">
            {pagesNav.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.path} className="nav-item-serif" role="none">
                  <Link
                    href={link.path}
                    role="menuitem"
                    aria-current={isActive ? 'page' : undefined}
                    className={`nav-link-serif ${isActive ? 'active' : ''}`}
                    onClick={handleLinkClick}
                  >
                    <span className="nav-link-text">{link.name}</span>
                    {isActive && <span className="active-dot-glow"></span>}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mobile-nav-actions">
            <button
              id="mobile-menu-btn"
              className={`mobile-hamburger ${mobileMenuOpen ? 'open' : ''}`}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'active' : ''}`} id="mobile-menu">
        <div className="mobile-drawer-header">
          <Link href="/" className="navbar-brand-serif" onClick={handleLinkClick}>
            Bilal<span className="brand-accent">Ashiq</span>
          </Link>
        </div>
        <ul className="mobile-nav-list">
          {pagesNav.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`mobile-nav-link-serif ${isActive ? 'active' : ''}`}
                  onClick={handleLinkClick}
                >
                  <span>{link.name}</span>
                  {isActive && <i className="fas fa-chevron-right active-arrow"></i>}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {mobileMenuOpen && (
        <div
          className="mobile-drawer-backdrop active"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
}
