'use client'
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import AnimatedButton from "../ui/animatedButton";
import { FaArrowRightLong } from "react-icons/fa6";

const Allservices = [
  {
    id: 1,
    title: "Search Engine Optimization (SEO)",
    image: `https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg`,
        desc: `We help brands rank higher, convert better, and grow faster through smart, results-driven SEO. As an SEO agency in Dubai, we combine local expertise with proven strategies to deliver measurable business growth.`,

  },
  {
    id: 2,
    title: "Social Media Marketing",
    image: `https://cdn.pixabay.com/photo/2018/01/28/10/59/internet-3113279_1280.jpg`,
    desc: `DO Studio is your results-driven social media marketing agency in Dubai, dedicated to making your brand impossible to ignore.`,
  },
  {
    id: 3,
    title: "Web Design & Development",
    image: `https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg`,
    desc: `Build a stunning website that converts, not just looks good.Your website is more than a digital footprint-it’s your brand’s first impression. We build fast, functional, and future-ready websites for businesses across Dubai, helping you stand out in a competitive market.`,
  },
  {
    id: 4,
    title: "Branding",
    image: `https://cdn.pixabay.com/photo/2017/07/03/14/25/architecture-2467874_1280.jpg`,
    desc: `Our branding services are designed to enable your business to rise to prominence with an extremely powerful, unforgettable identity speaking for itself to your target audience.`,
  },
];

const Service = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoverDirection, setHoverDirection] = useState("top");
  const [isMobile, setIsMobile] = useState(false);
  const hoverTimeout = useRef(null);

  // Detect mobile / touch device
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768); // treat < md breakpoint as mobile
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseEnter = (e, id) => {
    if (isMobile) return; // disable hover on mobile
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const direction = y < rect.height / 2 ? "top" : "bottom";

    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setHoverDirection(direction);
      setHoveredItem(id);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (isMobile) return; // disable hover close on mobile
    clearTimeout(hoverTimeout.current);
    setHoveredItem(null);
  };

  const handleClickMobile = (id) => {
    if (!isMobile) return;
    setHoveredItem((prev) => (prev === id ? null : id)); // toggle on click
    setHoverDirection("top"); // default for mobile
  };

  return (
    <div className="bg-white text-black py-10 xl:py-20">
      <div className="w-11/12 mx-auto">
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-5">
          <span className="block h-3 w-3 rounded-full primary-bg"></span>
          <span className="text-black uppercase font-medium text-sm tracking-widest">
            Our Core Services
          </span>
        </div>
        <p className="text-2xl sm:text-4xl xl:w-[80%] font-medium leading-tight">
          At Do Studio, we provide data-driven digital marketing services designed to grow your brand online.
        </p>

        {/* Services */}
        <div className="mt-5">
          {Allservices.map((ser) => (
            <div
              key={ser.id}
              className={`p-5 border-b last:border-none border-gray-200 
                ${hoveredItem === ser.id && "bg-gray-50 border-white"} 
                overflow-hidden transition-all duration-500 ease-in-out`}
              onMouseEnter={(e) => handleMouseEnter(e, ser.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClickMobile(ser.id)}
            >
              {/* Collapsed Header */}
              <div
                className={`flex items-center justify-between cursor-pointer transition-all duration-300 ${
                  hoveredItem === ser.id ? "pb-5" : "py-5"
                }`}
              >
                <div className="flex items-center gap-10">
                  <p className="text-gray-500 font-sans">0{ser.id}</p>
                  <h1 className="font-medium capitalize xl:text-2xl">{ser.title}</h1>
                </div>
                <BsArrowUpRight className="text-sm xl:text-3xl" />
              </div>

              {/* Expanded Content */}
              <div
                className={`grid grid-cols-1 xl:grid-cols-3 gap-10 transition-all duration-500 ease-in-out overflow-hidden 
                  ${hoveredItem === ser.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                style={{
                  transformOrigin:
                    hoveredItem === ser.id
                      ? hoverDirection === "top"
                        ? "top center"
                        : "bottom center"
                      : undefined,
                }}
              >
                {/* Text Content */}
                <div className="md:col-span-2 flex flex-col gap-2 justify-center h-full px-2 xl:px-10 relative">
                  <p className="xl:w-[80%] text-xs xl:text-base">{ser.desc}</p>
                  <button className="mt-5 !text-sm primary-bg text-black w-fit px-5 py-2.5 rounded-full">
                    Know More
                  </button>
                </div>

                {/* Image */}
                <div className="flex flex-col gap-3 xl:py-10 xl:pr-10">
                  <div className="-mt-5 relative rounded-xl shadow-2xs overflow-hidden xl:-rotate-6 aspect-video w-full">
                    <Image
                      src={ser.image}
                      alt={ser.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
