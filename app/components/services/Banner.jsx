import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoMailUnreadOutline } from "react-icons/io5";
import { abstratbg } from "../../../public";
const gradevid = `https://cdn.sanity.io/files/0hjyj1bs/production/045ed0650046126bc9f3682bde7788583d4110e0.mov`;

const Banner = ({ service }) => {
  return (
    <>
      <section className="">
        <div className="h-full p-5 py-20 xl:px-16 xl:p-20 bg-black relative overflow-hidden text-white rounded-3xl mt-10 xl:mt-16">
          <div className="z-0 absolute left-0 top-0 h-full w-full  overflow-hidden">
            {/* <Image
              className="object-cover object-bottom"
              fill
              src={abstratbg}
              alt="Abstract Background"
              priority
            /> */}
            <video
              src={gradevid}
              autoPlay
              loop
              muted
              className="absolute left-0 top-0 bottom-0 !w-full !h-full opacity-80 object-cover z-0"
            />
          </div>
          <div className="flex flex-col gap-6 xl:w-[70%] relative z-10">
            <div className="uppercase text-3xl xl:text-5xl xl:leading-16 font-medium">
              <h1>{service.innertitle}</h1>
            </div>

            <p className="text-xs xl:text-lg xl:text-justify">
              { service.desc}
            </p>
            <div className="group w-fit flex items-center primary-bg hover:bg-white hover:text-black text-sm px-10 py-4 rounded-full cursor-pointer relative">
              <Link href={service.section1?.buttonLink || "/contact"} className="z-10">
                {service.section1?.buttonText || "Get in Touch"}
              </Link>
              {/* Arrow absolutely positioned */}
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xl hover:text-black opacity-0 pointer-events-none transition-all duration-300 ease-in-out translate-x-[-16px] group-hover:translate-x-3 group-hover:opacity-100">
                <HiArrowLongRight />
              </span>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-full grid place-items-center -mt-8 z-20 relative">
          <div className="bg-black border-4 w-fit rounded-full px-10 py-5 flex gap-2 items-center justify-center">
            <IoMailUnreadOutline className="text-2xl" />
            <p className="text-sm xl:text-lg">
              <a href="mailto:info@dostudio.co.in">info@dostudio.co.in</a>
            </p>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="bg-gray-100 text-black -mt-12 p-5 xl:p-14 rounded-3xl">
        <div className="xl:w-[70%] mx-auto py-10 flex flex-col items-center gap-5">
          <p className=" xl:text-xl xl:leading-8 text-center">
            {service.section1.desc}
          </p>
        </div>
        <div className=" bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-[80%] mx-auto" />
        <div className="pt-6 flex flex-col md:flex-row gap-10 justify-between items-center w-full">
          <p className="basis-2/5 text-center xl:text-left text-xl xl:text-4xl font-medium capitalize">
            {service.section1.heading}
          </p>
          <div className="basis-3/5 grid grid-cols-2 place-items-center md:flex gap-6 justify-end">
            {(service.stats || []).map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <p className="text-3xl xl:text-5xl font-medium font-sans">
                  {stat.number}
                  <span className="text-gray-500">{stat.symbol}</span>
                  {stat.suffix && <span>{stat.suffix}</span>}
                </p>
                <p className="text-[10px] md:text-base capitalize">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
