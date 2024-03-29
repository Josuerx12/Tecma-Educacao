import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const PrevArrow = ({ className, style, onClick }: ArrowProps) => {
  return (
    <div
      className={`${className} bg-black rounded-full w-44 h-44 text-white`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

const NextArrow = ({ className, style, onClick }: ArrowProps) => {
  return (
    <div
      className={`${className} bg-black rounded-full w-44 h-44 text-white`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

export { NextArrow, PrevArrow };
