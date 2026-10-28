import React from "react";
import { MessageSquare, ArrowUpRight } from "lucide-react";
import { GYM_CONFIG } from "../../config/gymConfig";
import "./Trainers.css";

export const Trainers: React.FC = () => {
  return (
    <section
      className="kinetic-trainers"
      id="trainers"
      aria-label="Expert Coaching Staff"
    >
      <div className="kinetic-trainers-container">
        <div className="kinetic-trainers-header">
          <div>
            <div className="text-[#C6FF00] font-bold text-xs uppercase tracking-widest mb-2">
              ELITE ATHLETIC DIRECTORS
            </div>
            <h2 className="kinetic-trainers-title">
              EXPERT <span className="text-[#C6FF00]">COACHES</span>
            </h2>
          </div>
          <p className="kinetic-trainers-subtitle">
            Uncompromised technique, injury prevention, and relentless
            motivation. Our trainers don't just hold clipboards-they lead from
            the floor.
          </p>
        </div>

        <div className="kinetic-trainers-grid">
          {GYM_CONFIG.trainers.map((coach) => (
            <article key={coach.id} className="kinetic-trainer-card">
              <div className="kinetic-trainer-img-wrap">
                <img
                  src={coach.image}
                  alt={`${coach.name} - ${coach.role} at KINETIC Gym`}
                  className={coach.imageGradeClass}
                  loading="lazy"
                />
                <span className="kinetic-trainer-exp-badge">
                  {coach.experience}
                </span>
              </div>

              <div className="kinetic-trainer-body">
                <div>
                  <h3 className="kinetic-trainer-name">{coach.name}</h3>
                  <div className="kinetic-trainer-spec">{coach.role}</div>
                  <p className="kinetic-trainer-bio">{coach.bio}</p>

                  <div
                    className="kinetic-trainer-certs"
                    aria-label="Certifications"
                  >
                    {coach.certifications.map((cert, cIdx) => (
                      <span key={cIdx} className="kinetic-trainer-cert-tag">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={GYM_CONFIG.getWhatsAppLink(
                    `Hi Coach ${coach.name}! I'm looking to consult you regarding 1-on-1 personal training at KINETIC Gym.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kinetic-trainer-cta"
                  aria-label={`Consult Coach ${coach.name} on WhatsApp`}
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare size={16} aria-hidden="true" />
                    <span>CONSULT {coach.name.split(" ")[0]}</span>
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
