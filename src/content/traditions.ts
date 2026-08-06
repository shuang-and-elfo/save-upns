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
      "Our biggest fundraising event of the year, where the playground comes alive with game booths, races, student exhibits, and raffle prizes.",
    longDescription:
      "Each spring, families, teachers, and alumni gather on the playground for Family Fun Day, our biggest fundraising event of the year. Parents build and run interactive game booths, organize friendly races, showcase classroom art exhibits, and sell raffle tickets with wonderful prizes. It is a lively, festive day celebrating our community.",
    coverPhoto: "family-fun-day-2.jpg",
    galleryPhotos: ["family-fun-day-2.jpg", "carnival.jpg", "carnival2.jpg"],
    altText: "Children and families playing games on the sunny UPNS playground during Family Fun Day.",
    whatFamiliesEnjoy:
      "Children love running in the races, trying every game booth, and checking the raffle board, while parents and alumni connect to support the school.",
  },
  {
    id: "underwood-farm-trip",
    title: "Underwood Farm Trip",
    slug: "underwood-farm-trip",
    season: "Spring",
    shortDescription:
      "A beloved spring field trip where children and families visit Underwood Family Farms to ride tractors, pick produce, and meet farm animals.",
    longDescription:
      "Each spring, UPNS families head to Underwood Family Farms for an outdoor field trip. Children ride in tractor wagons across the fields, pick fresh vegetables and fruit, visit the farm animals, and share a picnic lunch together in the fresh farm air.",
    coverPhoto: "farm_trip.jpg",
    galleryPhotos: ["farm_trip.jpg", "farm_trip2.jpg", "farm_trip3.jpg"],
    altText: "UPNS children and families enjoying a spring field trip at Underwood Family Farms.",
    whatFamiliesEnjoy:
      "Children love picking their own produce straight from the fields and riding the tractor wagons, while families enjoy a fun, memorable day outdoors together.",
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
    coverPhoto: "camping2.jpg",
    galleryPhotos: ["camping2.jpg", "camping3.jpg", "camping4.jpg"],
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
      "Children dress up in their favorite costumes for a cheerful parade around campus with classmates and families.",
    longDescription:
      "Each autumn, children put on their favorite costumes for a cheerful parade around the school grounds. Families line the parade path to cheer, take photos, and celebrate together with treats and laughter.",
    coverPhoto: "halloween.jpg",
    galleryPhotos: ["halloween.jpg", "halloween2.jpg", "halloween3.jpg"],
    altText: "Children in festive costumes participating in the UPNS Halloween parade.",
    whatFamiliesEnjoy:
      "Children love showing off their costumes to friends and teachers, while families enjoy a safe, festive community celebration together.",
  },
  {
    id: "winter-wonderland",
    title: "Winter Wonderland",
    slug: "winter-wonderland",
    season: "Winter",
    shortDescription:
      "A festive evening where children perform for parents, enjoy photos with Santa and face painting, and share a cozy meal together.",
    longDescription:
      "Winter Wonderland brings our whole school community together for a festive evening. Children take the stage to sing and perform for their families, take photos with Santa, get their faces painted, and enjoy seasonal craft tables. The night wraps up with a warm shared meal together.",
    coverPhoto: "winter_wonderland.mp4",
    galleryPhotos: ["winter_wonderland.mp4"],
    altText: "Children performing and celebrating together at the school Winter Wonderland celebration.",
    whatFamiliesEnjoy:
      "Parents love watching their children perform with classmates, taking holiday photos with Santa, and sharing a delicious meal with other families.",
  },
];
