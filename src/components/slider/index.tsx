import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = ({ slides }: { slides: string[] }) => {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const handlePreviousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
    console.log(e);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const difference = touchStartX - e.touches[0].clientX;

    console.log(difference);

    if (difference > 50) {
      handleNextSlide();
    } else {
      handlePreviousSlide();
    }
  };

  return (
    <div className="relative overflow-hidden w-full h-full">
      <div
        className="flex transition ease-out duration-300"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {slides.map((s) => (
          <img key={s} src={s} />
        ))}
      </div>

      <div className="absolute w-full top-0 h-full flex justify-between px-4 text-black items-center ">
        <button
          className="bg-red-500 rounded-full p-2"
          onClick={handlePreviousSlide}
        >
          <FaArrowLeft />
        </button>
        <button
          className="bg-red-500 rounded-full p-2"
          onClick={handleNextSlide}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
