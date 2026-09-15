export interface PlanDemo {
  id: string;
  slug: string;
  name: string;
  tierLabel: string;
  durationLabel: string;
  durationEnum: 'MONTHLY' | 'QUARTERLY' | 'HALF_YEARLY' | 'ANNUAL';
  priceInINR: number;
  popular?: boolean;
  description: string;
  features: string[];
}

export interface TrainingPillarDemo {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tag: string;
}

export interface ProgramDemo {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  image: string;
}

export interface FacilityDemo {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface ClubStandardDemo {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const CLUB_LOCATION_INFO = {
  clubName: "Alpha Fitness",
  locationName: "Amanora Club (Fern Hotel)",
  township: "Amanora Township",
  area: "Hadapsar",
  city: "Pune",
  state: "Maharashtra",
  pincode: "411028",
  fullAddress: "Amanora Club (Fern Hotel), Amanora Township, Hadapsar, Pune, Maharashtra 411028",
  phonePlaceholder: "+91 [PHONE_PLACEHOLDER]",
  emailPlaceholder: "info@alphafitness.in [DEMO]",
  operatingHours: {
    weekdays: "6:00 AM - 10:00 PM [DEMO]",
    sundays: "7:00 AM - 2:00 PM [DEMO]",
    notes: "Operating hours and class schedules are sample values subject to final client onboarding."
  }
};

export const DEMO_MEMBERSHIP_PLANS: PlanDemo[] = [
  {
    id: "plan-monthly-demo",
    slug: "monthly-pass",
    name: "Flex Monthly [DEMO]",
    tierLabel: "Basic",
    durationLabel: "1 Month",
    durationEnum: "MONTHLY",
    priceInINR: 3500,
    description: "Standard monthly membership access.",
    features: [
      "Gym Floor Access",
      "Locker & Changing Room Access",
      "General Fitness Orientation [DEMO]",
      "Standard Workout Access"
    ]
  },
  {
    id: "plan-quarterly-demo",
    slug: "quarterly-pro",
    name: "Quarterly Pro [DEMO]",
    tierLabel: "Standard",
    durationLabel: "3 Months",
    durationEnum: "QUARTERLY",
    priceInINR: 9500,
    popular: true,
    description: "Multi-month fitness pass with extended access.",
    features: [
      "Full Gym Floor Access",
      "Locker & Changing Room Facilities",
      "Group Training Sessions [DEMO]",
      "Fitness Assessment Session [DEMO]"
    ]
  },
  {
    id: "plan-annual-demo",
    slug: "annual-elite",
    name: "Annual Elite [DEMO]",
    tierLabel: "Premium",
    durationLabel: "12 Months",
    durationEnum: "ANNUAL",
    priceInINR: 28000,
    description: "Full year membership pass for continuous training.",
    features: [
      "365-Day Gym Floor Access",
      "Locker & Changing Room Amenities",
      "Periodic Progress Check-in [DEMO]",
      "Membership Freeze Option (up to 30 days) [DEMO]"
    ]
  }
];

export const DEMO_FACILITIES: FacilityDemo[] = [
  {
    id: "fac-training-area",
    title: "Training Floor",
    description: "Dedicated space for strength and resistance training exercises.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1000",
    tag: "Training Floor"
  },
  {
    id: "fac-cardio-area",
    title: "Cardio Space",
    description: "Treadmills, stationary bicycles, and cardiovascular equipment.",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1000",
    tag: "Cardio Space"
  },
  {
    id: "fac-freeweights-area",
    title: "Free Weights",
    description: "Dumbbells, weight benches, barbells, and plate racks.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
    tag: "Free Weights"
  },
  {
    id: "fac-functional-space",
    title: "Functional Space",
    description: "Open floor area for mobility exercises, core workouts, and stretching.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1000",
    tag: "Functional Space"
  },
  {
    id: "fac-club-amenities",
    title: "Club Amenities",
    description: "Locker rooms, showers, and member changing spaces at Amanora Club.",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=1000",
    tag: "Club Amenities"
  }
];

export const DEMO_PROGRAMS: ProgramDemo[] = [
  {
    id: "prog-strength",
    title: "Strength & Resistance",
    category: "Resistance",
    description: "Foundational strength training and resistance exercises using free weights and machines.",
    iconName: "Dumbbell",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "prog-cardio",
    title: "Cardiovascular Conditioning",
    category: "Endurance",
    description: "Aerobic workouts and interval training designed for stamina and cardiovascular health.",
    iconName: "Zap",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "prog-functional",
    title: "Functional Movement & Mobility",
    category: "Movement",
    description: "Dynamic exercises focusing on joint mobility, core stability, and functional movement patterns.",
    iconName: "Activity",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "prog-guidance",
    title: "Training Guidance & Support",
    category: "Orientation",
    description: "General coaching support, equipment orientation, and structured exercise planning.",
    iconName: "UserCheck",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000"
  }
];

export const DEMO_TRAINING_PILLARS: TrainingPillarDemo[] = [
  {
    id: "pillar-strength",
    title: "Strength & Resistance Training",
    category: "Training Focus",
    description: "Guidance on lifting fundamentals, barbell movement mechanics, and progressive resistance routines.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=800",
    tag: "Training Pillar"
  },
  {
    id: "pillar-conditioning",
    title: "Conditioning & Movement",
    category: "Training Focus",
    description: "Structured cardiovascular workouts, interval training, and mobility exercises for daily fitness.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800",
    tag: "Training Pillar"
  },
  {
    id: "pillar-orientation",
    title: "Member Orientation & Guidance",
    category: "Training Focus",
    description: "Initial equipment walkthrough, safety instructions, and fitness goal alignment for new members.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
    tag: "Training Pillar"
  }
];

export const DEMO_CLUB_STANDARDS: ClubStandardDemo[] = [
  {
    id: "standard-environment",
    title: "Clean & Maintained Training Facility",
    description: "Alpha Fitness prioritizes a clean, well-maintained, and spacious workout environment inside Amanora Club for all members.",
    category: "Facility Standard"
  },
  {
    id: "standard-digital",
    title: "Seamless Digital Membership Management",
    description: "Instant online plan enrollment, digital pass verification, and transparent membership records managed directly at our front desk.",
    category: "Member Service"
  }
];

export const DEMO_FAQS: FAQItem[] = [
  {
    question: "Where is Alpha Fitness located in Pune?",
    answer: "Alpha Fitness is located inside Amanora Club (Fern Hotel) in Amanora Township, Hadapsar, Pune, Maharashtra 411028."
  },
  {
    question: "How does the online membership checkout work?",
    answer: "Select a membership pass, provide your contact details, and complete the instant demo enrollment. A digital member pass is generated for verification."
  },
  {
    question: "How do I get started at the club after enrolling?",
    answer: "Present your digital member pass at the Amanora Club reception during club hours to complete onboarding and begin your workouts."
  },
  {
    question: "Are the membership fees and plans customizable for the gym owner?",
    answer: "Yes. All plans, rates, and duration options can be configured and updated by gym administrators through the management console."
  },
  {
    question: "Is online data and session verification secure?",
    answer: "Yes. All checkouts and administrative operations use server-side validation and secure session tokens."
  }
];
