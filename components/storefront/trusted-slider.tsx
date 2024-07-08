import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import asda from "@/public/asda.png";
import tesco from "@/public/tesco.png";
import bbc from "@/public/bbc.png";
import puregym from "@/public/puregym.png";
import subway from "@/public/subway.png";
import nhs from "@/public/nhs.png";
import mcdonalds from "@/public/mcdonalds.png";
import mercedes from "@/public/mercedes.jpeg";

const brandList = [
  {
    id: 0,
    name: "Asda",
    image: asda,
  },
  {
    id: 1,
    name: "Tesco",
    image: tesco,
  },
  {
    id: 2,
    name: "BBC",
    image: bbc,
  },
  {
    id: 3,
    name: "PureGym",
    image: puregym,
  },
  {
    id: 4,
    name: "Subway",
    image: subway,
  },
  {
    id: 5,
    name: "NHS",
    image: nhs,
  },
  {
    id: 6,
    name: "McDonald's",
    image: mcdonalds,
  },
  {
    id: 7,
    name: "Mercedes Benz",
    image: mercedes,
  },
];

export default function TrustedSlider() {
  return <div className=""></div>;
}
