import React, { useState } from 'react';
import { ArrowUpRight, MessageSquare, Check } from 'lucide-react';
import { GYM_CONFIG, Program } from '../../config/gymConfig';
import './Programs.css';

interface ProgramsProps {
  limit?: number;
}

export const Programs: React.FC<ProgramsProps> = ({ limit }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredPrograms = GYM_CONFIG.programs.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'strength') return p.id === 'strength' || p.id === 'functional';
    if (activeFilter === 'conditioning') return p.id === 'conditioning' || p.id === 'endurance';
    if (activeFilter === 'squad') return p.id === 'group' || p.id === 'mobility';
    return true;
  });

  const displayList = limit ? filteredPrograms.slice(0, limit) : filteredPrograms;

  return (
    <section className="kinetic-programs" id="programs" aria-label="Training Programs">
      <div className="kinetic-programs-container">
        {/* Header */}
        <div className="kinetic-programs-top">
          <div>
            <div className="text-[#C6FF00] font-bold text-xs uppercase tracking-widest mb-2">
              PERIODIZED TRAINING DISCIPLINES
            </div>
            <h2 className="kinetic-programs-title">
              TRANSFORMATION <span className="text-[#C6FF00]">PROGRAMS</span>
            </h2>
          </div>
          <p className="kinetic-programs-subtitle">
            Progressive overload meets metabolic conditioning. Every program is scientifically periodized to maximize lean tissue and athletic output.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="kinetic-programs-filters" role="tablist" aria-label="Program categories">
          <button
            type="button"
            className={`kinetic-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
            role="tab"
            aria-selected={activeFilter === 'all'}
          >
            All Disciplines
          </button>
          <button
            type="button"
            className={`kinetic-filter-btn ${activeFilter === 'strength' ? 'active' : ''}`}
            onClick={() => setActiveFilter('strength')}
            role="tab"
            aria-selected={activeFilter === 'strength'}
          >
            Strength &amp; Power
          </button>
          <button
            type="button"
            className={`kinetic-filter-btn ${activeFilter === 'conditioning' ? 'active' : ''}`}
            onClick={() => setActiveFilter('conditioning')}
            role="tab"
            aria-selected={activeFilter === 'conditioning'}
          >
            Metabolic &amp; Conditioning
          </button>
          <button
            type="button"
            className={`kinetic-filter-btn ${activeFilter === 'squad' ? 'active' : ''}`}
            onClick={() => setActiveFilter('squad')}
            role="tab"
            aria-selected={activeFilter === 'squad'}
          >
            Squad Bootcamp &amp; Mobility
          </button>
        </div>

        {/* Grid */}
        <div className="kinetic-programs-grid">
          {displayList.map((prog: Program) => (
            <article key={prog.id} className="kinetic-program-card">
              <div className="kinetic-program-img-wrap">
                <img
                  src={prog.image}
                  alt={`${prog.title} training at KINETIC Gym`}
                  className={prog.imageGradeClass}
                  loading="lazy"
                />
                <span className="kinetic-program-intensity">
                  {prog.intensity} Intensity
                </span>
              </div>

              <div className="kinetic-program-body">
                <div>
                  <h3 className="kinetic-program-title">{prog.title}</h3>
                  <p className="kinetic-program-desc">{prog.description}</p>

                  <ul className="kinetic-program-features">
                    {prog.features.map((feat, fIdx) => (
                      <li key={fIdx} className="kinetic-program-feature-item">
                        <Check size={14} className="kinetic-program-feature-dot shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct WhatsApp Action for this specific program */}
                <a
                  href={GYM_CONFIG.getWhatsAppLink(
                    `Hi KINETIC Gym! I'm interested in signing up for the ${prog.title} program. Can you share schedules and coach availability?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kinetic-program-cta"
                  aria-label={`Enquire about ${prog.title} on WhatsApp`}
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare size={16} className="kinetic-program-cta-icon shrink-0" aria-hidden="true" />
                    <span>ENQUIRE ON WHATSAPP</span>
                  </span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
