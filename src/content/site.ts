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
  tagline: "A little school with a big community.",
  currentSchoolYear: "2026–2027",
  description:
    "A parent-participation cooperative preschool in Los Angeles where children learn through play and families become part of a caring neighborhood school community.",
  history:
    "UPNS has a rich history dating back to 1966 when a group of families residing in UCLA Family Student Housing recognized the need for a nursery school. Over the decades, we have evolved and grown, moving to our current location on Sepulveda Boulevard in 1996.",
  mission:
    "Our mission is to provide a warm and supportive learning environment that fosters physical, intellectual, social, and emotional growth in children aged 18 months to 5 years. We recognize the significance of parental involvement in a child's learning journey and strive to build a bridge between home and school.",
  fiveSelves: [
    "Social Self — building empathy, friendship, and collaboration",
    "Emotional Self — developing self-confidence and emotional resilience",
    "Physical Self — strengthening gross and fine motor skills through active play",
    "Creative Self — expressing imagination through open-ended art and storytelling",
    "Cognitive Self — discovering curiosity, problem-solving, and a love of learning",
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
      { label: "About", href: "/about/" },
      { label: "Classrooms", href: "/classrooms/" },
      { label: "Co-op Life", href: "/co-op-life/" },
      { label: "Traditions", href: "/traditions/" },
      { label: "Visit Us", href: "/visit/" },
      { label: "Apply", href: "/apply/", isPrimaryAction: true },
    ],
    footer: [
      { label: "About Us", href: "/about/" },
      { label: "Our Classrooms", href: "/classrooms/" },
      { label: "Co-op Life", href: "/co-op-life/" },
      { label: "School Traditions", href: "/traditions/" },
      { label: "Resources & Policies", href: "/resources/" },
      { label: "Visit & Contact", href: "/visit/" },
      { label: "Apply & Tuition", href: "/apply/" },
    ],
  },
};
