"use client";

import React from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { Button } from "@/components/base/button";

import { ContentWrapper } from "@/components/content-wrapper";
import { SectionHeader } from "@/components/section-header";

import { cn } from "@/lib/utils";

const galleryItems: { imagePath: string; description: string; title: string }[] = [
  { imagePath: "/gallery/image1.jpg", title: "", description: "" },
  { imagePath: "/gallery/image2.jpg", title: "", description: "" },
  { imagePath: "/gallery/image3.jpg", title: "", description: "" },
  { imagePath: "/gallery/image4.jpg", title: "", description: "" },
  { imagePath: "/gallery/image5.jpg", title: "", description: "" },
  { imagePath: "/gallery/image6.jpg", title: "", description: "" },
  { imagePath: "/gallery/image7.jpg", title: "", description: "" },
  { imagePath: "/gallery/image8.jpg", title: "", description: "" },
  { imagePath: "/gallery/image9.jpg", title: "", description: "" },
  { imagePath: "/gallery/image10.jpg", title: "", description: "" },
];

function GallerySection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleIndicatorClick = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section id="galeri" className="bg-white py-8 md:py-10">
      <ContentWrapper className="mx-auto flex flex-col items-center justify-start gap-6 md:gap-10">
        <SectionHeader title="Galeri" />

        <div className="relative w-full">
          {/* Gallery Container */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
            {/* Images */}
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  index === currentIndex ? "opacity-100" : "opacity-0",
                )}>
                {/* Image */}
                <img src={item.imagePath} alt={item.title} className="h-full w-full object-cover" />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Description Overlay */}
                <div className="absolute right-0 bottom-0 left-0 p-4 md:p-8 text-white">
                  <h3 className="mb-2 text-lg md:text-2xl font-bold">{item.title}</h3>
                  <p className="text-sm md:text-lg text-white/90">{item.description}</p>
                </div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <Button
              onClick={handlePrevious}
              disabled={isTransitioning}
              className="absolute top-1/2 left-2 md:left-4 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 md:p-3 text-gray-800 shadow-lg hover:scale-110 hover:bg-white"
              aria-label="Previous image">
              <ChevronLeftIcon className="size-4 md:size-6" />
            </Button>
            <Button
              onClick={handleNext}
              disabled={isTransitioning}
              className="absolute top-1/2 right-2 md:right-4 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 md:p-3 text-gray-800 shadow-lg hover:scale-110 hover:bg-white"
              aria-label="Next image">
              <ChevronRightIcon className="size-4 md:size-6" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {galleryItems.map((_, index) => (
              <Button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={cn(
                  "h-2 rounded-full p-0 transition-all",
                  index === currentIndex ? "bg-primary w-8" : "w-2 bg-gray-300 hover:bg-gray-400",
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
}

export { GallerySection };
