import React, { useState } from "react";
import { Dumbbell, ArrowUpRight } from "lucide-react";
import { calculateBarbellPlates } from "../../utils/gymCalculators";
import { GYM_CONFIG } from "../../config/gymConfig";
import "./BarbellCalculator.css";

export const BarbellCalculator: React.FC = () => {
  const [targetWeight, setTargetWeight] = useState<number>(100);

  const presets = [60, 80, 100, 140, 180, 220];
  const breakdown = calculateBarbellPlates(targetWeight, 20);

  const getPlateClass = (weight: number) => {
    if (weight >= 25) return "plate-disc plate-disc-25";
    if (weight >= 20) return "plate-disc plate-disc-20";
    if (weight >= 15) return "plate-disc plate-disc-15";
    if (weight >= 10) return "plate-disc plate-disc-10";
    if (weight >= 5) return "plate-disc plate-disc-5";
    return "plate-disc plate-disc-small";
  };

  return (
    <section
      className="kinetic-calculator"
      aria-label="Interactive Barbell Plate Loader"
    >
      <div className="kinetic-calc-container">
        <div className="kinetic-calc-card">
          {/* Controls */}
          <div>
            <div className="kinetic-calc-eyebrow">ELEIKO PLATFORM TOOL</div>
            <h3 className="kinetic-calc-title">
              BARBELL <span className="text-[#C6FF00]">PLATE LOADER</span>
            </h3>
            <p className="kinetic-calc-desc">
              Calculate exact IWF competition plate configuration per side on
              standard 20kg Olympic barbells.
            </p>

            <div
              className="kinetic-preset-weights"
              role="group"
              aria-label="Quick preset weights"
            >
              {presets.map((wt) => (
                <button
                  key={wt}
                  type="button"
                  onClick={() => setTargetWeight(wt)}
                  className={`kinetic-preset-btn ${targetWeight === wt ? "active" : ""}`}
                >
                  {wt} KG
                </button>
              ))}
            </div>

            <div className="kinetic-input-group">
              <label
                htmlFor="targetWeightInput"
                className="text-sm font-semibold text-gray-300"
              >
                Custom Weight (KG):
              </label>
              <input
                id="targetWeightInput"
                type="number"
                min="20"
                max="400"
                step="2.5"
                value={targetWeight}
                onChange={(e) =>
                  setTargetWeight(Math.max(20, Number(e.target.value) || 20))
                }
                className="kinetic-weight-input"
              />
            </div>

            <a
              href={GYM_CONFIG.getWhatsAppLink(
                `Hi KINETIC Gym! I want to test my ${targetWeight}kg lift on your competition platforms. How do I claim my day pass?`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C6FF00] hover:underline font-display text-sm  uppercase mt-2"
            >
              <span>Test This Lift on Our Eleiko Platforms</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>

          {/* Visual Barbell Loading */}
          <div className="kinetic-barbell-visual">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#A3A3A3] uppercase mb-1">
              <Dumbbell
                size={14}
                className="text-[#C6FF00]"
                aria-hidden="true"
              />
              <span>Olympic Bar Sleeve Diagram</span>
            </div>

            <div className="kinetic-barbell-sleeve">
              <div className="kinetic-bar-shaft" />
              <div className="kinetic-bar-collar" />

              <div className="kinetic-plates-display">
                {breakdown.platesPerSide.length === 0 ? (
                  <span className="text-xs text-gray-400 font-semibold">
                    Bare Bar (20kg)
                  </span>
                ) : (
                  breakdown.platesPerSide.map((item, idx) => (
                    <React.Fragment key={idx}>
                      {Array.from({ length: item.count }).map((_, cIdx) => (
                        <div
                          key={`${idx}-${cIdx}`}
                          className={getPlateClass(item.weight)}
                          title={`${item.weight}kg plate`}
                        >
                          <span className="text-[10px] transform -rotate-90">
                            {item.weight}
                          </span>
                        </div>
                      ))}
                    </React.Fragment>
                  ))
                )}
              </div>
            </div>

            <div className="kinetic-calc-stats">
              <div className="kinetic-calc-stat-item">
                <div className="kinetic-calc-stat-val">{targetWeight} KG</div>
                <div className="kinetic-calc-stat-lbl">Total Bar Load</div>
              </div>
              <div className="kinetic-calc-stat-item">
                <div className="kinetic-calc-stat-val">
                  {breakdown.weightPerSide} KG
                </div>
                <div className="kinetic-calc-stat-lbl">Per Side</div>
              </div>
              <div className="kinetic-calc-stat-item">
                <div className="kinetic-calc-stat-val">20 KG</div>
                <div className="kinetic-calc-stat-lbl">Eleiko Bar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
