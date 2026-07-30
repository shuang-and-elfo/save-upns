export interface Tradition {
  id: string;
  title: string;
  slug: string;
  season: "Spring" | "Summer" | "Autumn" | "Winter";
  shortDescription: string;
  longDescription: string;
  coverPhoto: string;
  galleryPhotos: string[];
  altText: string;
  whatFamiliesEnjoy: string;
  parentQuote?: {
    quote: string;
    author: string;
  };
}

export const TRADITIONS: Tradition[] = [
  {
    id: "carnival",
    title: "Family Fun Day",
    slug: "carnival",
    season: "Spring",
    shortDescription:
      "The playground fills with handmade games, crafts, music, food, and families spending the day together.",
    longDescription:
      "Each spring, families, teachers, and alumni fill the playground for Family Fun Day. Parents create and run game booths, face painting, music, crafts, and a shared meal. For many children, it becomes one of their favorite school days of the year.",
    coverPhoto: "carnival.jpg",
    galleryPhotos: ["carnival.jpg", "carnival2.jpg", "carnival3.jpg"],
    altText: "Children and families playing carnival games on the sunny UPNS playground.",
    whatFamiliesEnjoy:
      "Children love the gentle hand-painted game booths and sensory crafts, while parents enjoy catching up with alumni families and celebrating the school year together.",
  },
  {
    id: "summer-camping-trip",
    title: "Family Camping Trip",
    slug: "summer-camping-trip",
    season: "Summer",
    shortDescription:
      "Families camp together for a weekend of tents, shared meals, campfires, outdoor play, and time with school friends.",
    longDescription:
      "For the summer camping trip, families set up tents near one another, share meals, explore outside, sing around the campfire, and watch the stars with school friends.",
    coverPhoto: "camping.jpg",
    galleryPhotos: ["camping.jpg"],
    altText: "UPNS families and children camping together with tents under shaded trees.",
    whatFamiliesEnjoy:
      "Children experience the magic of camping alongside their classroom friends, while parents build lifelong friendships around the campfire after little ones fall asleep.",
  },
  {
    id: "halloween-parade",
    title: "Halloween Parade",
    slug: "halloween-parade",
    season: "Autumn",
    shortDescription:
      "A delightful autumn tradition where children dress in gentle costumes and parade together around our campus and UCLA community.",
    longDescription:
      "Each autumn, children wear their favorite costumes for a cheerful, not-too-spooky parade around the school. Families gather along the route to wave, take photos, and enjoy treats together.",
    coverPhoto: "halloween.jpg",
    galleryPhotos: ["halloween.jpg"],
    altText: "Children in festive costumes participating in the UPNS Halloween parade.",
    whatFamiliesEnjoy:
      "Toddlers and preschoolers beam with pride parading in their favorite costumes with classmates, and families love celebrating a safe, gentle Halloween experience together.",
  },
  {
    id: "winter-wonderland",
    title: "Winter Wonderland",
    slug: "winter-wonderland",
    season: "Winter",
    shortDescription:
      "A cozy winter gathering celebrating light, warmth, handmade crafts, and family connection before the holidays.",
    longDescription:
      "At Winter Wonderland, children and families make lanterns and decorations, string beads, drink warm cider, and spend a cozy evening together at school.",
    coverPhoto: "winter_wonderland.mp4",
    galleryPhotos: ["winter_wonderland.mp4"],
    altText: "Children making winter paper crafts and lanterns together at the school Winter Wonderland celebration.",
    whatFamiliesEnjoy:
      "Families cherish the quiet craft tables, warm food sharing, and the opportunity to celebrate the winter season in an unhurried, non-commercial preschool setting.",
  },
];
