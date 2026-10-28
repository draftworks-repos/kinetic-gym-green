import React from 'react';
import { Hero } from '../components/Hero/Hero';
import { Ticker } from '../components/Ticker/Ticker';
import { Statement } from '../components/Statement/Statement';
import { Programs } from '../components/Programs/Programs';
import { WhyUs } from '../components/WhyUs/WhyUs';
import { FacilityShowcase } from '../components/FacilityShowcase/FacilityShowcase';
import { Trainers } from '../components/Trainers/Trainers';
import { BarbellCalculator } from '../components/BarbellCalculator/BarbellCalculator';
import { MembershipTiers } from '../components/MembershipTiers/MembershipTiers';
import { FinalCTA } from '../components/FinalCTA/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Ticker />
      <Statement />
      <Programs />
      <WhyUs />
      <FacilityShowcase />
      <BarbellCalculator />
      <Trainers />
      <MembershipTiers />
      <FinalCTA />
    </main>
  );
};
