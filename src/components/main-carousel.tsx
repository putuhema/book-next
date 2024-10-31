"use client";
import {
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function MainCarousel() {
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          loop: true,
        }}
        className="group row-span-2 col-span-3 lg:col-span-2"
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="h-[400px]">
                <Image
                  priority
                  className="w-full h-auto"
                  width={700}
                  height={675}
                  style={{
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={`/img/banner-${index + 1}.jpg`}
                  alt={`banner-${index + 1}`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselDot />
        <CarouselNext />
      </Carousel>
      <div className="w-full hidden lg:block border">
        <Image
          priority
          alt="banner 2"
          width={700}
          height={675}
          style={{
            height: "100%",
            objectFit: "cover",
          }}
          src="/img/banner-1.jpg"
        />
      </div>
      <div className="w-full hidden lg:block border">
        <Image
          priority
          alt="banner 2"
          width={700}
          height={675}
          style={{
            height: "100%",
            objectFit: "cover",
          }}
          src="/img/banner-2.jpg"
        />
      </div>
    </div>
  );
}
