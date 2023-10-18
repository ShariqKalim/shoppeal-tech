
interface Card {
  id: number;
  type: string;
  details: string;
  ratings: number;
  reviews: number;
  discount: number;
  mainPrice: number;
  price: number;
  views: number;
  imageUrl: string;
}
export const cards : Card[]= [
  {
    id: 1,
    type: "adventure",
    details: "Alps Mountain Safari & Adventure Games(Guided)",
    ratings: 4.3,
    reviews: 371,
    discount: 30,
    mainPrice: 310,
    price: 213,
    views: 340,
    imageUrl: `https://picsum.photos/seed/${Math.random()}/1000`,
  },
  {
    id: 2,
    type: "Nature",
    details: "The wonder in which all wonders of the world lie",
    ratings: 3.7,
    reviews: 142,
    discount: 25,
    price: 200,
    mainPrice: 510,
    views: 564,
    imageUrl: `https://picsum.photos/seed/${Math.random()}/1000`,
  },
  {
    id: 3,
    type: "Tourism",
    details: "Enjoy the world everywhere you with us(Guided)",
    ratings: 4.7,
    reviews: 642,
    discount: 15,
    price: 560,
    mainPrice: 810,
    views: 884,
    imageUrl: `https://picsum.photos/seed/${Math.random()}/1000`,
  },
  {
    id: 4,
    type: "Adventure",
    details: "Thrilling adventures for adrenaline junkies",
    ratings: 4.5,
    reviews: 278,
    discount: 20,
    price: 420,
    mainPrice: 530,
    views: 432,
    imageUrl: `https://picsum.photos/seed/${Math.random()}/1000`,
  },
  {
    id: 5,
    type: "Wildlife",
    details: "Explore the wildlife in its natural habitat",
    ratings: 4.2,
    reviews: 512,
    discount: 10,
    price: 320,
    mainPrice: 450,
    views: 789,
    imageUrl: `https://picsum.photos/seed/${Math.random()}/1000`,
  },
  {
    id: 6,
    type: "Historical",
    details: "Travel back in time to witness historical marvels",
    ratings: 4.8,
    reviews: 425,
    discount: 35,
    price: 380,
    mainPrice: 590,
    views: 674,
    imageUrl: `https://picsum.photos/seed/${Math.random()}/1000`,
  },
  {
    id: 7,
    type: "Cultural",
    details: "Immerse yourself in diverse cultures and traditions",
    ratings: 4.6,
    reviews: 362,
    discount: 28,
    price: 270,
    mainPrice: 370,
    views: 298,
    imageUrl: `https://picsum.photos/seed/${Math.random()}/1000`,
  },
  {
    id: 8,
    type: "Beaches",
    details: "Relax on pristine beaches with golden sands",
    ratings: 4.4,
    reviews: 498,
    discount: 22,
    price: 480,
    mainPrice: 620,
    views: 543,
    imageUrl: `https://picsum.photos/seed/${Math.random()}/1000`,
  },
  {
    id: 9,
    type: "Mountains",
    details: "Scale towering peaks and conquer the mountains",
    ratings: 4.9,
    reviews: 589,
    discount: 18,
    price: 640,
    mainPrice: 780,
    views: 905,
    imageUrl: `https://picsum.photos/seed/${Math.random()}/1000`,
  },
  {
    id: 10,
    type: "City Tours",
    details: "Explore vibrant cities and their urban delights",
    ratings: 4.1,
    reviews: 276,
    discount: 12,
    price: 360,
    mainPrice: 410,
    views: 467,
    imageUrl: `https://picsum.photos/seed/${Math.random()}/1000`,
  },
];
