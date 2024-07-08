"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";

interface ImageSliderProps {
  images: string[];
}

export function ImageSlider({ images }: ImageSliderProps) {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const handlePrev = () => {
    setMainImageIndex((prevIdx) => (prevIdx === 0 ? images.length - 1 : prevIdx - 1));
  };

  const handleNext = () => {
    setMainImageIndex((prevIdx) => (prevIdx === images.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <div className="grid gap-6 md:gap-3 items-start">
      <div className="relative overflow-hidden rounded-md">
        <Image src={images[0]} alt="Product image" width={600} height={600} className="object-cover w-[600px] h-[600px]" />

        <div className="absolute inset-0 flex items-center justify-between px-4">
          <Button size="icon" className="rounded-full" onClick={handlePrev}>
            <ChevronLeftIcon className="w-6 h-6" />
          </Button>
          <Button size="icon" className="rounded-full" onClick={handleNext}>
            <ChevronRightIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image} alt="Product image" width={125} height={125} className="object-cover w-[125px] h-[125px]" />
          </div>
        ))}
      </div>
    </div>
  );
}
