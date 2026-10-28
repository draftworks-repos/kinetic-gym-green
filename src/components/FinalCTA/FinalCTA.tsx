import React from "react";
import { MessageSquare, Phone, ArrowUpRight, Zap } from "lucide-react";
import { GYM_CONFIG } from "../../config/gymConfig";
import "./FinalCTA.css";

export const FinalCTA: React.FC = () => {
  return (
    <section className="kinetic-final-cta" aria-label="Call to Action">
      <div className="kinetic-final-cta-container">
        <div className="kinetic-final-cta-badge">
          <Zap size={14} aria-hidden="true" />
          <span>START TODAY · ZERO REGISTRATION FEE</span>
        </div>

        <h2 className="kinetic-final-cta-title">
          STOP WAITING FOR MONDAY. <br />
          <span className="text-[#C6FF00]">CLAIM YOUR PASS NOW.</span>
        </h2>

        <p className="kinetic-final-cta-desc">
          Drop by for a high-intensity session, tour our Olympic lifting suites,
          and discuss your fitness goals with our certified athletic directors.
        </p>

        <div className="kinetic-final-cta-actions">
          <a
            href={GYM_CONFIG.getWhatsAppLink(
              "Hi KINETIC Gym! I want to claim my Free Guest Pass and train today. What are the best hours to visit?",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="kinetic-final-btn-lime"
            aria-label="Claim Free Guest Pass on WhatsApp"
          >
            <MessageSquare size={22} aria-hidden="true" />
            <span>CLAIM FREE GUEST PASS</span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>

          <a
            href={GYM_CONFIG.phoneTelLink}
            className="kinetic-final-btn-phone"
            aria-label={`Call KINETIC Gym at ${GYM_CONFIG.phoneDisplay}`}
          >
            <Phone size={20} className="text-[#C6FF00]" aria-hidden="true" />
            <span>CALL US: {GYM_CONFIG.phoneDisplay}</span>
          </a>
        </div>

        <div className="kinetic-final-meta">
          <span>✓ Instant Access Activation</span>
          <span>✓ 100% Free Trial With No Obligation</span>
          <span>✓ CSCS Coach Form Evaluation Included</span>
        </div>
      </div>
    </section>
  );
};
