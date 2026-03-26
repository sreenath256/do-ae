"use client";
import React from "react";
import AnimatedButton from "../ui/animatedButton";
import { FaArrowRightLong } from "react-icons/fa6";
import ScrollRevealText from "../ui/scrollingText";

const About = () => (
  <div className="w-11/12 mx-auto bg-black min-h-[70vh] grid grid-cols-1 md:grid-cols-3 gap-5 py-16">
    <div className="flex flex-col justify-between">
      <div className="flex items-center gap-3 mb-8">
        <span className="block h-3 w-3 rounded-full primary-bg"></span>
        <span className="text-white font-medium text-sm tracking-widest">
          ABOUT US
        </span>
      </div>
      <div className="">
        <div className="text-white text-6xl md:text-7xl font-sans font-semibold">
          15+
        </div>

        <div className="text-gray-400 max-w-xs mt-2 text-base">
          Professional Teams to empower ideas through high-impact design and
          growth-focused strategy.
        </div>
      </div>
    </div>
    <div className="md:col-span-2">
      <div className="flex flex-col gap-5">
        {/* description */}
        <p className="text-white text-2xl sm:text-4xl xl:text-5xl font-medium leading-tight">
          Do Studio is more than just a digital marketing agency in Dubai. We're
          a team of strategists, creatives, analysts, and developers passionate
          about turning ideas into results. Our mission is to empower businesses through intelligent digital
            strategies that lead to measurable growth.
        </p>
        {/* <ScrollRevealText /> */}
        {/* description */}

        {/* Button */}
        <button className="mt-5 !text-sm primary-bg text-black w-fit px-10 py-4 rounded-full">
          Learn more
        </button>
      </div>
    </div>
  </div>
);

export default About;
