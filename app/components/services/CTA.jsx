import React from "react";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

const CTA = ({ service }) => {
  if (!service.section6) return null;

  const gradevid = `https://cdn.sanity.io/files/0hjyj1bs/production/045ed0650046126bc9f3682bde7788583d4110e0.mov`;

  return (
    <section className="bg-black text-white p-8 xl:p-20 rounded-[2rem] overflow-hidden relative min-h-[350px] flex items-center">
      {/* Video Background */}
      <video
        src={gradevid}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="space-y-4 max-w-2xl">
        
          <h2 className="text-3xl xl:text-5xl font-normal tracking-tight uppercase">
            {service.section6.heading}
          </h2>
          <p className="text-neutral-300 text-sm xl:text-base leading-relaxed">
            {service.section6.desc}
          </p>
        </div>

        <div className="group w-full lg:w-auto shrink-0 flex items-center justify-center bg-[#AEFE00] hover:bg-white text-black text-sm font-medium px-10 py-5 rounded-full cursor-pointer relative transition-all duration-300 overflow-hidden">
          <Link href={service.section6.buttonLink || "/contact"} className="z-10 flex items-center gap-2">
            <span>{service.section6.buttonText}</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">
              <HiArrowLongRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
