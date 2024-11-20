import { useState, useEffect } from "react";
import ChevronIcon from "../icons/chevron";
import ChevronIconLeft from "../icons/chevronLeft";

const slides = [
  {
    src: "https://via.placeholder.com/500x300/ecfeef/000000?text=1",
    text: "Texto para la imagen 1",
  },
  {
    src: "https://via.placeholder.com/500x300/ecfeef/000000?text=2",
    text: "Texto para la imagen 2",
  },
  {
    src: "https://via.placeholder.com/500x300/ecfeef/000000?text=3",
    text: "Texto para la imagen 3",
  },
  {
    src: "https://via.placeholder.com/500x300/ecfeef/000000?text=4",
    text: "Texto para la imagen 4",
  },
  {
    src: "https://via.placeholder.com/500x300/ecfeef/000000?text=5",
    text: "Texto para la imagen 5",
  },
];

export default function Carousel({
  onSlideChange,
}: {
  onSlideChange: (index: number) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Notificar al componente padre cuando el slide cambie
  useEffect(() => {
    onSlideChange(currentIndex);
  }, [currentIndex, onSlideChange]);

  return (
    <div className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative h-56 md:h-96 overflow-hidden rounded-3xl">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="block w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-[#79f277]" : "bg-[#3c3c3c]"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#a7faa5] group-hover:bg-[#79f277] duration-200 focus:ring-4 focus:ring-white">
          <ChevronIconLeft className="size-5 text-white" />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#a7faa5] group-hover:bg-[#79f277] duration-200 focus:ring-4 focus:ring-white">
          <ChevronIcon className="size-5 text-white" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
