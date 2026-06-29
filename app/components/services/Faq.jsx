"use client";
import React, { useState, useRef, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";


export default function FAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-black">
      <div className="mt-20 mb-10">
        <h2 className="text-center text-2xl uppercase xl:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="max-w-4xl mx-auto">
        {service?.faq?.map((item, index) => (
          <div
            key={index}
            className={`mb-4 !-mt-1 ${openIndex === index && ''} bg-gray-50 border border-gray-200 rounded-2xl mt-5`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 font-medium text-lg flex justify-between  items-center"
              aria-expanded={openIndex === index}
            >
              {item.question}
              <span
                className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                  }`}
              >
                <RiArrowDropDownLine className="text-xl" />
              </span>
            </button>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                height:
                  openIndex === index
                    ? contentRefs.current[index]?.scrollHeight
                    : 0,
                overflow: "hidden",
                transition: "height 0.3s ease",
              }}
            >
              <div className="p-4 text-sm ">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
