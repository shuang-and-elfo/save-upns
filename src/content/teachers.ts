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
      "Lorraine oversees the day-to-day life of UPNS, supports the teaching team, and helps families understand and take part in the co-op.",
    displayOrder: 1,
    active: true,
  },
  {
    id: "ana-flores",
    name: "Ana Flores",
    role: "Administration Manager",
    classroom: "all",
    photo: "teachers/ana.png",
    shortBio:
      "Ana helps families with enrollment, school paperwork, communication, and the many practical details that keep UPNS running smoothly.",
    displayOrder: 2,
    active: true,
  },
  {
    id: "veronica-martell",
    name: "Veronica Martell",
    role: "Kitten Room Teacher",
    classroom: "kitten",
    photo: "teachers/veronica.png",
    shortBio:
      "Veronica helps our youngest children feel comfortable at school as they explore, build relationships, and become more independent in their daily routines.",
    displayOrder: 10,
    active: true,
  },
  {
    id: "nahomi-romero",
    name: "Nahomi Romero",
    role: "Kitten Room Teacher",
    classroom: "kitten",
    photo: "teachers/nahomi.png",
    shortBio:
      "Nahomi enjoys making art and playing outside with the Kitten children while helping them feel comfortable and confident at school.",
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
      "Lin brings stories and play into the children’s day and helps toddlers connect with new friends and try things on their own.",
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
      "Brigitte joins children in pretend play and building projects while helping them listen to one another and work through ideas together.",
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
      "Maria helps children build friendships through outdoor play and art and works closely with parents during their classroom days.",
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
      "Regina uses stories and hands-on play to help children talk about their feelings and work through problems with friends.",
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
      "Kareem encourages children to move, explore, garden, and challenge themselves through outdoor play.",
    displayOrder: 32,
    active: true,
  },
  {
    id: "sulamithe-ello",
    name: "Sulamithe Ello",
    role: "Dolphin Room Teacher",
    classroom: "dolphin",
    photo: "teachers/sulamithe.png",
    shortBio:
      "Sulamithe listens closely to children’s questions and helps them develop their ideas through conversation, stories, play, and group projects.",
    displayOrder: 30,
    active: true,
  },
  {
    id: "yadira-montes",
    name: "Yadira Montes",
    role: "Dolphin Room Teacher",
    classroom: "dolphin",
    photo: "teachers/yadira.png",
    shortBio:
      "Yadira helps older preschoolers speak up, listen to friends, solve problems together, and feel ready for their next school experience.",
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
