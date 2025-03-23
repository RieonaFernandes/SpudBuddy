//Header for a new Section
import React from "react";
import logoImg from "../assets/images/SpudBuddyLogo.png";

const SectionWrapper = (Props) => {
  const { children, header, title, id, logo } = Props;

  let titleData =
    title.length <= 3 ? (
      <div>
        {title[0]} <span className="uppercase text-blue-500">{title[1]}</span>{" "}
        {title[2]}
      </div>
    ) : (
      <div>
        <span className="uppercase text-blue-500">{title[0]}</span> {title[1]}
        <span className="uppercase text-orange-700">{title[2]}</span> {title[3]}
      </div>
    );

  return (
    <section
      id={id}
      className={(id === "gif" ? "" : "min-h-screen") + " flex flex-col gap-10"}
    >
      <div className="bg-slate-950 py-10 flex flex-col gap-2 justify-center items-center">
        <p className="uppercase font-medium text-center">{header}</p>
        {logo === "true" && (
          <div className="relative w-15 sm:w-15 md:w-20 lg:w-25 h-15 sm:h-15 md:h-20 lg:h-25 top-1 right-2 rounded-full flex gap-1">
            <img src={logoImg} alt="Spudbuddy"></img>
          </div>
        )}
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
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
