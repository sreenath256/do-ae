import React from "react";

const Process = ({ service }) => {
  if (!service.section5) return null;

  return (
    <section className="bg-gray-100 text-black p-6 xl:p-16 rounded-[2rem] overflow-hidden relative">
      <div className="space-y-10 xl:space-y-16">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div className="max-w-2xl">
           
            <h2 className="text-3xl xl:text-6xl font-normal tracking-tight mt-4 uppercase">
              {service.section5.title}
            </h2>
          </div>
          <p className="text-neutral-600 text-xs xl:text-base max-w-sm">
            How we take your project from initial concept to market dominance through a structured execution plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(service.section5.steps || []).map((step, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-gray-200 p-8 rounded-3xl flex flex-col justify-between gap-8 hover:bg-black hover:text-white hover:border-black transition-all duration-500 group cursor-pointer shadow-xs hover:shadow-2xl"
            >
              <div className="space-y-6">
                {/* Large stylized step number */}
                <div className="text-4xl xl:text-5xl font-sans font-bold text-[#AEFE00] group-hover:text-white transition-colors duration-500">
                  {step.number}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium tracking-tight group-hover:text-[#AEFE00] transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 group-hover:text-neutral-300 text-xs xl:text-sm leading-relaxed transition-colors duration-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
