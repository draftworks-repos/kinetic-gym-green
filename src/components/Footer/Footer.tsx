import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageSquare, MapPin, Clock, Mail } from "lucide-react";
import { GYM_CONFIG } from "../../config/gymConfig";
import "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className="kinetic-footer" aria-label="Gym Footer">
      <div className="kinetic-footer-container">
        <div className="kinetic-footer-top">
          {/* Brand & Direct Contact */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img
                src="/assets/logo.png"
                alt="KINETIC"
                className="kinetic-navbar-logo-img"
              />
            </div>
            <p className="kinetic-footer-tagline">{GYM_CONFIG.tagline}</p>

            <a
              href={GYM_CONFIG.getWhatsAppLink(
                "Hi KINETIC Gym, I want to talk to member support.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="kinetic-footer-contact-item"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare
                size={16}
                className="text-[#C6FF00]"
                aria-hidden="true"
              />
              <span>WhatsApp Member Desk</span>
            </a>

            <a
              href={"mailto:" + GYM_CONFIG.email}
              target="_blank"
              rel="noopener noreferrer"
              className="kinetic-footer-contact-item"
              aria-label="Email Us"
            >
              <Mail size={16} className="text-[#C6FF00]" aria-hidden="true" />
              <span>{GYM_CONFIG.email}</span>
            </a>

            <a
              href={GYM_CONFIG.phoneTelLink}
              className="kinetic-footer-contact-item"
              aria-label={`Call ${GYM_CONFIG.phoneDisplay}`}
            >
              <Phone size={16} className="text-[#C6FF00]" aria-hidden="true" />
              <span>{GYM_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          {/* Location & Facility Hours */}
          <div>
            <h4 className="kinetic-footer-col-title">HOURS &amp; LOCATION</h4>
            <div className="flex items-start gap-2.5 text-sm text-[#A3A3A3] mb-3">
              <Clock
                size={16}
                className="text-[#C6FF00] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <p className="text-white font-semibold">{GYM_CONFIG.hours}</p>
                <p className="text-xs mt-2">{GYM_CONFIG.staffedHours}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-sm text-[#A3A3A3] mt-4">
              <MapPin
                size={16}
                className="text-[#C6FF00] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <p className="text-white font-semibold">Visit us now</p>
                <p className="text-xs mt-2 leading-5">
                  {GYM_CONFIG.location}, {GYM_CONFIG.city}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="kinetic-footer-col-title">NAVIGATION</h4>
            <ul className="kinetic-footer-links">
              <li>
                <Link to="/" className="kinetic-footer-link">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/programs" className="kinetic-footer-link">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link to="/facility" className="kinetic-footer-link">
                  Equipment &amp; Facilities
                </Link>
              </li>
              <li>
                <Link to="/trainers" className="kinetic-footer-link">
                  Coaching Staff
                </Link>
              </li>
              <li>
                <Link to="/contact" className="kinetic-footer-link">
                  Contact &amp; Location
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Giant Typographic Brand Watermark */}
        <div className="kinetic-footer-watermark" aria-hidden="true">
          {GYM_CONFIG.brandName}
        </div>

        <div className="kinetic-footer-bottom">
          <p>
            © {new Date().getFullYear()} {GYM_CONFIG.brandName} Athletic Club.
            All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-[#A3A3A3]">
              Designed & Developed by{" "}
              <a
                className="text-[#C6FF00] hover:text-[#ffffff]"
                href="https://www.draftworks.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                draftworks.in
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
