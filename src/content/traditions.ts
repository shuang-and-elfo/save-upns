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
    title: "Annual School Carnival",
    slug: "carnival",
    season: "Spring",
    shortDescription:
      "A joyful outdoor celebration where our playground transforms into a festival of games, crafts, and community laughter.",
    longDescription:
      "Each spring, UPNS families, teachers, and alumni gather on the playground for our annual Carnival. Organized and run by co-oping parent volunteers, the Carnival features handmade game booths, face painting, live music, and delicious potluck treats. It is a wonderful celebration of our shared community effort and a cherished memory for preschool children.",
    coverPhoto: "carnival.jpg",
    galleryPhotos: ["carnival.jpg", "carnival2.jpg", "carnival3.jpg"],
    altText: "Children and families playing carnival games on the sunny UPNS playground.",
    whatFamiliesEnjoy:
      "Children love the gentle hand-painted game booths and sensory crafts, while parents enjoy catching up with alumni families and celebrating the school year together.",
    parentQuote: {
      quote:
        "Seeing our children run from booth to booth with their classmates is the highlight of our spring!",
      author: "UPNS Co-op Parent",
    },
  },
  {
    id: "summer-camping-trip",
    title: "Family Camping Trip",
    slug: "summer-camping-trip",
    season: "Summer",
    shortDescription:
      "An adventurous weekend where UPNS families pitch tents together, share campfires, and let children explore nature.",
    longDescription:
      "Our Family Camping Trip extends the UPNS community beyond the classroom walls into the great outdoors. Families travel together to a local campground, pitching tents side-by-side, cooking community meals, and letting children experience nature exploration, campfire singing, and stargazing with their school friends.",
    coverPhoto: "tradition-camping.jpg",
    galleryPhotos: ["tradition-camping.jpg"],
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
      "Each autumn, UPNS celebrates the season with our beloved Halloween Parade. Children from the Kitten, Kangaroo, and Dolphin rooms don their favorite playful costumes for a gentle, non-scary parade around our courtyard and surrounding campus walkway. Co-oping parents and families line the path to cheer, take photos, and share seasonal treats in a festive outdoor celebration.",
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
      "When the winter months arrive, UPNS transforms into a Winter Wonderland, a peaceful, creative gathering where children and families craft winter lanterns, string beads, and share warm cider. Winter Wonderland focuses on simplicity, togetherness, and celebrating diverse family winter traditions from our UCLA and Los Angeles community.",
    coverPhoto: "tradition-winter-fair.jpg",
    galleryPhotos: ["tradition-winter-fair.jpg"],
    altText: "Children making winter paper crafts and lanterns together at the school Winter Wonderland celebration.",
    whatFamiliesEnjoy:
      "Families cherish the quiet craft tables, warm food sharing, and the opportunity to celebrate the winter season in an unhurried, non-commercial preschool setting.",
  },
];
