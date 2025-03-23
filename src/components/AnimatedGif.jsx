import React from "react";
import SectionWrapper from "./SectionWrapper";

const AnimatedGif = (Props) => {
  let { src, alt, introGif, setIntroGif, id, header, title } = Props;

  return (
    <SectionWrapper id={id} header={header} title={title} logo="false">
      <div className="flex justify-center text-center max-w-[800px] mx-auto">
        <img
          src={src}
          alt={alt}
          className={"gif"}
          onLoad={() => {
            if (id === "support") updateState(introGif, setIntroGif);
          }}
        ></img>
      </div>
    </SectionWrapper>
  );
};

export default AnimatedGif;
