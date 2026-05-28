
import React from "react";
import { MdOutlineComputer } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { PiBagSimpleBold } from "react-icons/pi";
import { BsMenuApp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const BenefitBar = () => {
  return (
    <div className="mt-28 px-8 text-center grid grid-cols-5  max-sm:grid-cols-2  max-md:grid-cols-3 max-lg:grid-cols-4 gap-12 max-lg:gap-8 max-md:gap-6 max-sm:gap-4">
      <div>
        <div className="flex justify-center items-center">
          <MdOutlineComputer className="text-6xl " />{" "}
        </div>
        <div className="font-bold text-lg mb-4">Expert-Led courses</div>
        <div className="text-gray-500">
          Learn from industry profestional and expert Instructor.
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center">
          <IoMdTime className="text-6xl " />{" "}
        </div>
        <div className="font-bold text-lg mb-4">Flexible Learning</div>
        <div className="text-gray-500">
          Study at your own pace. anytime and anywhere you want.
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center">
          <PiBagSimpleBold className="text-6xl " />{" "}
        </div>
        <div className="font-bold text-lg mb-4">Practical Skill</div>
        <div className="text-gray-500">
          Course designed to help you apply what you learn in real life.
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center">
          <BsMenuApp className="text-6xl " />{" "}
        </div>
        <div className="font-bold text-lg mb-4">Diverse Topics</div>
        <div className="text-gray-500">
          Explore a wide rang of subjects from tech and business to arts.
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center">
          <BiSupport className="text-6xl " />{" "}
        </div>
        <div className="font-bold text-lg mb-4">Always Here to Help</div>
        <div className="text-gray-500">
          Our support team and community are always here for you.
        </div>
      </div>
    </div>
  )
}

export default BenefitBar