import React from "react";
import { Dumbbell } from "lucide-react";
import { GYM_CONFIG } from "../../config/gymConfig";
import "./Ticker.css";

export const Ticker: React.FC = () => {
  const items = [...GYM_CONFIG.tickerItems, ...GYM_CONFIG.tickerItems];

  return (
    <section
      className="kinetic-ticker-section"
      aria-label="Gym Highlights Ticker"
    >
      <div className="ticker-track-wrap">
        <div className="ticker-track">
          {items.map((text, idx) => (
            <div key={idx} className="ticker-item">
              <span>{text}</span>
              <span className="ticker-icon" aria-hidden="true">
                <Dumbbell size={16} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
