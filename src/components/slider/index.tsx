import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider = ({ slides }: { slides?: string[] }) => {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const handlePreviousSlide = () => {
    if (slides)
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    if (slides)
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
        {slides?.map((s) => (
          <img key={s} src={s} />
        ))}
      </div>

      <div className="absolute w-full top-0 h-full flex justify-between  text-black items-center ">
        <button
          className="text-red-600 text-3xl h-full px-4"
          onClick={handlePreviousSlide}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="text-red-600 text-3xl h-full px-4"
          onClick={handleNextSlide}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Slider;
