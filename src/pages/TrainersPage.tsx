import React from 'react';
import { Trainers } from '../components/Trainers/Trainers';
import { FinalCTA } from '../components/FinalCTA/FinalCTA';
import './PagesCommon.css';

export const TrainersPage: React.FC = () => {
  return (
    <main>
      <div className="kinetic-page-header">
        <div className="kinetic-page-header-container">
          <div className="text-[#C6FF00] font-bold text-xs uppercase tracking-widest mb-2">
            THE COACHING ROSTER
          </div>
          <h1 className="kinetic-page-title">
            MEET OUR <span className="text-[#C6FF00]">CERTIFIED COACHES</span>
          </h1>
          <p className="kinetic-page-desc">
            Direct 1-on-1 athletic directors, strength specialists, and movement technicians committed to your progressive overload.
          </p>
        </div>
      </div>

      <Trainers />
      <FinalCTA />
    </main>
  );
};
