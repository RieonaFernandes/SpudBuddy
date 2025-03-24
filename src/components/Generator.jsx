import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { WORKOUTS, SCHEMES } from "../utils/workoutData";
import Button from "./Button";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

function updatePosition(introGif, setIntroGif) {
  window.location.href = "#workout";
}

const Generator = (Props) => {
  let {
    poison,
    setPoison,
    muscles,
    setMuscles,
    objective,
    setObjective,
    updateWorkout,
  } = Props;
  const [showDropDown, setShowDropDown] = useState(false);

  function toggleDropDown() {
    //to toggle the dropdown menu based on mouse click
    setShowDropDown(!showDropDown);
  }

  function updateMuscles(muscleGroup) {
    // the muscle group that has been clicked the second time will be removed from the selection
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    //restrict the number of muscles that they want to train (select)
    if (muscles.length > 2) {
      return;
    }

    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowDropDown(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);

    //after 3 muscle groups are selected, it closes the dropdown
    if (muscles.length === 2) {
      setShowDropDown(false);
    }
  }

  return (
    <SectionWrapper
      id={"generate"}
      header={"Generate your workout"}
      title={["Let’s", "Get", "Spud-tacular!"]}
      logo="true"
    >
      {/* Selecting the type of workout you want to take part in  */}
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to complete."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setMuscles([]); //if a new poison is picked reset the muscles to work selection array
                setPoison(type);
              }}
              className={
                "bg-slate-950 border  duration-200 px-4 py-3 rounded-lg hover:border-orange-700 cursor-pointer" +
                (type === poison ? "border-orange-700" : " border-blue-500")
              }
              key={typeIndex}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      {/* Selecting the type of muscles you want to train  */}
      <Header
        index={"02"}
        title={"Lock your targets"}
        description={"Select the muscles you wish to train."}
      />
      <div
        className={
          "bg-slate-950 border boder-solid hover:border-orange-700 p-3 rounded-lg flex flex-col " +
          ((poison == "individual" && muscles.length == 3) ||
          (poison !== "individual" && muscles.length == 1)
            ? "border-orange-700"
            : "")
        }
      >
        <button
          onClick={toggleDropDown}
          className="relative flex items-center justify-center p-3 cursor-pointer"
        >
          <p className="capitalize">
            {muscles.length == 0 ? "Select muscle groups" : muscles.join(" ")}
          </p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-angle-down"></i>
        </button>
        {showDropDown && (
          <div className="flex flex-col p-3 border-orange-700">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => {
                    updateMuscles(muscleGroup);
                  }}
                  key={muscleGroupIndex}
                  className={
                    "hover:text-blue-500 duration-200 cursor-pointer " +
                    (muscles.includes(muscleGroup) ? "text-blue-500" : " ")
                  }
                >
                  <p className="uppercase">
                    {muscleGroup.replaceAll("_", " ")}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>
      {/* Selecting what your ideal end result would be  */}
      <Header
        index={"03"}
        title={"Become the Tot Boss"}
        description={"Select your end game: Tater-tot to Titan!"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setObjective(scheme);
              }}
              className={
                "bg-slate-950 border cursor-pointer duration-200 px-4 hover:border-orange-700 py-3 rounded-lg " +
                (scheme === objective
                  ? "border-orange-700"
                  : " border-blue-400")
              }
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button func={updateWorkout}>{"Load Up"}</Button>
    </SectionWrapper>
  );
};

export default Generator;
