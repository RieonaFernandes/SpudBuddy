import React from "react";
import SectionWrapper from "./SectionWrapper";

function updateState(introGif, setIntroGif) {
  setTimeout(() => {
    window.location.href = "#generate";
  }, 2500);
}
const AnimatedGif = (Props) => {
  let { src, alt, introGif, setIntroGif, id, header, title } = Props;

  return (
    <SectionWrapper id={id} header={header} title={title}>
      <div className="flex justify-center text-center py-10 p-4 max-w-[900px] w-full mx-auto gifdiv">
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
