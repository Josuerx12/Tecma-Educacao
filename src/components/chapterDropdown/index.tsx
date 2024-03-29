import { ICourseChapter } from "../../interfaces/ICourses";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

const ChapterDropDown = ({
  chapter,
  index,
}: {
  chapter: ICourseChapter;
  index: number;
}) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  return (
    <div
      className="w-fit"
      title={
        "UNITEC - Clique para visualizar as aulas do " + chapter.chapter_title
      }
      onClick={() => setIsOpenDropdown((prev) => !prev)}
    >
      <h3 className="flex gap-2 items-center text-neutral-800 cursor-pointer">
        <span className="bg-green-600 text-3xl font-bold text-white w-12 h-10 flex justify-center items-center">
          {index + 1}
        </span>{" "}
        {chapter.chapter_title}{" "}
        <FaArrowDown
          className={`${
            isOpenDropdown && "rotate-180"
          } transition-all ease-linear duration-100`}
        />
      </h3>
      <ul className={`${isOpenDropdown ? "relative" : "hidden"}`}>
        {chapter.chapter_topics.map((topics, i) => (
          <li className="ml-2 text-neutral-950" key={i}>
            <span className="text-neutral-600">Aula {i + 1}</span> {topics}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterDropDown;
