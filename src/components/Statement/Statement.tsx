import React from "react";
import "./Statement.css";

export const Statement: React.FC = () => {
  return (
    <section className="kinetic-statement" aria-label="Brand Philosophy">
      <div className="kinetic-statement-container">
        {/* Header Block */}
        <div className="kinetic-statement-header">
          <div>
            <div className="kinetic-statement-eyebrow">
              THE STANDARD OF EXCELLENCE
            </div>
            <h2 className="kinetic-statement-title">
              WHERE REAL <span className="text-[#C6FF00]">STRENGTH</span> IS
              FORGED.
            </h2>
          </div>
          <div>
            <p className="kinetic-statement-desc">
              We eliminated the crowded lines, broken machines, and loud
              distractions of typical commercial gyms. KINETIC is an
              uncompromising performance floor designed for those who train with
              purpose, structure, and intense dedication.
            </p>
          </div>
        </div>

        {/* Dynamic Image Grid */}
        <div className="kinetic-statement-grid">
          <div className="kinetic-statement-card">
            <img
              src="/assets/aistudio/img-5_0eff7984.png"
              alt="Athlete performing barbell deadlift with chalk in atmospheric lighting"
              className="img-grade-squat"
              loading="lazy"
            />
            <div className="kinetic-statement-card-overlay">
              <span className="kinetic-statement-card-tag">
                RAW IRON &amp; CHALK
              </span>
              <h3 className="kinetic-statement-card-title">
                UNCOMPROMISING LOADING
              </h3>
            </div>
          </div>

          <div className="kinetic-statement-card">
            <img
              src="/assets/aistudio/img-11_ccc0dde6.png"
              alt="Close-up hands gripping knurled steel barbell with chalk dust"
              className="img-grade-chalk"
              loading="lazy"
            />
            <div className="kinetic-statement-card-overlay">
              <span className="kinetic-statement-card-tag">
                COMPETITION KNURL
              </span>
              <h3 className="kinetic-statement-card-title">
                PRECISION GRIP &amp; BARS
              </h3>
            </div>
          </div>

          <div className="kinetic-statement-card">
            <img
              src="/assets/aistudio/img-3_5c1b82cf.png"
              alt="Male athlete performing heavy weighted pull-ups in squat rack"
              className="img-grade-squat"
              loading="lazy"
            />
            <div className="kinetic-statement-card-overlay">
              <span className="kinetic-statement-card-tag">BIOMECHANICS</span>
              <h3 className="kinetic-statement-card-title">
                PROGRESSIVE OVERLOAD
              </h3>
            </div>
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="kinetic-pillars">
          <div className="kinetic-pillar-item">
            <div className="kinetic-pillar-num">/ 01</div>
            <h4 className="kinetic-pillar-title">COMPETITION CALIBER</h4>
            <p className="kinetic-pillar-desc">
              Calibrated steel plates, Eleiko IWF barbells, and structural steel
              power racks built for maximum loads.
            </p>
          </div>

          <div className="kinetic-pillar-item">
            <div className="kinetic-pillar-num">/ 02</div>
            <h4 className="kinetic-pillar-title">COACHING INTEGRITY</h4>
            <p className="kinetic-pillar-desc">
              Every trainer holds CSCS or national lifting credentials with
              thousands of hours coaching on the floor.
            </p>
          </div>

          <div className="kinetic-pillar-item">
            <div className="kinetic-pillar-num">/ 03</div>
            <h4 className="kinetic-pillar-title">24/7 BIOMETRIC PRIVACY</h4>
            <p className="kinetic-pillar-desc">
              High-speed facial &amp; biometric recognition entry so you can
              train whenever your schedule dictates.
            </p>
          </div>

          <div className="kinetic-pillar-item">
            <div className="kinetic-pillar-num">/ 04</div>
            <h4 className="kinetic-pillar-title">INTENTIONAL COMMUNITY</h4>
            <p className="kinetic-pillar-desc">
              A high-focus, respectful environment where lifters re-rack their
              weights and push one another forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
