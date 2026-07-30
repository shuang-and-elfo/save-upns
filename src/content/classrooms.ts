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
    ageRange: "18 months – 3 year olds",
    animal: "kitten",
    tagline: "A warm first step into school.",
    shortDescription:
      "Our youngest children explore water, sand, paint, blocks, stories, and outdoor play while getting comfortable with teachers and their first school routines.",
    longDescription:
      "The Kitten Room is for toddlers ages 18 months to 3 years. Teachers focus first on helping children feel safe and comfortable as they separate from parents and get used to school. Their days include water and sand, finger painting, blocks, stories, music, and time outside.",
    heroImage: "kitten4.jpg",
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
      "Comfort and reassurance during arrival and separation",
      "Patient help with diapers, toileting, and everyday care routines",
      "Plenty of hands-on play with water, dough, music, paint, and other materials",
      "Help learning to play near other children, wait, share space, and connect",
    ],
    parentCoopExpectations:
      "On classroom workdays, parents help comfort children, supervise play, support snack and lunch, and help keep the room calm and organized.",
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
    ratioNote: "10–15 children in the classroom with 3 dedicated teachers and co-oping parent volunteers.",
  },
  {
    id: "kangaroo",
    name: "Kangaroo Room",
    slug: "kangaroo",
    ageRange: "3 – 4 year olds",
    animal: "kangaroo",
    tagline: "Big imaginations and growing friendships.",
    shortDescription:
      "Kangaroo children spend their days pretending, building, painting, climbing, talking, and learning how to play through ideas and disagreements with friends.",
    longDescription:
      "Kangaroo children are full of ideas. They make up games, build together, paint, climb, and learn how to explain what they want, listen to friends, and work through disagreements. Teachers offer materials that children can use in many different ways.",
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
      "Helping children name feelings and work through conflicts with friends",
      "Offering art, pretend play, building, woodworking, and gardening experiences",
      "Encouraging independence with toileting, dressing, eating, and other routines",
      "Making space for stories, conversations, questions, and small-group play",
    ],
    parentCoopExpectations:
      "On classroom workdays, parents join children’s play, help with art and gardening, support meals, and help children work through everyday social moments.",
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
    ratioNote: "10–15 children in the classroom with 3 dedicated teachers and co-oping parent volunteers.",
  },
  {
    id: "dolphin",
    name: "Dolphin Room",
    slug: "dolphin",
    ageRange: "4 – 5 year olds",
    animal: "dolphin",
    tagline: "Big questions, shared projects, and growing independence.",
    shortDescription:
      "Our oldest preschoolers take their ideas further through longer games, group projects, stories, outdoor challenges, and growing responsibility in the classroom.",
    longDescription:
      "Dolphin children are ready to take their ideas further. They create longer games together, ask lots of questions, and return to projects over several days. Teachers bring reading, writing, numbers, science, and problem-solving naturally into the children’s play.",
    heroImage: "music_class.jpg",
    galleryImages: ["music_class.jpg", "kat-outdoor.jpg", "kangaroo2.jpg"],
    pottyTrainingPolicy:
      "Potty training is REQUIRED for the Dolphin Room. The Dolphin Room is not equipped to change diapers.",
    teacherSupport: [
      "Helping children plan games and projects together and return to them over time",
      "Bringing language, reading, writing, and number ideas into everyday play",
      "Encouraging children to speak up, listen, take responsibility, and care for classmates",
      "Helping children feel capable and comfortable as they get ready for kindergarten",
    ],
    parentCoopExpectations:
      "On classroom workdays, parents may read stories, help with longer projects, join cooking or gardening, and support children as they solve problems more independently.",
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
    ratioNote: "10–15 children in the classroom with 2 dedicated teachers and co-oping parent volunteers.",
  },
];

export function getClassroomBySlug(slug: string): ClassroomInfo | undefined {
  return CLASSROOMS.find((c) => c.slug === slug);
}
