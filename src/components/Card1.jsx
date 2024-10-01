import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Card1({
  icon,
  icon2,
  text,
  content,
  source,
  copy,
  onClick,
}) {
  return (
    <Link to={source}>
      <div
        className="rounded-2xl p-1 md:mt-6 mt-3"
        onClick={onClick} // Add onClick handler here
      >
        <div className="flex flex-row items-center gap-5 md:gap-7 justify-between border py-3 px-3 rounded-2xl">
          <div className="flex gap-5 items-center">
            <div className="font-semibold text-[14px] lg:text-[11px] xl:text-[14px] uppercase rounded-[100%] flex justify-center items-center">
              <img className="" src={icon} alt="" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-black text-sm">{text}</h2>
              <p className="text-[gray] text-sm">{content}</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-[#FF790C]">{copy}</p>
            {icon2 && <img className="" src={icon2} alt="" />}
          </div>
        </div>
      </div>
    </Link>
  );
}
