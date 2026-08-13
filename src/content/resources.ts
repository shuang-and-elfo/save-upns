export interface PolicySection {
  id: string;
  title: string;
  summary: string;
  content: string[];
}

export interface CoopResponsibility {
  title: string;
  timeCommitment: string;
  description: string;
  details: string[];
}

export const COOP_LIFE_DATA = {
  intro:
    "Joining a co-op means giving real time and energy to your child’s school. Parents work alongside teachers, help the school run, get to know other families, and see more of their child’s everyday school life.",
  whyFamiliesValueCoop: [
    "You get a direct window into your child's daily school world and social milestones.",
    "You build genuine, lifelong friendships with fellow neighborhood parents and UCLA families.",
    "You learn practical child-guidance techniques from experienced early childhood educators.",
    "Your child experiences a seamless, comforting connection between home and school.",
  ],
  responsibilities: [
    {
      title: "Classroom Workday",
      description:
        "Once a month from 8:30 AM to 12:30 PM, a parent helps in their child’s classroom by joining children in play, assisting with snacks and lunch, and supporting the daily schedule under the teacher’s guidance.",
    },
    {
      title: "Parent Education & General Meetings",
      description:
        "One adult from each family attends regular evening membership meetings to stay connected with school updates, participate in important community decisions, and hear from guest speakers on child development.",
    },
    {
      title: "School Cleaning",
      description:
        "Each family helps care for our campus during one Saturday morning cleaning session per quarter (8:00 AM–10:00 AM).",
    },
    {
      title: "Community Fundraising Support",
      description:
        "We host monthly fundraisers featuring a variety of exciting events to help raise funds for children’s enrichment programs, field trips like Underwood Farms, special events, and classroom supplies, all while working hard to keep tuition affordable for families.",
    },
  ] as CoopResponsibility[],
  faqs: [
    {
      question: "Can grandparents or caregivers fulfill my monthly classroom workday?",
      answer:
        "Classroom co-op workdays are designed for parents or legal guardians so that families build direct relationships with teachers and the classroom community. Please consult the Director regarding special family circumstances.",
    },
    {
      question: "What happens if my child wants all my attention on my workday?",
      answer:
        "This is very common, especially at first. Teachers will help you comfort your child while gradually joining the rest of the classroom work.",
    },
    {
      question: "Do I need prior teaching experience to co-op?",
      answer:
        "No. You are there to assist the teacher, not lead the class. Teachers explain what they need each morning, and parents learn through experience.",
    },
  ],
};

export const RESOURCES_POLICIES: PolicySection[] = [
  {
    id: "health-safety",
    title: "Health, Nutrition & Safety Policies",
    summary:
      "UPNS prioritizes the physical health and safety of every child through strict immunization adherence, daily health checks, and illness exclusion rules.",
    content: [
      "California Immunization Requirement: All enrolled children must have completed California Department of Public Health immunization forms prior to their first day of school.",
      "Morning Health Checks: Classroom teachers conduct a daily health check upon arrival. Teachers and the Director have the authority to send home any child who is lethargic, feverish, or unwell.",
      "24-Hour Exclusion Rule: Children with fever, vomiting, or diarrhea must remain home for at least 24 hours after all symptoms have ended without medication.",
      "Communicable Diseases: Parents must notify the Director immediately upon diagnosis of any contagious illness so appropriate classroom notifications can be issued.",
      "Working Member Illness: Parents scheduled to co-op who become ill must not attend school and should arrange a co-op substitute.",
    ],
  },
  {
    id: "discipline",
    title: "Respectful Guidance & Discipline Policy",
    summary:
      "Our guidance approach focuses on helping children understand their emotions, respect classmates, and solve problems constructively.",
    content: [
      "Teachers model empathetic language and help children communicate their feelings using words rather than physical force.",
      "When conflict arises, teachers assist children in listening to each other and generating fair solutions.",
      "If a child experiences repeated behavioral difficulties, the teacher and Director will schedule a parent conference to understand underlying causes and support the child collaboratively.",
      "UPNS reserves the right to terminate enrollment if severe safety concerns persist or in cases of non-payment of tuition and fees.",
    ],
  },
  {
    id: "standing-rules",
    title: "Standing Rules & Operational Procedures",
    summary:
      "Key administrative rules regarding attendance, schedule changes, and withdrawal notification.",
    content: [
      "Pick-Up Punctuality: Please respect school hours and teacher preparation time. There is no grace period for late pick-up.",
      "Schedule Changes: Changes to a child's program schedule must be submitted in writing to the Director and incur a $25 one-time administrative fee.",
      "30-Day Withdrawal Notice: Families intending to withdraw must give at least 30 days written notice to the Director. Families remain responsible for tuition and scheduled co-op days during the 30-day notice period.",
    ],
  },
  {
    id: "governance",
    title: "Board of Directors & Governance",
    summary:
      "UPNS is a democratic cooperative governed by an elected Board of Directors representing the parent membership.",
    content: [
      "The Board of Directors is elected annually by the school membership to administer school policy and financial stewardship.",
      "Board meetings are open to all UPNS families, and each family's vote carries equal weight.",
      "Board members act as representatives of the entire school community, making decisions in the long-term best interest of all UPNS children.",
    ],
  },
];
