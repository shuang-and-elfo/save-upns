export interface Teacher {
  id: string;
  name: string;
  role: string;
  classroom: "kitten" | "kangaroo" | "dolphin" | "all";
  photo: string;
  shortBio: string;
  displayOrder: number;
  active: boolean;
}

export const TEACHERS: Teacher[] = [
  {
    id: "director",
    name: "Lorraine Smith-Jones",
    role: "School Director",
    classroom: "all",
    photo: "teacher-director.jpg",
    shortBio:
      "As the professional head of UPNS, Lorraine is responsible for daily operations, supporting teachers, and guiding families in our play-based cooperative community.",
    displayOrder: 1,
    active: true,
  },
  {
    id: "ana-flores",
    name: "Ana Flores",
    role: "Administration Manager",
    classroom: "all",
    photo: "teacher-ana-flores.jpg",
    shortBio:
      "Ana manages school administration, enrollment operations, and family communications, working closely with Lorraine to ensure a smooth, welcoming experience for all families.",
    displayOrder: 2,
    active: true,
  },
  {
    id: "veronica-martell",
    name: "Veronica Martell",
    role: "Kitten Room Teacher",
    classroom: "kitten",
    photo: "teacher-veronica-martell.jpg",
    shortBio:
      "Veronica creates a calm, nurturing first classroom experience for our youngest toddlers, supporting gentle separations, early sensory exploration, and potty training readiness.",
    displayOrder: 10,
    active: true,
  },
  {
    id: "nahomi-romero",
    name: "Nahomi Romero",
    role: "Kitten Room Teacher",
    classroom: "kitten",
    photo: "teacher-nahomi-romero.jpg",
    shortBio:
      "Nahomi loves engaging our toddlers in hands-on art and outdoor water play, helping children build comfort and confidence in their first school community.",
    displayOrder: 11,
    active: true,
  },
  {
    id: "lin-han",
    name: "Lin Han",
    role: "Kitten Room Teacher",
    classroom: "kitten",
    photo: "teacher-lin-han.jpg",
    shortBio:
      "Lin brings warmth and playful storytelling to circle time, supporting toddlers as they discover new friends and independence.",
    displayOrder: 12,
    active: true,
  },
  {
    id: "brigitte-peistrup",
    name: "Brigitte Peistrup",
    role: "Kangaroo Room Teacher",
    classroom: "kangaroo",
    photo: "teacher-brigitte-peistrup.jpg",
    shortBio:
      "Brigitte guides three-year-olds through imaginative dramatic play and collaborative block building, fostering curiosity and early empathy.",
    displayOrder: 20,
    active: true,
  },
  {
    id: "maria-maldonado",
    name: "Maria Maldonado",
    role: "Kangaroo Room Teacher",
    classroom: "kangaroo",
    photo: "teacher-maria-maldonado.jpg",
    shortBio:
      "Maria nurtures children's social development during outdoor play and creative art projects, partnering closely with co-oping parents every day.",
    displayOrder: 21,
    active: true,
  },
  {
    id: "regina-gutierrez",
    name: "Regina Gutierrez",
    role: "Kangaroo Room Teacher",
    classroom: "kangaroo",
    photo: "teacher-regina-gutierrez.jpg",
    shortBio:
      "Regina supports children as they learn to communicate their feelings and solve problems together through stories and sensory play.",
    displayOrder: 22,
    active: true,
  },
  {
    id: "kareem-smith",
    name: "Kareem Smith",
    role: "Dolphin Room Teacher",
    classroom: "dolphin",
    photo: "teacher-kareem-smith.jpg",
    shortBio:
      "Kareem encourages active exploration on the playground and garden, celebrating every child's physical growth and outdoor discoveries.",
    displayOrder: 32,
    active: true,
  },
  {
    id: "sulamithe-ello",
    name: "Sulamithe Ello",
    role: "Dolphin Room Teacher",
    classroom: "dolphin",
    photo: "teacher-sulamithe-ello.jpg",
    shortBio:
      "Sulamithe guides four- and five-year-olds through collaborative inquiry, rich discussions, and creative storytelling that honor children's emerging ideas.",
    displayOrder: 30,
    active: true,
  },
  {
    id: "yadira-montes",
    name: "Yadira Montes",
    role: "Dolphin Room Teacher",
    classroom: "dolphin",
    photo: "teacher-yadira-montes.jpg",
    shortBio:
      "Yadira fosters confidence, empathy, and group problem-solving as older preschoolers prepare for kindergarten through meaningful play.",
    displayOrder: 31,
    active: true,
  },
];

export function getTeachersByClassroom(classroom: "kitten" | "kangaroo" | "dolphin" | "all") {
  if (classroom === "all") {
    return getAllActiveTeachers();
  }
  return TEACHERS.filter((t) => t.active && t.classroom === classroom).sort(
    (a, b) => a.displayOrder - b.displayOrder
  );
}

export function getAllActiveTeachers() {
  return TEACHERS.filter((t) => t.active).sort((a, b) => a.displayOrder - b.displayOrder);
}
