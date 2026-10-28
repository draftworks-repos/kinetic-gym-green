import React from 'react';
import './WhyUs.css';

export const WhyUs: React.FC = () => {
  const points = [
    {
      num: '01',
      title: 'CAPPED MEMBERSHIPS',
      desc: 'We limit our active membership roster to ensure zero waiting lines for squat racks, Olympic platforms, or heavy dumbbell pairs even during peak hours.',
    },
    {
      num: '02',
      title: 'COMPETITION EQUIPMENT',
      desc: 'Eleiko calibrated plates, IPF-approved power cages, Rogue Ohio power bars, and specialty cambered bars that commercial health clubs refuse to buy.',
    },
    {
      num: '03',
      title: 'BIOMETRIC 24/7 ACCESS',
      desc: 'Train early morning or midnight. Biometric turnstile access and private lockers provide uninterrupted freedom to execute your training cycle.',
    },
    {
      num: '04',
      title: 'METABOLIC CONDITIONING',
      desc: '30 meters of indoor turf with weighted prowlers, Concept2 rowers, assault bikes, and Bulgarian bags for comprehensive athletic stamina.',
    },
    {
      num: '05',
      title: 'ELITE ATHLETIC CULTURE',
      desc: 'No influencers filming blocking gear. An intense, focused atmosphere of disciplined athletes who respect the iron, re-rack weights, and train hard.',
    },
    {
      num: '06',
      title: 'RECOVERY SUITE',
      desc: 'Finish your brutal training sessions with our infrared saunas, cold plunge tubs, and Theragun mobility stations to accelerate muscular recovery.',
    },
  ];

  return (
    <section className="kinetic-whyus" aria-label="Why Choose KINETIC">
      <div className="kinetic-whyus-container">
        <div className="kinetic-whyus-header">
          <div className="text-[#C6FF00] font-bold text-xs uppercase tracking-widest mb-2">
            THE ATHLETIC ADVANTAGE
          </div>
          <h2 className="kinetic-whyus-title">
            WHY <span className="text-[#C6FF00]">KINETIC</span> STANDS APART
          </h2>
        </div>

        <div className="kinetic-whyus-grid">
          {points.map((pt) => (
            <div key={pt.num} className="kinetic-whyus-card">
              <div className="kinetic-whyus-num">/ {pt.num}</div>
              <h3 className="kinetic-whyus-heading">{pt.title}</h3>
              <p className="kinetic-whyus-text">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
