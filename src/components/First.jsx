import Button from "./Button";
import React from "react";

const First = (Props) => {
  let { firstPage, setFirstPage } = Props;

  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center py-15 p-4 max-w-[900px] w-full mx-auto">
      <img
        src="./src/assets/SpudBuddy_logo.png"
        alt="Logo"
        className="logo items-center"
      ></img>
      <div className="flex flex-col gap-4">
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome <span className="text-blue-500 font-medium">Spud</span>
          <span className="text-orange-700 font-medium">ster</span>!
        </h1>
      </div>
      <div className="terms bg-slate-700">
        <h4 className="font-medium text-lg sm:text-lg md:text-xl lg:text-2xl font-light">
          Unleash Your Inner Tot
        </h4>
        <h6 className="font-small text-xs sm:text-xs md:text-sm lg:text-md font-thin">
          Because even small potatoes can become mighty spuds!
        </h6>
        <div className=" text-sm md:text-base italic text-justify py-10">
          <p>
            You’re about to embark on a fitness journey that’ll transform you
            from a{" "}
            <span className="text-blue-500 font-medium bold">couch potato</span>{" "}
            to a full-on{" "}
            <span className="text-orange-700 font-medium bold">fit-tato!</span>{" "}
            Whether you’re here to mash your limits, chip away at your goals, or
            simply avoid being a small fry, we’ve got your back. Hit{" "}
            <span className="text-blue-500 font-medium bold">
              'Accept & Begin!'
            </span>{" "}
            and let’s get those gains crispy on the outside, strong on the
            inside!
          </p>
        </div>
      </div>
      <div
        onClick={() => {
          setFirstPage(!firstPage);
          // callGif
        }}
      >
        <Button
          func={() => {
            window.scrollTo(0, 0);
          }}
        >
          {"Accept & Begin!"}
        </Button>
      </div>
    </div>
  );
};

export default First;
