import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GYM_CONFIG } from '../../config/gymConfig';
import './FacilityShowcase.css';

export const FacilityShowcase: React.FC = () => {
  return (
    <section className="kinetic-facility" id="facility" aria-label="Gym Facilities">
      <div className="kinetic-facility-container">
        <div className="kinetic-facility-header">
          <div className="kinetic-facility-eyebrow">WORLD-CLASS ARSENAL</div>
          <h2 className="kinetic-facility-title">
            ENGINEERED <span className="text-[#C6FF00]">FACILITIES</span>
          </h2>
        </div>

        <div className="kinetic-facility-grid">
          {GYM_CONFIG.facilities.map((fac) => (
            <article key={fac.id} className="kinetic-facility-card">
              <div className="kinetic-facility-img-wrap">
                <img
                  src={fac.image}
                  alt={`${fac.title} at KINETIC Gym`}
                  className={fac.imageGradeClass}
                  loading="lazy"
                />
                <span className="kinetic-facility-highlight-badge">
                  {fac.subtitle}
                </span>
              </div>

              <div className="kinetic-facility-card-body">
                <h3 className="kinetic-facility-card-title">{fac.title}</h3>
                <p className="kinetic-facility-card-desc">{fac.description}</p>

                <a
                  href={GYM_CONFIG.getWhatsAppLink(
                    `Hi KINETIC Gym, I'd like to book a tour to see the ${fac.title} in person.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kinetic-facility-action"
                  aria-label={`Enquire about ${fac.title} on WhatsApp`}
                >
                  <span>Book Equipment Walkthrough</span>
                  <ArrowUpRight size={16} className="text-[#C6FF00]" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
