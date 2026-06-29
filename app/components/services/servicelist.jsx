"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { abstratbg } from "../../../public";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { serviceData } from "../../components/services/data";

gsap.registerPlugin(ScrollTrigger);

const servicelist = () => {
  const stackRefs = useRef([]);

  useEffect(() => {
    stackRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => {
      stackRefs.current.forEach((el) => {
        if (el && el.scrollTrigger) el.scrollTrigger.kill();
      });
    };
  }, []);

  return (
    <div className="w-11/12 xl:w-9/12 mx-auto py-10 flex flex-col gap-16 xl:gap-20">
      {serviceData.map((service, idx) => (
        <div key={idx}>
          <div
            className={`grid bg-white grid-cols-1 md:grid-cols-2 gap-5 gap-x-10 items-center `}
            ref={(el) => (stackRefs.current[idx] = el)}
          >
            {/* Text first for odd idx (second, fourth, ...) */}
            {idx % 2 === 1 && (
              <div className="h-full flex justify-center flex-col gap-3 order-1 md:order-1">
                <h2 className="text-3xl xl:text-4xl text-black capitalize font-normal">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm xl:text-base">
                  {service.desc}
                </p>

                <Link href={`/services/${service.slug}`} className="mt-1 relative bg-black text-white font-medium text-sm w-fit px-2 py-[0.35em] pl-3 h-[2.8em] rounded-full flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group">
                  <span className="mr-10">Get started</span>
                  <div className="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-full flex items-center justify-center transition-all duration-200 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      ></path>
                    </svg>
                  </div>
                </Link>

              </div>
            )}
            {/* Video right for even idx, left for odd idx */}
            <div
              className={`w-full order-2 md:order-${idx % 2 === 1 ? "2" : "1"}`}
            >
              <div className="relative aspect-square">
                <Image
                  src={service.thumbsrc}
                  fill
                  className="w-full h-full object-cover"
                  alt={service.sertitle || "Service item"}
                />
              </div>
            </div>
            {/* Text for even idx (first, third, ...) */}
            {idx % 2 === 0 && (
              <div className="h-full flex justify-center flex-col gap-3 order-1 md:order-2">
                <h2 className="text-3xl xl:text-4xl text-black font-normal capitalize xl:w-[80%]">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm xl:text-base">
                  {service.desc}
                </p>
                <Link href={`/services/${service.slug}`} className="mt-1 relative bg-black text-white font-medium text-sm w-fit px-2 py-[0.35em] pl-3 h-[2.8em] rounded-full flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group">
                  <span className="mr-10">Get started</span>
                  <div className="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-full flex items-center justify-center transition-all duration-200 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default servicelist;
