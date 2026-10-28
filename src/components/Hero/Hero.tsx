import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, MessageSquare, Phone } from 'lucide-react';
import { GYM_CONFIG } from '../../config/gymConfig';
import './Hero.css';

const STAT_COUNT_DURATION = 3000;

const AnimatedStatValue: React.FC<{ value: string; className: string }> = ({
  value,
  className,
}) => {
  const match = value.match(/^([\d,]+)(.*)$/);
  const target = match ? Number(match[1].replace(/,/g, '')) : null;
  const suffix = match?.[2] ?? '';
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target === null || !Number.isFinite(target)) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return;
    }

    let animationFrame = 0;
    let startTime: number | null = null;

    const animateCount = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / STAT_COUNT_DURATION, 1);
      setCount(Math.round(target * progress));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animateCount);
      }
    };

    animationFrame = window.requestAnimationFrame(animateCount);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [target]);

  const displayValue =
    target === null
      ? value
      : `${new Intl.NumberFormat('en-US').format(count)}${suffix}`;

  return <span className={className}>{displayValue}</span>;
};

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [isInViewport, setIsInViewport] = useState(true);

  // Light mouse parallax for desktop headlines
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current || !window.matchMedia('(pointer: fine)').matches) return;
    const xRatio = e.clientX / window.innerWidth - 0.5;
    heroRef.current.style.setProperty('--parallax-x', xRatio.toFixed(3));
  };

  const handleMouseLeave = () => {
    if (!heroRef.current) return;
    heroRef.current.style.setProperty('--parallax-x', '0');
  };

  // Pause loop when browser tab is hidden (Page Visibility API)
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Pause loop when hero is off-screen (IntersectionObserver)
  useEffect(() => {
    const el = heroRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInViewport(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const shouldPlay = isTabVisible && isInViewport;

  return (
    <section
      ref={heroRef}
      className="kinetic-hero-poster"
      aria-label="KINETIC Athletic Club Hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ['--pose-play-state' as any]: shouldPlay ? 'running' : 'paused',
      }}
    >
      {/* Ambient Radial Lime Glow & Faint White Haze */}
      <div className="hero-ambient-wrap" aria-hidden="true">
        <div className="hero-glow-lime" />
        <div className="hero-haze-white" />
      </div>

      {/* ====================================================================
          DESKTOP POSTER STAGE (Athlete in center, headlines interacting)
          ==================================================================== */}
      <div className="hero-poster-stage">
        {/* Layer 1 & Layer 3: Giant Centered Headlines */}
        <div className="hero-headline-wrap">
          {/* Layer 1: "FORGE YOUR" sits behind the character (head overlaps it) */}
          <div className="hero-headline-line hero-headline-line-1 hero-enter-line1 hero-parallax-line1">
            FORGE YOUR
          </div>

          {/* Layer 3: "STRONGEST SELF." sits in front of the chest */}
          <div className="hero-headline-line hero-headline-line-2 hero-enter-line2 hero-parallax-line2">
            STRONGEST SELF.
          </div>
        </div>

        {/* Layer 2: Centered Athlete Character (~86% height, 14% gap above head) */}
        <div className="hero-character-container hero-enter-char" aria-hidden="true">
          {/* Pose 1: Shirt On (WebP, preloaded, 800x960) */}
          <img
            src="/assets/hero_athlete_shirt_on.webp"
            alt="KINETIC athlete with black shirt"
            width={800}
            height={1028}
            className="hero-character-img hero-img-shirt"
            loading="eager"
            fetchPriority="high"
          />

          {/* Pose 2: Shirtless (WebP, aligned head center & top, 800x960) */}
          <img
            src="/assets/hero_athlete_shirtless.webp"
            alt="KINETIC athlete shirtless showing peak physique"
            width={800}
            height={1028}
            className="hero-character-img hero-img-shirtless"
            loading="eager"
          />
        </div>

        {/* Layer 4 & 5: Bottom Overlay Dock for Desktop (Left copy/CTAs & Right stats) */}
        <div className="hero-desktop-dock">
          {/* Bottom-Left: Status dot, paragraph, two buttons */}
          <div className="hero-dock-left">
            <div className="hero-status-tag">
              <span className="hero-status-dot" aria-hidden="true" />
              <span>24/7 BIOMETRIC ATHLETIC FACILITY</span>
            </div>

            <p className="hero-copy-paragraph">
              A high-intensity sanctuary for serious lifters, functional athletes, and anyone
              unwilling to accept average. Raw iron, elite coaching, zero excuses.
            </p>

            <div className="hero-button-group">
              <a
                href={GYM_CONFIG.getWhatsAppLink(
                  'Hi KINETIC Gym! I want to claim my Free Day Pass and check out the training floor.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-lime"
                aria-label="Claim free day pass on WhatsApp"
              >
                <MessageSquare size={18} aria-hidden="true" />
                <span>Book a tour</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>

              <a
                href={GYM_CONFIG.phoneTelLink}
                className="hero-btn-outline"
                aria-label={`Call ${GYM_CONFIG.phoneDisplay}`}
              >
                <Phone size={16} className="text-[#C6FF00]" aria-hidden="true" />
                <span>Call {GYM_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Bottom-Right: 2x2 Stats Grid */}
          <div className="hero-dock-right">
            <div className="hero-stats-grid" aria-label="Gym Key Statistics">
              {GYM_CONFIG.stats.map((stat, idx) => (
                <div key={idx} className="hero-stat-cell">
                  <AnimatedStatValue value={stat.value} className="hero-stat-number" />
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          TABLET & MOBILE STACK (Screen width < 1024px)
          CRITICAL: Headline positioned below chin, face never covered
          ==================================================================== */}
      <div className="kinetic-hero-mobile-stack">
        {/* Character Stage with Headlines: Line 1 behind character, Line 2 in front */}
        <div className="hero-mobile-visual-stage">
          {/* Layer 1: Behind character */}
          <div className="hero-mobile-line-1">FORGE YOUR</div>

          {/* Layer 2: Character */}
          <div className="hero-mobile-character-wrap" aria-hidden="true">
            <img
              src="/assets/hero_athlete_shirt_on.webp"
              alt="KINETIC athlete"
              width={800}
              height={1028}
              className="hero-mobile-character-img hero-img-shirt"
              loading="eager"
            />
            <img
              src="/assets/hero_athlete_shirtless.webp"
              alt="KINETIC athlete shirtless"
              width={800}
              height={1028}
              className="hero-mobile-character-img hero-img-shirtless"
              loading="eager"
            />
          </div>

          {/* Layer 3: In front of character */}
          <div className="hero-mobile-line-2">STRONGEST SELF.</div>
        </div>

        {/* Status tag placed right above description */}
        <div className="hero-mobile-tag">
          <span className="hero-status-dot" aria-hidden="true" />
          <span>24/7 BIOMETRIC ATHLETIC FACILITY</span>
        </div>

        {/* Copy */}
        <p className="hero-mobile-copy">
          A high-intensity sanctuary for serious lifters, functional athletes, and anyone
          unwilling to accept average. Raw iron, elite coaching, zero excuses.
        </p>

        {/* Full-width action buttons */}
        <div className="hero-mobile-actions">
          <a
            href={GYM_CONFIG.getWhatsAppLink(
              'Hi KINETIC Gym! I want to claim my Free Day Pass and check out the training floor.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-lime"
            aria-label="Claim free day pass on WhatsApp"
          >
            <MessageSquare size={18} aria-hidden="true" />
            <span>Book a tour</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>

          <a
            href={GYM_CONFIG.phoneTelLink}
            className="hero-btn-outline"
            aria-label={`Call ${GYM_CONFIG.phoneDisplay}`}
          >
            <Phone size={16} className="text-[#C6FF00]" aria-hidden="true" />
            <span>Call {GYM_CONFIG.phoneDisplay}</span>
          </a>
        </div>

        {/* Mobile 4 stats in a row / 2x2 grid with thin top border */}
        <div className="hero-mobile-stats" aria-label="Gym Key Statistics">
          {GYM_CONFIG.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <AnimatedStatValue value={stat.value} className="hero-mobile-stat-val" />
              <span className="hero-mobile-stat-lbl">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
