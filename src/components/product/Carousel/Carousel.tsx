"use client";

import React, { useCallback, useEffect } from "react";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import { Button } from "@/components/common/Button/Button";
import { Chevron } from "@/components/svg/Chevron/Chevron";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export const ImageCarousel = React.memo(function ImageCarousel({
  images,
  alt,
}: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (emblaApi) emblaApi.destroy();
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full pb-[100%] ">
      <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {images?.map((image, index) => (
            <div key={image} className="relative w-full aspect-square">
              <Image
                src={image}
                alt={image}
                fill
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {images?.length > 1 && (
        <>
          <Button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center z-10"
          >
            <Chevron direction="left" />
          </Button>
          <Button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center z-10"
          >
            <Chevron direction="right" />
          </Button>
        </>
      )}
    </div>
  );
});
