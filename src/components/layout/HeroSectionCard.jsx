import React from "react";
import { NavLink } from "react-router-dom";

const HeroSectionCard = ({
  Title1,
  Title2,
  Subtitle,
  body,
  img,
  marque1,
  marque2,
  marque3,
  marque4,
  marque5,
  marque6,
}) => {
  return (
    <div className=" m-auto text-2xl text-white max-lg:text-sm">
      <div className="bg-black w-full md:flex">
        <div className="   w-[50%] p-[5%] max-md:w-full">
          <h1 className="text-[48px] max-xl:text-[32px] font-bold leading-tight tracking-tight">
            <span className="inline-block">{Title1}</span>
            <span className="inline-block text-teal-300">{Title2}</span>
          </h1>
          <div className="mt-16">{Subtitle} </div>
          <div className="mt-10 text-sm text-gray-500">{body}</div>
          <div className="font-bold min-lg:mt-24 ">
            <button className="underline pr-12  md:mt-12">
              <NavLink to="/register">Start For Free</NavLink>
            </button>
            <button className="bg-teal-300 px-4 py-4 rounded-md  md:mt-12">
              <NavLink to="/courses">Explore Courses</NavLink>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-[50%] max-md:w-full">
          <img src={img} alt="" />
        </div>
      </div>
      <div className=" w-full bg-black text-white  ">
        <marquee behavior="" direction="">
          <div className="flex m-4 justify-around ">
            <div>{marque1}</div> 
            <div>{marque2}</div>
            <div>{marque3}</div>
            <div>{marque4}</div>
            <div>{marque5}</div>
            <div>{marque6}</div>
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default HeroSectionCard;
