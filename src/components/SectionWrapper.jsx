//Header for a new Section
import React from "react";

const SectionWrapper = (Props) => {
  const { children, header, title, id } = Props;

  let titleData =
    title.length <= 3 ? (
      <div>
        {title[0]} <span className="uppercase text-blue-500">{title[1]}</span>{" "}
        {title[2]}
      </div>
    ) : (
      <div>
        <span className="uppercase text-blue-500">{title[0]}</span> {title[1]}
        <span className="uppercase text-orange-500">{title[2]}</span> {title[3]}
      </div>
    );

  return (
    <section id={id} className="min-h-screen flex flex-col gap-10">
      <div className="bg-slate-950 py-10 flex flex-col gap-2 justify-center items-center">
        <p className="uppercase font-medium">{header}</p>
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {titleData}
        </h2>
      </div>
      <div className="max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
