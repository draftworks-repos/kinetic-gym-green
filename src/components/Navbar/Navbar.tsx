import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Menu } from 'lucide-react';
import { GYM_CONFIG } from '../../config/gymConfig';
import './Navbar.css';

interface NavbarProps {
  onOpenMobileMenu: () => void;
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobileMenu, onOpenContactModal }) => {
  const location = useLocation();

  return (
    <header className="kinetic-navbar">
      <div className="kinetic-navbar-inner">
        {/* Brand: Logo Image Only */}
        <Link to="/" className="kinetic-brand" aria-label="KINETIC Athletic Club Home">
          <img
            src="/assets/logo.png"
            alt="KINETIC"
            className="kinetic-navbar-logo-img"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="kinetic-nav-links" aria-label="Main Navigation">
          <Link
            to="/"
            className={`kinetic-nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/programs"
            className={`kinetic-nav-link ${location.pathname === '/programs' ? 'active' : ''}`}
          >
            Programs
          </Link>
          <Link
            to="/facility"
            className={`kinetic-nav-link ${location.pathname === '/facility' ? 'active' : ''}`}
          >
            Facilities
          </Link>
          <Link
            to="/trainers"
            className={`kinetic-nav-link ${location.pathname === '/trainers' ? 'active' : ''}`}
          >
            Coaches
          </Link>
          <Link
            to="/contact"
            className={`kinetic-nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact &amp; Location
          </Link>
        </nav>

        {/* Actions */}
        <div className="kinetic-nav-actions">
          {/* Functional direct phone call link */}
          <a
            href={GYM_CONFIG.phoneTelLink}
            className="kinetic-phone-link"
            aria-label={`Call KINETIC Gym at ${GYM_CONFIG.phoneDisplay}`}
          >
            <Phone size={14} className="text-[#C6FF00]" aria-hidden="true" />
            <span>{GYM_CONFIG.phoneDisplay}</span>
          </a>

          {/* Primary CTA (WhatsApp or Modal) */}
          <a
            href={GYM_CONFIG.getWhatsAppLink('Hi KINETIC Gym, I want to book a free guest pass and consult a coach.')}
            target="_blank"
            rel="noopener noreferrer"
            className="kinetic-cta-lime"
            aria-label="Enquire on WhatsApp for free guest pass"
          >
            <MessageSquare size={16} aria-hidden="true" />
            <span>FREE DAY PASS</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="kinetic-menu-toggle"
            onClick={onOpenMobileMenu}
            aria-label="Open mobile menu"
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
};
