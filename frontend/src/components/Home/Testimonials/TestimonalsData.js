import {
  aishaImg,
  chloeImg,
  darrenImg,
  graceImg,
  juliaImg,
  markImg,
  omarImg,
  sofiaImg,
  tomImg,
} from "../../../assets/images/avatars/index";

import { mapUserByProperties } from "@/helpers/mapUserByProperties";

let testimonials = [
  {
    name: "Julia M.",
    location: "Birmingham, England",
    image: juliaImg,
    rating: 5,
    quote:
      "Absolutely love it — I saved 25% on my weekly shopping without any hassle. A total game changer!",
  },
  {
    name: "Mark T.",
    location: "London, England",
    image: markImg,
    rating: 4,
    quote:
      "Really helpful and efficient, though there’s room for a few more features. Still, I use it regularly!",
  },
  {
    name: "Sofia R.",
    location: "Manchester, England",
    rating: 5,
    image: sofiaImg,
    quote:
      "No sign-ups, no fluff — just real savings every single time. It’s become part of my routine!",
  },
  {
    name: "Darren L.",
    location: "Leeds, England",
    rating: 5,
    image: darrenImg,
    quote:
      "What used to take me ages now takes seconds. It’s honestly brilliant and super reliable.",
  },
  {
    name: "Emily W.",
    location: "Brighton, England",
    rating: 4,
    image: sofiaImg,
    quote:
      "Works really well and definitely helps find better deals, though it could expand to more stores.",
  },
  {
    name: "Aisha N.",
    location: "Bristol, England",
    rating: 5,
    image: aishaImg,
    quote:
      "Feels like a smart shopping buddy in my pocket. I’m saving money in real time — love it!",
  },
  {
    name: "Tom B.",
    location: "Newcastle, England",
    rating: 4,
    image: tomImg,
    quote:
      "Great design and it does what it promises. A few more advanced options would make it perfect.",
  },
  {
    name: "Grace H.",
    location: "Sheffield, England",
    rating: 2,
    image: graceImg,
    quote:
      "It helped me save some money, but I found it a bit limited in terms of coverage and updates.",
  },
  {
    name: "Omar Y.",
    location: "Nottingham, England",
    rating: 5,
    image: omarImg,
    quote:
      "With everything getting pricier, this app has been a lifesaver. I recommend it to everyone!",
  },
  {
    name: "Chloe K.",
    location: "Southampton, England",
    rating: 2,
    image: chloeImg,
    quote:
      "The idea is solid and it can be useful, but it didn’t always match what I saw in-store. Needs improvement.",
  },
];

const userNames = mapUserByProperties(testimonials, "name");
console.log(userNames);

export default testimonials;
