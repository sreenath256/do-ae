import Image from "next/image";
import Link from "next/link";
import React from "react";
import { linegradbg, abstratbg } from "../../../public";

const gradevid = `https://cdn.sanity.io/files/0hjyj1bs/production/c7d3a61f746905c639c64bf6fda1700c247e18ee.mov`;
const chartData = [
  {
    label: "BUDGET GROWTH",
    value: 56,
    max: 100,
    fillbg: "#AEFE00",
    description: "Information Chart",
    footnote: "More Affordable",
  },
  {
    label: "SERVICES DEMAND",
    value: 85,
    max: 100,
    fillbg: "#AEFE00",
    description: "Information Chart",
    footnote: "More Affordable",
  },
  {
    label: "AGENCY GROWTH",
    value: 70,
    max: 100,
    fillbg: "#AEFE00",
    description: "Information Chart",
    footnote: "More Affordable",
  },
  {
    label: "ROI",
    value: 80,
    max: 100,
    fillbg: "#AEFE00",
    description: "Information Chart",
    footnote: "More Affordable",
  },
];

const About = ({ service }) => {
  if (!service.section2) return null;

  return (
    <>
      <section className="bg-black rounded-3xl overflow-hidden relative p-8 xl:p-20 text-white min-h-[400px] flex items-center">
        <video
          src={gradevid}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none"
        />
        <div className="relative z-10 w-full ">
          <div className="space-y-6">
           
            <h2 className="text-3xl xl:text-6xl font-normal tracking-tight uppercase ">
              {service.section2.heading}
            </h2>
            <p className="text-neutral-300 text-sm xl:text-lg leading-relaxed xl:text-justify whitespace-pre-line ">
              {service.section2.desc}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
