import Image from "next/image";
import image1 from "@/public/home/1.jpeg";
import image2 from "@/public/home/2.jpeg";
import image3 from "@/public/home/3.jpeg";
import image4 from "@/public/home/4.jpeg";
import image5 from "@/public/home/5.jpeg";
import image6 from "@/public/home/6.jpeg";
import image7 from "@/public/home/7.jpeg";
import image8 from "@/public/home/8.jpeg";
import image9 from "@/public/home/9.jpeg";
import image10 from "@/public/home/10.jpeg";
import image11 from "@/public/home/11.jpeg";
import image12 from "@/public/home/12.jpeg";
import image13 from "@/public/home/13.jpeg";
import image14 from "@/public/home/14.jpeg";
import image15 from "@/public/home/15.jpeg";
import image16 from "@/public/home/16.jpeg";

const images = [
  {
    src: image1,
    alt: "Me in at beach, Playa del Carmen, Mexico.",
  },
  {
    src: image2,
    alt: "Cappucino in a coffee shop in Puerto Rico.",
  },
  {
    src: image3,
    alt: "Disney Springs, Orlando, Florida.",
  },
  {
    src: image4,
    alt: "Paranoá Lake, Brasília, Brazil.",
  },
  {
    src: image5,
    alt: "Viracopos International Airport, Campinas, Brazil.",
  },
  {
    src: image6,
    alt: "Arc de Triomphe, Paris, France.",
  },
  {
    src: image7,
    alt: "San Juan Beach, Puerto Rico.",
  },
  {
    src: image8,
    alt: "Me driving Corvette C8, Miami, Florida.",
  },
  {
    src: image9,
    alt: "Italy sea.",
  },
  {
    src: image10,
    alt: "Corridor of Fontainebleau hotel, Miami, Florida.",
  },
  {
    src: image11,
    alt: "Me looking at Eiffel Tower, Paris, France.",
  },
  {
    src: image12,
    alt: "Burj Khalifa, Dubai, United Arab Emirates.",
  },
  {
    src: image13,
    alt: "Working at Mangai restaurant, Brasília, Brazil.",
  },
  {
    src: image14,
    alt: "Urca Beach, Rio de Janeiro, Brazil.",
  },
  {
    src: image15,
    alt: "Mineirão Stadium, Belo Horizonte, Brazil.",
  },
  {
    src: image16,
    alt: "Sliptska Riva, Split, Croatia.",
  },
];

const PhotoGrid = () => {
  const imageGridColumns = 4;
  const imagesPerColumn = Math.ceil(images.length / imageGridColumns);

  const imageColumns = Array.from({ length: imageGridColumns }, (_, i) =>
    images.slice(i * imagesPerColumn, (i + 1) * imagesPerColumn)
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 sm:mb-16">
      {imageColumns.map((columnImages, columnIndex) => (
        <div className="grid gap-4" key={columnIndex}>
          {columnImages.map(({ src, alt }, index) => (
            <Image
              key={index}
              src={src}
              alt={alt}
              className="h-auto max-w-full rounded-lg"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
