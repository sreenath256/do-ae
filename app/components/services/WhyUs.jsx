import React from "react";
import { FiCheckCircle, FiTrendingUp, FiGlobe } from "react-icons/fi";

const WhyUs = ({ service }) => {
  if (!service.section4) return null;

  // Split description into three distinct pillars using keywords
  const paragraphs = service.section4.desc
    .split(/(?=(?:We understand|We're obsessed|We bridge|We design|We offer|We are technical|We are completely|We know|We combine))/gi)
    .map(p => p.trim())
    .filter(Boolean);

  const icons = [FiCheckCircle, FiGlobe, FiTrendingUp];
  const colors = ["#AEFE00", "#AEFE00", "#AEFE00"];

  return (
    <section className="bg-black text-white p-6 xl:p-16 rounded-[2rem] overflow-hidden relative">
      <div className="relative z-10 space-y-5 xl:space-y-5">
        <div className="max-w-3xl">

          <h2 className="text-3xl xl:text-6xl font-normal tracking-tight mt-4 uppercase">
            {service.section4.title}
          </h2>
        </div>

        <div className="flex gap-6 xl:gap-8">
          <h3 className="text-xl xl:text-2xl tracking-tight group-hover:text-[#AEFE00] transition-colors duration-500">
            {service.section4.desc}
          </h3>
          
          
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
