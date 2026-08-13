export interface TuitionItem {
  program: string;
  schedule: string;
  monthlyTuition: string;
  notes: string;
}

export interface EnrollmentStep {
  stepNumber: number;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const ENROLLMENT_DATA = {
  eligibility: {
    ages: "18 months to 5 years",
    whoCanAttend:
      "UPNS proudly serves families of UCLA students, staff, and faculty as well as non-UCLA affiliated families from the general public.",
    pottyTraining:
      "Potty training is NOT required to enroll in the Kitten Room (18 months to 2.5 years old). Our teachers partner with you when your child is ready. Potty training is REQUIRED for Kangaroo and Dolphin rooms.",
  },
  fees: {
    applicationFee: "$50.00 (non-refundable)",
    applicationFeeMethods:
      "Checks, cash, or electronically via Zelle using our email address: upns@ucla.edu",
    enrollmentFee: "$500.00 one-time non-refundable ($250 Registration + $250 Security Deposit)",
    securityDepositNote: "The $250 Security Deposit is credited toward your child's first month's tuition.",
    scheduleChangeFee: "$25.00 one-time fee per schedule change",
  },
  tuitionSchedule: [
    {
      program: "Morning Half-Day Program",
      schedule: "Monday – Friday, 8:00 AM – 12:30 PM",
      monthlyTuition: "Contact office for current rates",
      notes: "Includes morning snack and lunchtime supervision. Co-op workday required once per month.",
    },
    {
      program: "Full-Day Program",
      schedule: "Monday – Friday, 8:00 AM – 5:00 PM",
      monthlyTuition: "Contact office for current rates",
      notes: "Includes morning snack, lunch supervision, naptime, and afternoon snack. Co-op workday required once per month.",
    },
  ] as TuitionItem[],
  steps: [
    {
      stepNumber: 1,
      title: "Schedule a Campus Tour",
      description:
        "Visit our school to see the classrooms in action, meet our teachers, and experience our cooperative community first-hand. Please call (310) 397-2735 to make an appointment.",
      ctaText: "Contact Us to Visit",
      ctaHref: "/visit/",
    },
    {
      stepNumber: 2,
      title: "Submit Your Application",
      description:
        "Complete our online application form and submit the $50.00 non-refundable application fee via check, cash, or Zelle (to upns@ucla.edu). Your application is not complete until the fee is received.",
      ctaText: "Apply to UPNS",
      ctaHref: "/apply/",
    },
    {
      stepNumber: 3,
      title: "Acceptance Notification & Intent",
      description:
        "When an enrollment space becomes available, we will notify you by phone. You have one (1) week from notification to confirm your intent to enroll, or you may decline and remain on the waiting list.",
    },
    {
      stepNumber: 4,
      title: "Enrollment Forms & Fee Payment",
      description:
        "Within two (2) weeks of notification, complete the required enrollment forms through Kindertales and submit the one-time $500 enrollment fee ($250 Registration + $250 Security Deposit credited to month 1).",
    },
  ] as EnrollmentStep[],
  whatToBring: [
    "Photos: 1 family photo and 3 photos of your child",
    "Extra set of clothes (including underwear, socks, and shoes, clearly labeled)",
    "During winter: extra sweater or jacket",
    "During summer: water-play clothes (swimsuit, towel, water shoes)",
    "Full-day program: cot sheet or fitted crib sheet, pillow, light blanket, optional snuggle item",
    "Kitten Room children not yet potty trained: diapers and wipes labeled with child's name",
  ],
  whatNotToBring: [
    "Toys from home (unless requested by teacher for special sharing)",
    "Weapons or toy swords/guns of any kind",
    "Crocs or open-toed sandals without heel straps",
    "Cookies, candies, and sweet treats from home",
  ],
  faqs: [
    {
      question: "Do I have to be affiliated with UCLA to enroll my child?",
      answer:
        "No. While UPNS was founded by UCLA families and proudly serves UCLA students, faculty, and staff, we warmly welcome non-UCLA affiliated families from the Los Angeles community.",
    },
    {
      question: "How does the waiting list work?",
      answer:
        "All our programs have a waiting list. As vacancies occur, they are filled in order down the list based on when you applied and the date your child is ready to start. You may decline a spot and remain on the list without losing your priority.",
    },
    {
      question: "🚽 What if my child is not potty trained yet?",
      answer:
        "Our Kitten Room (18 months to 2.5 years old) welcomes children who are not yet potty trained and supports diapering. Our Kangaroo and Dolphin rooms require children to be potty trained prior to enrolling in those classrooms.",
    },
    {
      question: "What is the parent co-op commitment?",
      answer:
        "Each family participates in their child's classroom once per month (8:30am–12:30pm for morning sessions). Families also attend general meetings, participate in fundraising, and join quarterly Saturday school cleaning days.",
    },
  ] as FAQItem[],
};
