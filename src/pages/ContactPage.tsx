import React from "react";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { GYM_CONFIG } from "../config/gymConfig";
import "./ContactPage.css";
import "./PagesCommon.css";

export const ContactPage: React.FC = () => {
  return (
    <main>
      <div className="kinetic-page-header">
        <div className="kinetic-page-header-container">
          <div className="text-[#C6FF00] font-bold text-xs uppercase tracking-widest mb-2">
            GET IN TOUCH DIRECTLY
          </div>
          <h1 className="kinetic-page-title">
            CONTACT &amp; <span className="text-[#C6FF00]">LOCATION</span>
          </h1>
          <p className="kinetic-page-desc">
            No automated switchboards or slow ticket systems. Connect
            immediately with our head coaching desk via WhatsApp or phone.
          </p>
        </div>
      </div>

      <section
        className="kinetic-contact-section"
        aria-label="Contact Information"
      >
        <div className="kinetic-contact-container">
          {/* Quick Direct Actions Card (Left Block) */}
          <div className="kinetic-contact-card-box">
            <h2 className="font-display text-2xl font-600 text-white uppercase tracking-tight mb-2">
              INSTANT COACHING DESK
            </h2>
            <p className="text-sm text-[#A3A3A3] mb-6">
              Tap below to initiate a phone call or chat directly with our head
              trainers on WhatsApp.
            </p>

            <div className="kinetic-contact-options">
              <a
                href={GYM_CONFIG.getWhatsAppLink(
                  "Hi KINETIC Gym! I want to visit the facility, claim my free day pass, and talk to a trainer.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="kinetic-contact-cta-whatsapp"
                aria-label="Chat on WhatsApp"
              >
                <span className="flex items-center gap-3">
                  <MessageSquare size={22} aria-hidden="true" />
                  <span>CHAT ON WHATSAPP</span>
                </span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>

              <a
                href={GYM_CONFIG.phoneTelLink}
                className="kinetic-contact-cta-phone"
                aria-label={`Call ${GYM_CONFIG.phoneDisplay}`}
              >
                <span className="flex items-center gap-3">
                  <Phone
                    size={20}
                    className="text-[#C6FF00]"
                    aria-hidden="true"
                  />
                  <span>CALL: {GYM_CONFIG.phoneDisplay}</span>
                </span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="border-t border-white/10 pt-6 mt-6">
              <div className="kinetic-contact-detail-row">
                <MapPin
                  size={20}
                  className="text-[#C6FF00] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-white font-bold text-sm uppercase">
                    FACILITY ADDRESS
                  </h3>
                  <p className="text-sm text-[#A3A3A3]">
                    {GYM_CONFIG.location}
                  </p>
                  <p className="text-sm text-[#A3A3A3]">{GYM_CONFIG.city}</p>
                </div>
              </div>

              <div className="kinetic-contact-detail-row">
                <Clock
                  size={20}
                  className="text-[#C6FF00] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-white font-bold text-sm uppercase">
                    HOURS OF OPERATION
                  </h3>
                  <p className="text-[0.75rem] text-white font-semibold">
                    {GYM_CONFIG.hours}
                  </p>
                  <p className="text-xs text-[#A3A3A3]">
                    {GYM_CONFIG.staffedHours}
                  </p>
                </div>
              </div>

              <div className="kinetic-contact-detail-row">
                <Phone
                  size={20}
                  className="text-[#C6FF00] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-white font-bold text-sm uppercase">
                    PHONE NUMBER
                  </h3>
                  <div className="flex flex-col gap-1 mt-0.5">
                    <a
                      href="tel:+919876543210"
                      className="text-sm text-[#A3A3A3] hover:text-[#C6FF00] transition-colors"
                    >
                      +91 12345 12345
                    </a>
                    <a
                      href="tel:+919876543211"
                      className="text-sm text-[#A3A3A3] hover:text-[#C6FF00] transition-colors"
                    >
                      +91 89596 90529
                    </a>
                  </div>
                </div>
              </div>

              <div className="kinetic-contact-detail-row">
                <Mail
                  size={20}
                  className="text-[#C6FF00] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-white font-bold text-sm uppercase">
                    OFFICIAL EMAIL
                  </h3>
                  <a
                    href={`mailto:${GYM_CONFIG.email}`}
                    className="text-sm text-[#A3A3A3] hover:text-[#C6FF00] transition-colors"
                  >
                    {GYM_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Map Only (Zero additional text) */}
          <div className="kinetic-contact-map-box">
            <iframe
              title="Facility Location Map"
              src="https://maps.google.com/maps?q=Sector%2048%2C%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="kinetic-contact-map-iframe"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
};
