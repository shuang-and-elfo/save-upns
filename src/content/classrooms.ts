export interface ScheduleItem {
  time: string;
  activity: string;
  note?: string;
}

export interface ClassroomInfo {
  id: "kitten" | "kangaroo" | "dolphin";
  name: string;
  slug: string;
  ageRange: string;
  animal: "kitten" | "kangaroo" | "dolphin";
  tagline: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  galleryImages: string[];
  pottyTrainingPolicy: string;
  teacherSupport: string[];
  parentCoopExpectations: string;
  schedule: ScheduleItem[];
  ratioNote: string;
}

export const CLASSROOMS: ClassroomInfo[] = [
  {
    id: "kitten",
    name: "Kitten Room",
    slug: "kitten",
    ageRange: "18 months – 2 year olds",
    animal: "kitten",
    tagline: "A gentle, comforting bridge from home to school.",
    shortDescription:
      "Our youngest classroom supports toddlers as they explore sensory play, build trust with teachers, and experience their very first preschool community.",
    longDescription:
      "The Kitten Room is thoughtfully designed for toddlers aged 18 months to 2 years. At this tender stage of development, our primary focus is helping children feel safe, seen, and secure as they separate from parents and discover the joy of school. Children engage in water and sand play, finger painting, block building, storytime, and gentle outdoor play.",
    heroImage: "kitten.jpg",
    galleryImages: [
      "kitten.jpg",
      "kitten2.jpg",
      "kitten3.jpg",
      "kitten4.jpg",
      "kitten-5.jpg",
      "kitten-6.jpg",
    ],
    pottyTrainingPolicy:
      "Potty training is NOT required to enroll in the Kitten Room. Our teachers actively support children in diapers and partner with parents on potty training when your child shows readiness.",
    teacherSupport: [
      "Warm, responsive caregiving during morning arrivals and separations",
      "Supportive diaper changing and individualized potty training encouragement",
      "Sensory-rich experiences including water tables, playdough, and music",
      "Gentle guidance in sharing space and playing alongside peers",
    ],
    parentCoopExpectations:
      "Working parents in the Kitten Room assist teachers by comforting children, supervising sensory tables, helping during snack and lunch transitions, and maintaining a calm, orderly environment.",
    schedule: [
      { time: "8:00am – 9:00am", activity: "Drop Off & Welcome" },
      { time: "9:00am – 9:30am", activity: "Outside Activities" },
      { time: "9:30am – 9:45am", activity: "Circle Time" },
      { time: "9:45am – 10:00am", activity: "Snack Time" },
      { time: "10:00am – 10:15am", activity: "Potty Time" },
      { time: "10:15am – 11:00am", activity: "Outside Activities" },
      { time: "11:00am – 11:30am", activity: "Inside Work Time" },
      { time: "11:30am – 11:45am", activity: "Circle Time" },
      { time: "11:45am – 12:10pm", activity: "Lunch Time" },
      { time: "12:10pm – 12:30pm", activity: "Potty Time / Outside Time" },
      { time: "12:30pm – 2:30pm", activity: "Nap Time" },
      { time: "2:30pm – 3:00pm", activity: "Wake Up / Potty / Snack" },
      { time: "3:00pm – 4:00pm", activity: "Outside Time" },
      { time: "4:00pm – 4:30pm", activity: "Inside Time" },
      { time: "4:30pm – 5:00pm", activity: "Pick Up Time" },
    ],
    ratioNote: "Approximately 10–15 children in the classroom with 3 dedicated teachers and co-oping parent volunteers.",
  },
  {
    id: "kangaroo",
    name: "Kangaroo Room",
    slug: "kangaroo",
    ageRange: "3 – 4 year olds",
    animal: "kangaroo",
    tagline: "Imaginative play, friendship, and collaborative discoveries.",
    shortDescription:
      "Three- and four-year-olds expand their social world through dramatic play, outdoor building, creative art, and learning to solve problems together.",
    longDescription:
      "In the Kangaroo Room, three- and four-year-olds are bursting with curiosity and imagination. Children explore deeper social interactions, learning how to negotiate play ideas, express their emotions with words, and collaborate on block structures and art projects. Teachers provide open-ended materials that encourage creativity and physical development.",
    heroImage: "kat-outdoor.jpg",
    galleryImages: [
      "kat-outdoor.jpg",
      "kangaroo.jpg",
      "kangaroo2.jpg",
      "kan3.jpg",
      "kan4.jpg",
      "kan5.jpg",
    ],
    pottyTrainingPolicy:
      "Potty training is REQUIRED for the Kangaroo Room. The Kangaroo Room is not equipped to change diapers.",
    teacherSupport: [
      "Coaching children in emotional expression and peer conflict resolution",
      "Providing open-ended art, dramatic play, and woodworking/gardening opportunities",
      "Supporting growing independence in bathroom routines and self-care",
      "Facilitating small-group discussions and interactive storytime",
    ],
    parentCoopExpectations:
      "Working parents in the Kangaroo Room actively engage in children's imaginative play, assist at outdoor easels and garden areas, help supervise snack and lunch, and support children as they practice social problem-solving.",
    schedule: [
      { time: "8:00am – 9:00am", activity: "Drop Off & Morning Play" },
      { time: "9:00am – 9:30am", activity: "Outside Time" },
      { time: "9:30am – 9:45am", activity: "Circle Time" },
      { time: "9:45am – 10:00am", activity: "Snack" },
      { time: "10:00am – 11:00am", activity: "Outside Time" },
      { time: "11:00am – 11:45am", activity: "Clean Up Time / Circle Time" },
      { time: "11:45am – 12:30pm", activity: "Lunch Time" },
      { time: "12:30pm – 2:30pm", activity: "Nap Time" },
      { time: "2:30pm – 3:00pm", activity: "Snack / Inside Time" },
      { time: "3:30pm – 4:30pm", activity: "Outside Time" },
      { time: "4:30pm – 5:00pm", activity: "Pick Up Time" },
    ],
    ratioNote: "Approximately 10–15 children in the classroom with 4 dedicated teachers and co-oping parent volunteers.",
  },
  {
    id: "dolphin",
    name: "Dolphin Room",
    slug: "dolphin",
    ageRange: "4 – 5 year olds",
    animal: "dolphin",
    tagline: "Confident inquiry, empathy, and kindergarten readiness through play.",
    shortDescription:
      "Our oldest classroom nurtures self-confidence, deeper project explorations, and social empathy as children prepare for elementary school.",
    longDescription:
      "The Dolphin Room celebrates the confidence and capability of four- and five-year-olds. At this stage, children initiate complex cooperative play, ask deep questions about their world, and engage in sustained projects. Our teachers support holistic development, nurturing literacy, numeracy, and scientific curiosity naturally through play without corporate academic drills.",
    heroImage: "music_class.jpg",
    galleryImages: ["music_class.jpg", "kat-outdoor.jpg", "kangaroo2.jpg"],
    pottyTrainingPolicy:
      "Potty training is REQUIRED for the Dolphin Room. The Dolphin Room is not equipped to change diapers.",
    teacherSupport: [
      "Encouraging collaborative project planning and sustained imaginative play",
      "Fostering natural language, literacy, and early mathematical reasoning through games",
      "Nurturing self-advocacy, leadership, and empathy among classmates",
      "Supporting a gentle transition toward kindergarten confidence",
    ],
    parentCoopExpectations:
      "Working parents in the Dolphin Room support children's complex projects, read stories, assist with cooking or gardening activities, and foster independent conflict resolution.",
    schedule: [
      { time: "8:00am – 8:45am", activity: "Arrival (Hand Wash) & Outdoor Activities" },
      { time: "8:45am – 9:15am", activity: "Hand Wash & Circle Time" },
      { time: "9:15am – 9:30am", activity: "Music, Movement & Sharing" },
      { time: "9:30am – 10:00am", activity: "Hand Wash & Snack" },
      { time: "10:00am – 11:00am", activity: "Inside Activities" },
      { time: "11:00am – 12:00pm", activity: "Outdoor Activities" },
      { time: "12:00pm – 12:30pm", activity: "Hand Wash & Lunch" },
      { time: "12:30pm – 2:00pm", activity: "Story Time & Nap" },
      { time: "2:00pm – 3:10pm", activity: "Outdoor Activities" },
      { time: "3:10pm – 3:30pm", activity: "Hand Wash & Snack" },
      { time: "3:30pm – 4:30pm", activity: "Inside Activities" },
      { time: "4:30pm – 5:00pm", activity: "Clean Up, Hand Wash & Pick Up" },
    ],
    ratioNote: "Approximately 10–15 children in the classroom with 2 dedicated teachers and co-oping parent volunteers.",
  },
];

export function getClassroomBySlug(slug: string): ClassroomInfo | undefined {
  return CLASSROOMS.find((c) => c.slug === slug);
}
