import React from "react";
import { Programs } from "../components/Programs/Programs";
import { FinalCTA } from "../components/FinalCTA/FinalCTA";
import "./PagesCommon.css";

export const ProgramsPage: React.FC = () => {
  return (
    <main>
      <div className="kinetic-page-header">
        <div className="kinetic-page-header-container">
          <div className="text-[#C6FF00] font-bold text-xs uppercase tracking-widest mb-2">
            ATHLETIC PROTOCOLS
          </div>
          <h1 className="kinetic-page-title">
            PERIODIZED <span className="text-[#C6FF00]">TRAINING PROGRAMS</span>
          </h1>
          <p className="kinetic-page-desc">
            Explore our specialized disciplines engineered to break through
            plateaus, pack on functional hypertrophy, and elevate cardiovascular
            stamina.
          </p>
        </div>
      </div>

      <Programs />
      <FinalCTA />
    </main>
  );
};
