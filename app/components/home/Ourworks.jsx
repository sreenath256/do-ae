"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { MdArrowForward } from "react-icons/md";

const caseStudies = [
  {
    id: "01",
    title: "Branding",
    image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg",
  },
  {
    id: "02",
    title: "Creatives",
    image: "https://images.pexels.com/photos/9783812/pexels-photo-9783812.jpeg",
  },
  {
    id: "03",
    title: "Web Design",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
  },
  {
    id: "04",
    title: "Package Design",
    image: "https://images.pexels.com/photos/9594420/pexels-photo-9594420.jpeg",
  },
  {
    id: "05",
    title: "Print Design",
    image: "https://images.pexels.com/photos/590037/pexels-photo-590037.jpeg",
  },
  {
    id: "06",
    title: "Production",
    image: "https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg",
  },
];

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const listRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Preload images on component mount
  useEffect(() => {
    caseStudies.forEach((study) => {
      const img = new window.Image();
      img.src = study.image;
      img.onload = () => {
        setImagesLoaded((prev) => ({ ...prev, [study.image]: true }));
      };
    });
  }, []);

  const handleMouseEnter = (index) => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    // Set hover state immediately
    setHoveredIndex(index);
    
    // Update current selection with animation
    if (index !== current) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setTimeout(() => setIsAnimating(false), 300);
      }, 10);
    }
  };

  const handleMouseLeave = () => {
    // Delay clearing hover state to prevent flickering
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
    }, 50);
  };

  const handleMouseLeaveList = () => {
    // Clear timeout and immediately remove hover
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredIndex(null);
  };

  // Check if item should be visually active
  const isItemActive = (index) => {
    // Always return true for the current item when not hovering anything
    if (hoveredIndex === null) {
      return current === index;
    }
    // When hovering, only the hovered item is active
    return hoveredIndex === index;
  };

  return (
    <section className="w-11/12 mx-auto bg-black text-white py-20">
      <div className="flex flex-col md:flex-row gap-y-2 justify-between">
        <h2 className="text-2xl sm:text-4xl font-medium mb-14">Our Works</h2>
        <p>
          We provide businesses with an expert team that guides them through<br/>
          establishing online marketing strategy.
        </p>
      </div>
      <div className="md:mt-10 grid grid-cols-1 md:grid-cols-5 gap-x-20 gap-y-0 items-start">
        {/* LEFT - Case Studies List */}
        <div 
          className="md:col-span-3 h-full flex flex-col justify-center w-full"
          ref={listRef}
          onMouseLeave={handleMouseLeaveList}
        >
          <div className="flex flex-col mt-10">
            {caseStudies.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={`relative flex items-center justify-between border-b border-white/20 py-6 cursor-pointer transition-all duration-300 ${
                  isItemActive(index)
                    ? "opacity-100 bg-zinc-900/80 pl-4"
                    : "opacity-70 hover:opacity-100"
                }`}
                style={{ 
                  zIndex: isItemActive(index) ? 10 : 1,
                  transform: isItemActive(index) ? 'translateY(0)' : 'none'
                }}
              >
                {/* Active indicator bar */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-white transition-all duration-300 ${
                    isItemActive(index) ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                
                <div className="flex items-center gap-6 ml-4">
                  <span
                    className={`text-sm w-6 transition-all duration-300 ${
                      isItemActive(index) 
                        ? "text-white font-bold scale-110" 
                        : "text-white/60"
                    }`}
                  >
                    {item.id}
                  </span>
                  <h3 className={`text-lg md:text-xl transition-all duration-300 ${
                    isItemActive(index) 
                      ? "font-semibold tracking-wide" 
                      : "font-normal"
                  }`}>
                    {item.title}
                  </h3>
                </div>
                <span
                  className={`transition-all text-2xl -rotate-45 duration-300 mr-4 ${
                    isItemActive(index)
                      ? "text-white scale-125 opacity-100"
                      : "text-white/30 opacity-0"
                  }`}
                >
                  <MdArrowForward/>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - Image Display */}
        <div className="relative md:col-span-2 mt-10">
          <div className="relative aspect-[1/1] overflow-hidden bg-neutral-900 rounded-lg">
            {caseStudies.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === current
                    ? "translate-y-0 opacity-100 z-10"
                    : index < current
                    ? "-translate-y-full opacity-0"
                    : "translate-y-full opacity-0"
                }`}
              >
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    imagesLoaded[item.image] ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMyMDIwMjAiLz4KPHBhdGggZD0iTTAgNTBINTAuNVYxMDBIMFY1MFpNNTAgMEgxMDBWNTAuNUg1MFYwWiIgZmlsbD0iIzMwMzAzMCIvPgo8L3N2Zz4K"
                  />
                </div>
                {/* Loading skeleton */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 transition-opacity duration-500 ${
                    imagesLoaded[item.image] ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>
            ))}

            {/* Animation overlay */}
            <div
              className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-700 ${
                isAnimating
                  ? "opacity-100 bg-gradient-to-t from-black/20 via-transparent to-black/20"
                  : "opacity-0"
              }`}
            />
          </div>

          {/* Current indicator dots */}
          <div className="flex justify-end gap-2 mt-6">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setHoveredIndex(index);
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "bg-white w-10 shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
                    : "bg-white/30 w-3 hover:bg-white/60 hover:w-6"
                }`}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}