import React, { useState } from "react";
import { Check, MessageSquare, ArrowUpRight } from "lucide-react";
import { GYM_CONFIG } from "../../config/gymConfig";
import "./MembershipTiers.css";

export const MembershipTiers: React.FC = () => {
  const [cycle, setCycle] = useState<"monthly" | "packages">("monthly");

  const pricingData: Record<
    string,
    { monthlyPrice: number; packagePrice: number }
  > = {
    core: { monthlyPrice: 750, packagePrice: 1800 },
    performance: { monthlyPrice: 1000, packagePrice: 2400 },
    elite: { monthlyPrice: 1500, packagePrice: 3600 },
  };

  return (
    <section
      className="kinetic-pricing"
      id="pricing"
      aria-label="Membership Plans"
    >
      <div className="kinetic-pricing-container">
        <div className="kinetic-pricing-header">
          <div className="kinetic-pricing-eyebrow">
            TRANSPARENT PASS STRUCTURE
          </div>
          <h2 className="kinetic-pricing-title">
            CHOOSE YOUR <span className="text-[#C6FF00]">POWER PLAN</span>
          </h2>
          <p className="kinetic-pricing-desc">
            No locked contracts, no hidden registration fees. Every tier gives
            you full access to our world-class iron and athletic community.
          </p>

          {/* Billing Cycle / Packages Toggle */}
          <div
            className="kinetic-cycle-toggle"
            role="radiogroup"
            aria-label="Billing Option"
          >
            <button
              type="button"
              className={`kinetic-cycle-btn ${cycle === "monthly" ? "active" : ""}`}
              onClick={() => setCycle("monthly")}
              role="radio"
              aria-checked={cycle === "monthly"}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`kinetic-cycle-btn ${cycle === "packages" ? "active" : ""}`}
              onClick={() => setCycle("packages")}
              role="radio"
              aria-checked={cycle === "packages"}
            >
              <span>Packages</span>
              <span className="kinetic-cycle-save-badge">SAVE 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="kinetic-pricing-grid">
          {GYM_CONFIG.pricingPlans.map((plan) => {
            const data = pricingData[plan.id] || {
              monthlyPrice: 750,
              packagePrice: 1800,
            };

            const displayedPrice =
              cycle === "monthly"
                ? `₹${data.monthlyPrice.toLocaleString("en-IN")}`
                : `₹${data.packagePrice.toLocaleString("en-IN")}`;

            const displayedPeriod =
              cycle === "monthly" ? "/ month" : "/ 3 months";
            const displayedDuration =
              cycle === "monthly"
                ? plan.duration
                : "3-Month Package · Save 20%";

            return (
              <div
                key={plan.id}
                className={`kinetic-price-card ${plan.popular ? "popular" : ""}`}
              >
                {plan.popular && (
                  <div className="kinetic-card-badge">RECOMMENDED</div>
                )}

                <div>
                  <h3 className="kinetic-price-plan-name">{plan.name}</h3>
                  <div className="kinetic-price-plan-duration">
                    {displayedDuration}
                  </div>

                  <div className="kinetic-price-val-row">
                    <span className="kinetic-price-val">{displayedPrice}</span>
                    <span className="kinetic-price-period">
                      {displayedPeriod}
                    </span>
                  </div>

                  <ul className="kinetic-price-features">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="kinetic-price-feat-item">
                        <Check
                          size={16}
                          className="kinetic-price-feat-icon"
                          aria-hidden="true"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct WhatsApp CTA with prefilled plan info */}
                <a
                  href={GYM_CONFIG.getWhatsAppLink(
                    `Hi KINETIC Gym! I want to enroll in the ${plan.name} (${
                      cycle === "packages" ? "3-Month Package" : "Monthly Pass"
                    }). Please share registration steps!`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kinetic-price-cta-btn"
                  aria-label={`Enquire for ${plan.name} on WhatsApp`}
                >
                  <MessageSquare size={18} aria-hidden="true" />
                  <span>{plan.ctaLabel}</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
