import { withBase } from "../utils/url";

export interface NavItem {
  label: string;
  href: string;
  isPrimaryAction?: boolean;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  currentSchoolYear: string;
  description: string;
  history: string;
  mission: string;
  fiveSelves: string[];
  accreditation: {
    naeyc: string;
    naeycUrl?: string;
    lacppns: string;
    lacppnsUrl?: string;
    statusNote: string;
  };
  contact: {
    address: string;
    phone: string;
    email: string;
    hours: string;
    mapUrl: string;
  };
  navigation: {
    main: NavItem[];
    footer: NavItem[];
  };
}

export const SITE_CONFIG: SiteConfig = {
  name: "University Parents Nursery School",
  shortName: "UPNS",
  tagline: "A cooperative school with a big community.",
  currentSchoolYear: "2026–2027",
  description:
    "Since 1966, UPNS has been a place where children learn through play and parents take part in school life. Our families come from UCLA and neighborhoods across Los Angeles to learn, help, and grow together.",
  history:
    "UPNS began in 1966, when parents living in UCLA Family Student Housing came together to create a nursery school they could help shape and run. The school grew over the years and moved to its current Sepulveda Boulevard location in 1996.",
  mission:
    "Our mission is to provide a warm and supportive learning environment that fosters physical, intellectual, social, and emotional growth in children aged 18 months to 5 years. We recognize the significance of parental involvement in a child's learning journey and strive to build a bridge between home and school.",
  fiveSelves: [
    "Social Self — learning to make friends, share ideas, and care about others",
    "Emotional Self — recognizing feelings and growing more confident expressing them",
    "Physical Self — building coordination and body confidence through active, hands-on play",
    "Creative Self — using art, music, stories, and pretend play to bring ideas to life",
    "Cognitive Self — asking questions, testing ideas, and figuring things out through play",
  ],
  accreditation: {
    naeyc: "Accredited by NAEYC",
    naeycUrl: "https://www.naeyc.org/",
    lacppns: "Member of LACPPNS",
    lacppnsUrl: "https://lacppns.org/",
    statusNote: "Accredited member in good standing",
  },
  contact: {
    address: "3233 S. Sepulveda Blvd. Suite 200, Los Angeles, CA 90034-4205",
    phone: "(310) 397-2735",
    email: "upns@ucla.edu",
    hours: "Monday – Friday, 8:00 AM – 5:00 PM",
    mapUrl: "https://maps.google.com/?q=3233+S+Sepulveda+Blvd+Suite+200+Los+Angeles+CA+90034",
  },
  navigation: {
    main: [
      { label: "About", href: withBase("/about/") },
      { label: "Classrooms", href: withBase("/classrooms/") },
      { label: "Co-op Life", href: withBase("/co-op-life/") },
      { label: "Traditions", href: withBase("/traditions/") },
      { label: "Visit Us", href: withBase("/visit/") },
      { label: "Apply", href: withBase("/apply/"), isPrimaryAction: true },
    ],
    footer: [
      { label: "About Us", href: withBase("/about/") },
      { label: "Our Classrooms", href: withBase("/classrooms/") },
      { label: "Co-op Life", href: withBase("/co-op-life/") },
      { label: "School Traditions", href: withBase("/traditions/") },
      { label: "Resources & Policies", href: withBase("/resources/") },
      { label: "Visit & Contact", href: withBase("/visit/") },
      { label: "Apply & Tuition", href: withBase("/apply/") },
    ],
  },
};
