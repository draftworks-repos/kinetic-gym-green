import React from 'react';
import { FacilityShowcase } from '../components/FacilityShowcase/FacilityShowcase';
import { BarbellCalculator } from '../components/BarbellCalculator/BarbellCalculator';
import { FinalCTA } from '../components/FinalCTA/FinalCTA';
import './PagesCommon.css';

export const FacilityPage: React.FC = () => {
  return (
    <main>
      <div className="kinetic-page-header">
        <div className="kinetic-page-header-container">
          <div className="text-[#C6FF00] font-bold text-xs uppercase tracking-widest mb-2">
            14,000 SQ FT ATHLETIC COMPOUND
          </div>
          <h1 className="kinetic-page-title">
            WORLD-CLASS <span className="text-[#C6FF00]">TRAINING ARSENAL</span>
          </h1>
          <p className="kinetic-page-desc">
            Take a look inside our Eleiko lifting suites, custom heavy dumbell rows, 30m cushioned turf track, and recovery infrared saunas.
          </p>
        </div>
      </div>

      <FacilityShowcase />
      <BarbellCalculator />
      <FinalCTA />
    </main>
  );
};
