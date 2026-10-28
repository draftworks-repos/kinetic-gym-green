import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GYM_CONFIG } from '../../config/gymConfig';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const navLinks = [
    { to: '/', label: 'Home', index: '01' },
    { to: '/programs', label: 'Programs', index: '02' },
    { to: '/facility', label: 'Facilities', index: '03' },
    { to: '/trainers', label: 'Coaches', index: '04' },
    { to: '/contact', label: 'Contact & Location', index: '05' },
  ];

  return (
    <div
      className={`kinetic-mobile-menu-overlay ${isOpen ? 'is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Header */}
      <div className="kinetic-mobile-menu-header">
        <Link to="/" onClick={onClose} aria-label="KINETIC Home" className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="KINETIC"
            className="kinetic-navbar-logo-img h-7 w-auto object-contain"
          />
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="kinetic-mobile-close-btn"
          aria-label="Close menu"
        >
          <X size={24} aria-hidden="true" />
        </button>
      </div>

      {/* Nav items */}
      <nav className="kinetic-mobile-nav-list" aria-label="Mobile Navigation Links">
        {navLinks.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={onClose}
            className={`kinetic-mobile-nav-item ${
              location.pathname === item.to ? 'active' : ''
            }`}
          >
            <span>{item.label}</span>
            <span className="kinetic-mobile-nav-number">{item.index}</span>
          </Link>
        ))}
      </nav>

      {/* Direct Phone & WhatsApp Conversion Links */}
      <div className="kinetic-mobile-actions">
        <a
          href={GYM_CONFIG.phoneTelLink}
          className="kinetic-mobile-btn-phone"
          aria-label={`Call ${GYM_CONFIG.phoneDisplay}`}
        >
          <Phone size={18} className="text-[#C6FF00]" aria-hidden="true" />
          <span>Call: {GYM_CONFIG.phoneDisplay}</span>
        </a>

        <a
          href={GYM_CONFIG.getWhatsAppLink('Hi KINETIC Gym, I want to book my free guest pass via WhatsApp.')}
          target="_blank"
          rel="noopener noreferrer"
          className="kinetic-mobile-btn-whatsapp"
          onClick={onClose}
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={20} aria-hidden="true" />
          <span>Chat on WhatsApp</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>

        <div className="kinetic-mobile-info">
          <p className="text-white font-medium">{GYM_CONFIG.hours}</p>
          <p>{GYM_CONFIG.location}</p>
        </div>
      </div>
    </div>
  );
};
