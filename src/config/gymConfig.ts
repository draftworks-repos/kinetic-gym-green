/**
 * Centralized Gym Brand Configuration
 * All contact numbers, WhatsApp links, hours, facilities, programs, and trainer details.
 */

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  image: string;
  imageGradeClass: string;
  bio: string;
  certifications: string[];
}

export interface Program {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageGradeClass: string;
  intensity: "High" | "Very High" | "Custom";
  features: string[];
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageGradeClass: string;
  highlight: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  ctaLabel: string;
}

export const GYM_CONFIG = {
  brandName: "KINETIC",
  brandSuffix: "ATHLETIC CLUB",
  tagline: "WHERE POWER MEETS PRECISION",
  heroHeadline: "FORGE YOUR STRONGEST SELF",
  heroSubheadline:
    "A high-intensity sanctuary engineered for serious lifters, functional athletes, and anyone unwilling to accept average. Raw iron, elite coaching, and zero excuses.",

  // Real functional contact actions
  phoneDisplay: "+91 89596 90529",
  phoneNumber: "+918959690529",
  phoneTelLink: "tel:+918959690529",

  whatsappNumber: "918959690529",
  getWhatsAppLink: (customMessage?: string) => {
    const text =
      customMessage ||
      "Hi KINETIC Gym, I would like to enquire about membership, day passes, and training programs.";
    return `https://wa.me/918959690529?text=${encodeURIComponent(text)}`;
  },

  location: "Apex Sports Quarter, Sector 48, Metro Station Road",
  city: "New Delhi, India",
  hours: "Open 24/7 (365 Days)",
  staffedHours: "Coaches On-Floor: 05:30 AM – 11:00 PM Daily",
  email: "hello@draftworks.in",

  stats: [
    { label: "SQUARE FEET", value: "14,000+" },
    { label: "OLYMPIC PLATFORMS", value: "8" },
    { label: "ACTIVE ATHLETES", value: "2,400+" },
    { label: "CERTIFIED COACHES", value: "16" },
  ],

  tickerItems: [
    "24/7 BIOMETRIC GYM ACCESS",
    "OLYMPIC WEIGHTLIFTING SUITE",
    "ZONE 2 & HIIT CARDIO LAB",
    "CERTIFIED CSCS COACHING",
    "POWERLIFTING RIGS & MONOLIFTS",
    "FUNCTIONAL TURF TRACK",
    "COLD PLUNGE & INFRARED SAUNA",
    "FREE TRIAL PASS AVAILABLE",
  ],

  programs: [
    {
      id: "strength",
      title: "STRENGTH & HYPERTROPHY",
      tagline: "Barbell Mastery & Progressive Overload",
      description:
        "Engineered squat, bench, and deadlift programming backed by biomechanics to safely build dense muscle and peak power output.",
      image: "/assets/aistudio/img-4_1416eeb5.png",
      imageGradeClass: "img-grade-squat",
      intensity: "High",
      features: [
        "Dedicated Eleiko competition bars & calibrated plates",
        "Bi-weekly form analysis & 1RM percentage calibration",
        "Access to custom hypertrophy programming matrices",
      ],
    },
    {
      id: "conditioning",
      title: "HIGH-OUTPUT CONDITIONING",
      tagline: "Engine Building & Anaerobic Capacity",
      description:
        "Relentless sled work, assault bikes, skiergs, and rowers designed to build an unbreakable work capacity and shred body fat.",
      image: "/assets/aistudio/img-12_678170d2.png",
      imageGradeClass: "img-grade-sled",
      intensity: "Very High",
      features: [
        "Heart rate variability telemetry tracking",
        "Prowler sled lanes on 30m cushioned turf",
        "Metabolic conditioning intervals tailored to your threshold",
      ],
    },
    {
      id: "functional",
      title: "FUNCTIONAL ATHLETICS",
      tagline: "Explosive Power & Multi-Planar Mobility",
      description:
        "Kettlebell flows, tire flips, box jumps, and heavy sandbag carries that translate raw strength into real-world agility.",
      image: "/assets/aistudio/img-8_f8305d35.png",
      imageGradeClass: "img-grade-tire",
      intensity: "High",
      features: [
        "Heavy rogue tires, Bulgarian bags & slam balls",
        "Dynamic joint mobility protocols before every session",
        "Small squad training capped at 6 athletes per coach",
      ],
    },
    {
      id: "endurance",
      title: "CARDIO & ROWING LAB",
      tagline: "Pacing, Lactate Clearance & Stamina",
      description:
        "Precision Concept2 rowers, SkiErgs, and curved treadmills to develop elite aerobic foundation without joint degradation.",
      image: "/assets/aistudio/img-9_d2dfa0fe.png",
      imageGradeClass: "img-grade-row",
      intensity: "High",
      features: [
        "Individual monitor telemetry synchronization",
        "Targeted 500m split pace coaching",
        "Low-impact high-calorie burn protocols",
      ],
    },
    {
      id: "mobility",
      title: "RECOVERY & MOBILITY",
      tagline: "Joint Resilience & Structural Integrity",
      description:
        "Dedicated yoga for lifters, thoracic spine opening, and fascia release to ensure injury-free consistency year-round.",
      image: "/assets/aistudio/img-2_39c4d728.png",
      imageGradeClass: "img-grade-yoga",
      intensity: "Custom",
      features: [
        "Theragun percussion therapy stations",
        "Dedicated warm-up and foam rolling stretch deck",
        "Breathwork and autonomic nervous system down-regulation",
      ],
    },
    {
      id: "group",
      title: "SQUAD WARFARE (BOOTCAMP)",
      tagline: "Camaraderie, Grit & Team Performance",
      description:
        "Chalk dust in the air, heavy bass, and high-energy squad circuits where every teammate pushes you past your perceived limit.",
      image: "/assets/aistudio/img-10_4033c9b9.png",
      imageGradeClass: "img-grade-squad",
      intensity: "Very High",
      features: [
        "Team relays, synchronized kettlebells & battle ropes",
        "Live pulse coaching with athletic music curation",
        "High energy culture where everyone is welcomed and challenged",
      ],
    },
  ] as Program[],

  trainers: [
    {
      id: "marcus-vance",
      name: "MARCUS VANCE",
      role: "Head Strength & Conditioning Director",
      specialty: "Powerlifting & Biomechanical Optimization",
      experience: "12+ Years Coaching Olympic & Competitive Lifters",
      image: "/assets/aistudio/img-15_3eb8db58.png",
      imageGradeClass: "img-grade-trainer-marcus",
      bio: "Former collegiate strength coach specializing in bar speed analysis, CNS management, and breaking plateaus with scientific precision.",
      certifications: [
        "CSCS (NSCA)",
        "USAW Level 2 Senior Coach",
        "FMS Level 2",
      ],
    },
    {
      id: "devon-clarke",
      name: "DEVON CLARKE",
      role: "Head of Functional Performance",
      specialty: "Metabolic Conditioning & Hypertrophy",
      experience: "9+ Years Professional Athlete Training",
      image: "/assets/aistudio/img-16_8ad32f46.png",
      imageGradeClass: "img-grade-trainer-devon",
      bio: "Known for high-energy coaching that pairs uncompromising standards with positive reinforcement. Specializes in rapid body recomposition.",
      certifications: [
        "NASM-PES",
        "CrossFit Level 3 Trainer",
        "EXOS Performance Specialist",
      ],
    },
    {
      id: "kane-reynolds",
      name: "KANE REYNOLDS",
      role: "Master Barbell & Movement Coach",
      specialty: "Heavy Squat/Deadlift Mechanics & Rehab",
      experience: "8+ Years Coaching",
      image: "/assets/aistudio/img-3_5c1b82cf.png",
      imageGradeClass: "img-grade-trainer-kane",
      bio: "Dedicated to teaching bulletproof lifting mechanics that prevent lower-back pain while continuously adding kilos to your barbell.",
      certifications: [
        "Starting Strength Coach",
        "ISSA Master Trainer",
        "Precision Nutrition L1",
      ],
    },
  ] as Trainer[],

  facilities: [
    {
      id: "power-cages",
      title: "8 COMMERCIAL POWER CAGES",
      subtitle: "Heavy Duty Structural Steel Racks",
      description:
        "Equipped with safety straps, band pegs, pull-up multigrips, and competition-spec knurled bars for uninterrupted heavy work.",
      image: "/assets/aistudio/img-14_fd3a03a6.png",
      imageGradeClass: "img-grade-cages",
      highlight: "Zero wait times for squat racks",
    },
    {
      id: "dumbbell-arsenal",
      title: "DUMBBELL ARSENAL (2.5KG – 60KG)",
      subtitle: "Custom Urethane Solid Steel Pairs",
      description:
        "Three full racks featuring 2.5kg incremental pairs, stainless knurled handles, and heavy incline/flat benches.",
      image: "/assets/aistudio/img-1_ac68cb68.png",
      imageGradeClass: "img-grade-dumbbells",
      highlight: "Dual pairs of all primary working weights",
    },
    {
      id: "turf-track",
      title: "30-METER INDOOR TURF TRACK",
      subtitle: "High-Traction Prowler & Sled Arena",
      description:
        "Shock-absorbent high-density turf engineered for heavy sled drives, farmer walks, sprint starts, and agility ladders.",
      image: "/assets/aistudio/img-12_678170d2.png",
      imageGradeClass: "img-grade-sled",
      highlight: "Loaded prowlers & dragging harnesses ready",
    },
    {
      id: "calibrated-plates",
      title: "CALIBRATED CAST IRON & BUMPERS",
      subtitle: "IWF Spec Competition Plates",
      description:
        "Dead-bounce high-density virgin rubber bumper plates along with thin-profile calibrated steel plates for minimal barbell flex.",
      image: "/assets/aistudio/img-7_4b84976b.png",
      imageGradeClass: "img-grade-plates",
      highlight: "Chalk bowls & deadlift jacks on every platform",
    },
  ] as Facility[],

  pricingPlans: [
    {
      id: "core",
      name: "CORE ACCESS",
      duration: "Flexible Monthly",
      price: "₹750",
      period: "/ month",
      features: [
        "Full 24/7 biometric gym floor access",
        "Unlimited free weight & rack zone access",
        "Functional turf & conditioning suite",
        "Locker room & private steam showers",
        "Complimentary physical mobility assessment",
      ],
      ctaLabel: "Enquire for Core Pass",
    },
    {
      id: "performance",
      name: "PERFORMANCE ATHLETE",
      duration: "Most Popular",
      price: "₹1,000",
      period: "/ month",
      popular: true,
      features: [
        "All Core Access benefits included",
        "Unlimited Squad Bootcamp & HIIT lab classes",
        "Custom 6-week progressive training block",
        "Weekly coach check-in & form reviews",
        "Nutritional macro framework & guidance",
        "2 Guest passes per month for workout partners",
      ],
      ctaLabel: "Claim Performance Pass",
    },
    {
      id: "elite",
      name: "ELITE 1-ON-1 COACHING",
      duration: "Dedicated Mentorship",
      price: "₹1,500",
      period: "/ month",
      features: [
        "All Performance & Core benefits included",
        "Dedicated 1-on-1 private coaching sessions",
        "Individualized periodization & 1RM programming",
        "Direct WhatsApp coach communication line",
        "Monthly body composition DEXA-style scan",
        "VIP locker & private towel service",
      ],
      ctaLabel: "Apply for 1-on-1 Coaching",
    },
  ] as PricingPlan[],
};
